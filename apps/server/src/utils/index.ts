import { AuthenticationError, NotFoundError } from '@errors';
import { STATUS } from '@resolvers/Request';
import { Context } from '@utils/interfaces';
import { createToken } from '@utils/jwt';

export const getLoggedInUser = (context: Context) => {
  const { user } = context;
  if (!user) throw new AuthenticationError('You must login first!');
  return user;
};

export const getAuthPayload = (user: any) => {
  const { id, role } = user;
  return {
    token: createToken({ id, role }),
    user,
  };
};

interface StatusOption {
  id: string;
  status: STATUS;
  conditions: STATUS[];
}
export const setRequestStatus = async (
  context: Context,
  option: StatusOption
) => {
  const { id, status, conditions } = option;
  const requestExists = await context.prisma.$exists.request({
    id,
    status_in: conditions,
  });
  const message =
    status === 'APPROVED'
      ? 'already been approved/resolved'
      : status === 'DISAPPROVED'
      ? 'already been disapproved/resolved'
      : 'not been approved yet';
  if (!requestExists)
    throw new NotFoundError(`The request does not exist or it has ${message}`);

  return context.prisma.updateRequest({
    where: { id },
    data: { status },
  });
};
