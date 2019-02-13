import { ITypeMap } from '@generated/resolvers';

import { AuthPayloadParent } from '@resolvers/AuthPayload';
import { MutationParent } from '@resolvers/Mutation';
import { QueryParent } from '@resolvers/Query';
import { RequestParent } from '@resolvers/Request';
import { UserParent } from '@resolvers/User';

import { Context } from '@resolvers/types/Context';

export interface TypeMap extends ITypeMap {
  Context: Context;
  QueryParent: QueryParent;
  MutationParent: MutationParent;
  AuthPayloadParent: AuthPayloadParent;
  UserParent: UserParent;
  RequestParent: RequestParent;
}
