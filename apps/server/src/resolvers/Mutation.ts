import { AuthenticationError, NotFoundError } from '@errors';
import { MutationResolvers } from '@generated/resolvers';
import { TypeMap } from '@resolvers/types/TypeMap';
import { getAuthPayload } from '@utils';
import { compare, hash } from '@utils/bcrypt';

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  login: async (parent, args, context) => {
    const { username, password } = args;

    const isEmail = username.includes('@') && username.includes('.');
    const user = isEmail
      ? await context.prisma.user({ email: username })
      : await context.prisma.user({ username });

    if (!user)
      throw new AuthenticationError(
        `We can't find an account with the ${
          isEmail ? 'email' : 'username'
        }: ${username}`
      );

    const valid = await compare(password, user.password);
    if (!valid)
      throw new AuthenticationError(
        "Sorry, that password isn't right. Please try again"
      );
    return getAuthPayload(user);
  },

  signup: async (parent, args, context) => {
    const password = await hash(args.password);
    const user = await context.prisma.createUser({ ...args, password });
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
    const { id } = args;
    const { id: userId } = context.user;
    const requestExists = await context.prisma.$exists.request({
      id,
      owner: { id: userId },
    });
    if (!requestExists)
      throw new NotFoundError("You don't have such a request");

    return context.prisma.updateRequest({
      where: { id },
      data: args,
    });
  },

  approveRequest: async (parent, args, context) => {
    const { id } = args;
    const requestExists = await context.prisma.$exists.request({
      id,
      status_in: ['DISAPPROVED', 'PENDING'],
    });
    if (!requestExists)
      throw new NotFoundError(
        'The request does not exist or it has already been approved/resolved'
      );

    return context.prisma.updateRequest({
      where: { id },
      data: { status: 'APPROVED' },
    });
  },

  disapproveRequest: async (parent, args, context) => {
    const { id } = args;
    const requestExists = await context.prisma.$exists.request({
      id,
      status_in: ['APPROVED', 'PENDING'],
    });
    if (!requestExists)
      throw new NotFoundError(
        'The request does not exist or has already been disapproved/resolved'
      );

    return context.prisma.updateRequest({
      where: { id },
      data: { status: 'DISAPPROVED' },
    });
  },

  resolveRequest: async (parent, args, context) => {
    const { id } = args;
    const requestExists = await context.prisma.$exists.request({
      id,
      status: 'APPROVED',
    });
    if (!requestExists)
      throw new NotFoundError(
        'The request does not exist or it has not been approved yet'
      );

    return context.prisma.updateRequest({
      where: { id },
      data: { status: 'RESOLVED' },
    });
  },
};
