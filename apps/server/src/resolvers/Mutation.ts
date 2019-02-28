import { AuthenticationError, ConflictError, NotFoundError } from '@errors';
import { MutationResolvers } from '@generated/resolvers';
import { TypeMap } from '@resolvers/types/TypeMap';
import { getAuthPayload, setRequestStatus } from '@utils';
import { compare, hash } from '@utils/bcrypt';

// tslint:disable-next-line: no-empty-interface
export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  login: async (parent, args, context) => {
    const { username, password } = args;

    const isEmail = username.includes('@') && username.includes('.');
    const user = isEmail
      ? await context.prisma.user({ email: username })
      : await context.prisma.user({ username });
    const message = `We can't find ${
      isEmail ? 'an email' : 'a username'
    }: ${username} with the supplied password. Please try again`;
    if (!user) throw new AuthenticationError(message);

    const valid = await compare(password, user.password);
    if (!valid) throw new AuthenticationError(message);
    const requests = await context.prisma.user({ id: user.id }).requests();
    return getAuthPayload({ ...user, requests });
  },

  signup: async (parent, args, context) => {
    const exists = await context.prisma.$exists.user({
      OR: [{ email: args.email }, { username: args.username }],
    });

    // @ts-ignore
    const { confirmPassword, ...others } = args;

    if (exists)
      throw new ConflictError(
        'A user with email or username already exists. Do you want to login?'
      );
    const password = await hash(args.password);
    const user = await context.prisma.createUser({ ...others, password });
    return getAuthPayload(user);
  },

  updateProfile: async (parent, args, context) => {
    const { firstName, lastName } = args;
    const { id } = context.user;

    return context.prisma.updateUser({
      where: { id },
      data: { firstName, lastName },
    });
  },

  createRequest: async (parent, args, context) => {
    const { id } = context.user;
    return context.prisma.createRequest({
      ...args,
      owner: { connect: { id } },
    });
  },

  updateRequest: async (parent, args, context) => {
    const { id, ...data } = args;
    const { id: userId } = context.user;
    const requestExists = await context.prisma.$exists.request({
      id,
      owner: { id: userId },
    });
    if (!requestExists)
      throw new NotFoundError("You don't have such a request");
    const requestEditable = await context.prisma.$exists.request({
      id,
      status_in: ['DISAPPROVED', 'PENDING'],
    });
    if (!requestEditable)
      throw new NotFoundError(
        'You cannot update a request that has already been approved or resolved'
      );

    return context.prisma.updateRequest({
      where: { id },
      data,
    });
  },

  approveRequest: async (parent, args, context) =>
    setRequestStatus(context, {
      id: args.id,
      status: 'APPROVED',
      conditions: ['PENDING', 'DISAPPROVED'],
    }),

  disapproveRequest: async (parent, args, context) =>
    setRequestStatus(context, {
      id: args.id,
      status: 'DISAPPROVED',
      conditions: ['PENDING', 'APPROVED'],
    }),

  resolveRequest: async (parent, args, context) =>
    setRequestStatus(context, {
      id: args.id,
      status: 'RESOLVED',
      conditions: ['APPROVED'],
    }),
};
