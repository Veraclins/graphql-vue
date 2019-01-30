import { AuthPayloadResolvers } from '@generated/resolvers';
import { TypeMap } from '@resolvers/types/TypeMap';
import { UserParent } from '@resolvers/User';

export interface AuthPayloadParent {
  token: string;
  user: UserParent;
}

export const AuthPayload: AuthPayloadResolvers.Type<TypeMap> = {
  token: parent => parent.token,
  user: parent => parent.user,
};
