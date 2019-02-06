import { QueryResolvers } from '@generated/resolvers';
import { TypeMap } from '@resolvers/types/TypeMap';

// tslint:disable-next-line: no-empty-interface
export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
  getAllRequests: (parent, args, context) => context.prisma.requests(),

  getRequestById: (parent, args, context) =>
    context.prisma.request({ id: args.id }),
  getUserRequests: (parent, args, context) => {
    const { id } = context.user;
    return context.prisma.user({ id }).requests();
  },
};
