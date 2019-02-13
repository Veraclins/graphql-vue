import { IResolvers } from '@generated/resolvers';
import { TypeMap } from '@resolvers/types/TypeMap';

import { AuthPayload } from '@resolvers/AuthPayload';
import { Mutation } from '@resolvers/Mutation';
import { Query } from '@resolvers/Query';
import { Request } from '@resolvers/Request';
import { User } from '@resolvers/User';

export const resolvers: IResolvers<TypeMap> = {
  Query,
  Mutation,
  AuthPayload,
  User,
  Request,
};
