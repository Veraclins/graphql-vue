import { RequestResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';
import { UserParent } from './User';

export type STATUS = 'PENDING' | 'APPROVED' | 'DISAPPROVED' | 'RESOLVED';

export interface RequestParent {
  id: string;
  title: string;
  device: string;
  description: string;
  status?: STATUS;
  createdAt: string;
  updatedAt: string;
  owner?: UserParent;
}

export const Request: RequestResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  title: parent => parent.title,
  device: parent => parent.device,
  description: parent => parent.description,
  status: parent => parent.status,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  owner: (parent, args, context) =>
    context.prisma.request({ id: parent.id }).owner(),
};
