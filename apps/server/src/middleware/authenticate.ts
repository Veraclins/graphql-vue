import { AuthenticationError } from '@errors';
import { Context } from '@utils/interfaces';
import { verifyToken } from '@utils/jwt';
import { GraphQLResolveInfo } from 'graphql';

export default async (
  resolve: Function,
  root: any,
  args: any,
  context: Context,
  info: GraphQLResolveInfo
) => {
  const {
    request: { headers },
  } = context;
  const hasToken = headers['x-access-token'] || headers.authorization;

  if (!hasToken)
    throw new AuthenticationError(
      'Please provide an authentication header required!'
    );

  const token =
    headers['x-access-token'] || headers.authorization.replace('Bearer ', '');

  const decoded = verifyToken(token);
  if (!decoded)
    throw new AuthenticationError(
      'You access token is invalid or expired. Please login again!'
    );
  const { id, role } = decoded;
  context.user = { id, role };
  return resolve(root, args, context, info);
};
