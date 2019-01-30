/* DO NOT EDIT! */
import { GraphQLResolveInfo } from 'graphql';

export interface ITypeMap {
  Context: any;
  STATUS: any;

  QueryParent: any;
  MutationParent: any;
  AuthPayloadParent: any;
  UserParent: any;
  RequestParent: any;
}

export namespace QueryResolvers {
  export type GetAllRequestsResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['RequestParent'][] | null | Promise<T['RequestParent'][] | null>;

  export interface ArgsGetRequestById<T extends ITypeMap> {
    id: string;
  }

  export type GetRequestByIdResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsGetRequestById<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['RequestParent'] | null | Promise<T['RequestParent'] | null>;

  export type GetUserRequestsResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['RequestParent'][] | null | Promise<T['RequestParent'][] | null>;

  export interface Type<T extends ITypeMap> {
    getAllRequests: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['RequestParent'][] | null | Promise<T['RequestParent'][] | null>;
    getRequestById: (
      parent: T['QueryParent'],
      args: ArgsGetRequestById<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['RequestParent'] | null | Promise<T['RequestParent'] | null>;
    getUserRequests: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['RequestParent'][] | null | Promise<T['RequestParent'][] | null>;
  }
}

export namespace MutationResolvers {
  export interface ArgsLogin<T extends ITypeMap> {
    username: string;
    password: string;
  }

  export type LoginResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsLogin<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>;

  export interface ArgsSignup<T extends ITypeMap> {
    email: string;
    password: string;
    username: string;
  }

  export type SignupResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsSignup<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>;

  export interface ArgsUpdateProfile<T extends ITypeMap> {
    id: string;
    firstName: string;
    lastName: string;
  }

  export type UpdateProfileResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsUpdateProfile<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['UserParent'] | Promise<T['UserParent']>;

  export interface ArgsCreateRequest<T extends ITypeMap> {
    title: string;
    device: string;
    description: string;
  }

  export type CreateRequestResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsCreateRequest<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['RequestParent'] | Promise<T['RequestParent']>;

  export interface ArgsUpdateRequest<T extends ITypeMap> {
    id: string;
    title: string | null;
    device: string | null;
    description: string | null;
  }

  export type UpdateRequestResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsUpdateRequest<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['RequestParent'] | Promise<T['RequestParent']>;

  export interface ArgsApproveRequest<T extends ITypeMap> {
    id: string;
  }

  export type ApproveRequestResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsApproveRequest<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['RequestParent'] | Promise<T['RequestParent']>;

  export interface ArgsDisapproveRequest<T extends ITypeMap> {
    id: string;
  }

  export type DisapproveRequestResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsDisapproveRequest<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['RequestParent'] | Promise<T['RequestParent']>;

  export interface ArgsResolveRequest<T extends ITypeMap> {
    id: string;
  }

  export type ResolveRequestResolver<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsResolveRequest<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['RequestParent'] | Promise<T['RequestParent']>;

  export interface Type<T extends ITypeMap> {
    login: (
      parent: T['MutationParent'],
      args: ArgsLogin<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>;
    signup: (
      parent: T['MutationParent'],
      args: ArgsSignup<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>;
    updateProfile: (
      parent: T['MutationParent'],
      args: ArgsUpdateProfile<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['UserParent'] | Promise<T['UserParent']>;
    createRequest: (
      parent: T['MutationParent'],
      args: ArgsCreateRequest<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['RequestParent'] | Promise<T['RequestParent']>;
    updateRequest: (
      parent: T['MutationParent'],
      args: ArgsUpdateRequest<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['RequestParent'] | Promise<T['RequestParent']>;
    approveRequest: (
      parent: T['MutationParent'],
      args: ArgsApproveRequest<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['RequestParent'] | Promise<T['RequestParent']>;
    disapproveRequest: (
      parent: T['MutationParent'],
      args: ArgsDisapproveRequest<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['RequestParent'] | Promise<T['RequestParent']>;
    resolveRequest: (
      parent: T['MutationParent'],
      args: ArgsResolveRequest<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['RequestParent'] | Promise<T['RequestParent']>;
  }
}

export namespace AuthPayloadResolvers {
  export type TokenResolver<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserResolver<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['UserParent'] | Promise<T['UserParent']>;

  export interface Type<T extends ITypeMap> {
    token: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['UserParent'] | Promise<T['UserParent']>;
  }
}

export namespace UserResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UsernameResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type FirstNameResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type LastNameResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type RequestsResolver<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['RequestParent'][] | null | Promise<T['RequestParent'][] | null>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    email: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    username: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    firstName: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    lastName: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    createdAt: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    requests: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['RequestParent'][] | null | Promise<T['RequestParent'][] | null>;
  }
}

export namespace RequestResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['RequestParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TitleResolver<T extends ITypeMap> = (
    parent: T['RequestParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DeviceResolver<T extends ITypeMap> = (
    parent: T['RequestParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DescriptionResolver<T extends ITypeMap> = (
    parent: T['RequestParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type StatusResolver<T extends ITypeMap> = (
    parent: T['RequestParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['STATUS'] | null | Promise<T['STATUS'] | null>;

  export type CreatedAtResolver<T extends ITypeMap> = (
    parent: T['RequestParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtResolver<T extends ITypeMap> = (
    parent: T['RequestParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type OwnerResolver<T extends ITypeMap> = (
    parent: T['RequestParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo
  ) => T['UserParent'] | null | Promise<T['UserParent'] | null>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['RequestParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    title: (
      parent: T['RequestParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    device: (
      parent: T['RequestParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    description: (
      parent: T['RequestParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    status: (
      parent: T['RequestParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['STATUS'] | null | Promise<T['STATUS'] | null>;
    createdAt: (
      parent: T['RequestParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T['RequestParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    owner: (
      parent: T['RequestParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo
    ) => T['UserParent'] | null | Promise<T['UserParent'] | null>;
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>;
  Mutation: MutationResolvers.Type<T>;
  AuthPayload: AuthPayloadResolvers.Type<T>;
  User: UserResolvers.Type<T>;
  Request: RequestResolvers.Type<T>;
}
