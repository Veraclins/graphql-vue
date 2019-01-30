import { UserResolvers } from '@generated/resolvers';
import { RequestParent } from '@resolvers/Request';
import { TypeMap } from '@resolvers/types/TypeMap';

export interface UserParent {
  id: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  createdAt: string;
  requests?: RequestParent[];
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  email: parent => parent.email,
  username: parent => parent.username,
  firstName: parent => parent.firstName,
  lastName: parent => parent.lastName,
  createdAt: parent => parent.createdAt,
  requests: (parent, args, context) =>
    context.prisma.user({ id: parent.id }).requests(),
};
