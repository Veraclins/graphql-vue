import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { Options } from 'graphql-binding'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { BasePrismaOptions, makePrismaBindingClass } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    requests: <T = Array<Request | null>>(args: { where?: RequestWhereInput | null, orderBy?: RequestOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    request: <T = Request | null>(args: { where: RequestWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    requestsConnection: <T = RequestConnection>(args: { where?: RequestWhereInput | null, orderBy?: RequestOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null>;
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    createRequest: <T = Request>(args: { data: RequestCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    updateRequest: <T = Request | null>(args: { data: RequestUpdateInput, where: RequestWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    deleteRequest: <T = Request | null>(args: { where: RequestWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ;
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    upsertRequest: <T = Request>(args: { where: RequestWhereUniqueInput, create: RequestCreateInput, update: RequestUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    updateManyRequests: <T = BatchPayload>(args: { data: RequestUpdateManyMutationInput, where?: RequestWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    deleteManyRequests: <T = BatchPayload>(args: { where?: RequestWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ;
    executeRaw: <T = Json>(args: { database?: PrismaDatabase | null, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T>;
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ;
    request: <T = RequestSubscriptionPayload | null>(args: { where?: RequestSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>>;
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>;
  Request: (where?: RequestWhereInput) => Promise<boolean>;
}

export interface Prisma {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
  exists: Exists;
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>;
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export type BindingConstructor<T> = new(options: BasePrismaOptions) => T
/**
 * Type Defs
*/

const typeDefs = `type AggregateRequest {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""Raw JSON value"""
scalar Json

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createRequest(data: RequestCreateInput!): Request!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateRequest(data: RequestUpdateInput!, where: RequestWhereUniqueInput!): Request
  deleteUser(where: UserWhereUniqueInput!): User
  deleteRequest(where: RequestWhereUniqueInput!): Request
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertRequest(where: RequestWhereUniqueInput!, create: RequestCreateInput!, update: RequestUpdateInput!): Request!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyRequests(data: RequestUpdateManyMutationInput!, where: RequestWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyRequests(where: RequestWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PrismaDatabase {
  default
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  requests(where: RequestWhereInput, orderBy: RequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Request]!
  user(where: UserWhereUniqueInput!): User
  request(where: RequestWhereUniqueInput!): Request
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  requestsConnection(where: RequestWhereInput, orderBy: RequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RequestConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Request implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  device: String!
  description: String!
  status: STATUS!
  owner: User!
}

"""A connection to a list of items."""
type RequestConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RequestEdge]!
  aggregate: AggregateRequest!
}

input RequestCreateInput {
  title: String!
  device: String!
  description: String!
  status: STATUS
  owner: UserCreateOneWithoutRequestsInput!
}

input RequestCreateManyWithoutOwnerInput {
  create: [RequestCreateWithoutOwnerInput!]
  connect: [RequestWhereUniqueInput!]
}

input RequestCreateWithoutOwnerInput {
  title: String!
  device: String!
  description: String!
  status: STATUS
}

"""An edge in a connection."""
type RequestEdge {
  """The item at the end of the edge."""
  node: Request!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RequestOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  device_ASC
  device_DESC
  description_ASC
  description_DESC
  status_ASC
  status_DESC
}

type RequestPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  device: String!
  description: String!
  status: STATUS!
}

input RequestScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [RequestScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [RequestScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RequestScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  device: String

  """All values that are not equal to given value."""
  device_not: String

  """All values that are contained in given list."""
  device_in: [String!]

  """All values that are not contained in given list."""
  device_not_in: [String!]

  """All values less than the given value."""
  device_lt: String

  """All values less than or equal the given value."""
  device_lte: String

  """All values greater than the given value."""
  device_gt: String

  """All values greater than or equal the given value."""
  device_gte: String

  """All values containing the given string."""
  device_contains: String

  """All values not containing the given string."""
  device_not_contains: String

  """All values starting with the given string."""
  device_starts_with: String

  """All values not starting with the given string."""
  device_not_starts_with: String

  """All values ending with the given string."""
  device_ends_with: String

  """All values not ending with the given string."""
  device_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  status: STATUS

  """All values that are not equal to given value."""
  status_not: STATUS

  """All values that are contained in given list."""
  status_in: [STATUS!]

  """All values that are not contained in given list."""
  status_not_in: [STATUS!]
}

type RequestSubscriptionPayload {
  mutation: MutationType!
  node: Request
  updatedFields: [String!]
  previousValues: RequestPreviousValues
}

input RequestSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RequestSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RequestSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RequestSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RequestWhereInput
}

input RequestUpdateInput {
  title: String
  device: String
  description: String
  status: STATUS
  owner: UserUpdateOneRequiredWithoutRequestsInput
}

input RequestUpdateManyDataInput {
  title: String
  device: String
  description: String
  status: STATUS
}

input RequestUpdateManyMutationInput {
  title: String
  device: String
  description: String
  status: STATUS
}

input RequestUpdateManyWithoutOwnerInput {
  create: [RequestCreateWithoutOwnerInput!]
  connect: [RequestWhereUniqueInput!]
  set: [RequestWhereUniqueInput!]
  disconnect: [RequestWhereUniqueInput!]
  delete: [RequestWhereUniqueInput!]
  update: [RequestUpdateWithWhereUniqueWithoutOwnerInput!]
  updateMany: [RequestUpdateManyWithWhereNestedInput!]
  deleteMany: [RequestScalarWhereInput!]
  upsert: [RequestUpsertWithWhereUniqueWithoutOwnerInput!]
}

input RequestUpdateManyWithWhereNestedInput {
  where: RequestScalarWhereInput!
  data: RequestUpdateManyDataInput!
}

input RequestUpdateWithoutOwnerDataInput {
  title: String
  device: String
  description: String
  status: STATUS
}

input RequestUpdateWithWhereUniqueWithoutOwnerInput {
  where: RequestWhereUniqueInput!
  data: RequestUpdateWithoutOwnerDataInput!
}

input RequestUpsertWithWhereUniqueWithoutOwnerInput {
  where: RequestWhereUniqueInput!
  update: RequestUpdateWithoutOwnerDataInput!
  create: RequestCreateWithoutOwnerInput!
}

input RequestWhereInput {
  """Logical AND on all given filters."""
  AND: [RequestWhereInput!]

  """Logical OR on all given filters."""
  OR: [RequestWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RequestWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  device: String

  """All values that are not equal to given value."""
  device_not: String

  """All values that are contained in given list."""
  device_in: [String!]

  """All values that are not contained in given list."""
  device_not_in: [String!]

  """All values less than the given value."""
  device_lt: String

  """All values less than or equal the given value."""
  device_lte: String

  """All values greater than the given value."""
  device_gt: String

  """All values greater than or equal the given value."""
  device_gte: String

  """All values containing the given string."""
  device_contains: String

  """All values not containing the given string."""
  device_not_contains: String

  """All values starting with the given string."""
  device_starts_with: String

  """All values not starting with the given string."""
  device_not_starts_with: String

  """All values ending with the given string."""
  device_ends_with: String

  """All values not ending with the given string."""
  device_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  status: STATUS

  """All values that are not equal to given value."""
  status_not: STATUS

  """All values that are contained in given list."""
  status_in: [STATUS!]

  """All values that are not contained in given list."""
  status_not_in: [STATUS!]
  owner: UserWhereInput
}

input RequestWhereUniqueInput {
  id: ID
}

enum ROLE {
  USER
  ADMIN
}

enum STATUS {
  PENDING
  APPROVED
  DISAPPROVED
  RESOLVED
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  request(where: RequestSubscriptionWhereInput): RequestSubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  role: ROLE!
  requests(where: RequestWhereInput, orderBy: RequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Request!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  role: ROLE
  requests: RequestCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutRequestsInput {
  create: UserCreateWithoutRequestsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutRequestsInput {
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  role: ROLE
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
  role: ROLE!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  role: ROLE
  requests: RequestUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  role: ROLE
}

input UserUpdateOneRequiredWithoutRequestsInput {
  create: UserCreateWithoutRequestsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutRequestsDataInput
  upsert: UserUpsertWithoutRequestsInput
}

input UserUpdateWithoutRequestsDataInput {
  firstName: String
  lastName: String
  email: String
  username: String
  password: String
  role: ROLE
}

input UserUpsertWithoutRequestsInput {
  update: UserUpdateWithoutRequestsDataInput!
  create: UserCreateWithoutRequestsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  role: ROLE

  """All values that are not equal to given value."""
  role_not: ROLE

  """All values that are contained in given list."""
  role_in: [ROLE!]

  """All values that are not contained in given list."""
  role_not_in: [ROLE!]
  requests_every: RequestWhereInput
  requests_some: RequestWhereInput
  requests_none: RequestWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`;

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs});

/**
 * Types
*/

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED';

export type PrismaDatabase =   'default';

export type RequestOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'device_ASC' |
  'device_DESC' |
  'description_ASC' |
  'description_DESC' |
  'status_ASC' |
  'status_DESC';

export type ROLE =   'USER' |
  'ADMIN';

export type STATUS =   'PENDING' |
  'APPROVED' |
  'DISAPPROVED' |
  'RESOLVED';

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'email_ASC' |
  'email_DESC' |
  'username_ASC' |
  'username_DESC' |
  'password_ASC' |
  'password_DESC' |
  'role_ASC' |
  'role_DESC';

export interface RequestCreateInput {
  title: String;
  device: String;
  description: String;
  status?: STATUS | null;
  owner: UserCreateOneWithoutRequestsInput;
}

export interface RequestCreateManyWithoutOwnerInput {
  create?: RequestCreateWithoutOwnerInput[] | RequestCreateWithoutOwnerInput | null;
  connect?: RequestWhereUniqueInput[] | RequestWhereUniqueInput | null;
}

export interface RequestCreateWithoutOwnerInput {
  title: String;
  device: String;
  description: String;
  status?: STATUS | null;
}

export interface RequestScalarWhereInput {
  AND?: RequestScalarWhereInput[] | RequestScalarWhereInput | null;
  OR?: RequestScalarWhereInput[] | RequestScalarWhereInput | null;
  NOT?: RequestScalarWhereInput[] | RequestScalarWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
  title?: String | null;
  title_not?: String | null;
  title_in?: String[] | String | null;
  title_not_in?: String[] | String | null;
  title_lt?: String | null;
  title_lte?: String | null;
  title_gt?: String | null;
  title_gte?: String | null;
  title_contains?: String | null;
  title_not_contains?: String | null;
  title_starts_with?: String | null;
  title_not_starts_with?: String | null;
  title_ends_with?: String | null;
  title_not_ends_with?: String | null;
  device?: String | null;
  device_not?: String | null;
  device_in?: String[] | String | null;
  device_not_in?: String[] | String | null;
  device_lt?: String | null;
  device_lte?: String | null;
  device_gt?: String | null;
  device_gte?: String | null;
  device_contains?: String | null;
  device_not_contains?: String | null;
  device_starts_with?: String | null;
  device_not_starts_with?: String | null;
  device_ends_with?: String | null;
  device_not_ends_with?: String | null;
  description?: String | null;
  description_not?: String | null;
  description_in?: String[] | String | null;
  description_not_in?: String[] | String | null;
  description_lt?: String | null;
  description_lte?: String | null;
  description_gt?: String | null;
  description_gte?: String | null;
  description_contains?: String | null;
  description_not_contains?: String | null;
  description_starts_with?: String | null;
  description_not_starts_with?: String | null;
  description_ends_with?: String | null;
  description_not_ends_with?: String | null;
  status?: STATUS | null;
  status_not?: STATUS | null;
  status_in?: STATUS[] | STATUS | null;
  status_not_in?: STATUS[] | STATUS | null;
}

export interface RequestSubscriptionWhereInput {
  AND?: RequestSubscriptionWhereInput[] | RequestSubscriptionWhereInput | null;
  OR?: RequestSubscriptionWhereInput[] | RequestSubscriptionWhereInput | null;
  NOT?: RequestSubscriptionWhereInput[] | RequestSubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: RequestWhereInput | null;
}

export interface RequestUpdateInput {
  title?: String | null;
  device?: String | null;
  description?: String | null;
  status?: STATUS | null;
  owner?: UserUpdateOneRequiredWithoutRequestsInput | null;
}

export interface RequestUpdateManyDataInput {
  title?: String | null;
  device?: String | null;
  description?: String | null;
  status?: STATUS | null;
}

export interface RequestUpdateManyMutationInput {
  title?: String | null;
  device?: String | null;
  description?: String | null;
  status?: STATUS | null;
}

export interface RequestUpdateManyWithoutOwnerInput {
  create?: RequestCreateWithoutOwnerInput[] | RequestCreateWithoutOwnerInput | null;
  connect?: RequestWhereUniqueInput[] | RequestWhereUniqueInput | null;
  set?: RequestWhereUniqueInput[] | RequestWhereUniqueInput | null;
  disconnect?: RequestWhereUniqueInput[] | RequestWhereUniqueInput | null;
  delete?: RequestWhereUniqueInput[] | RequestWhereUniqueInput | null;
  update?: RequestUpdateWithWhereUniqueWithoutOwnerInput[] | RequestUpdateWithWhereUniqueWithoutOwnerInput | null;
  updateMany?: RequestUpdateManyWithWhereNestedInput[] | RequestUpdateManyWithWhereNestedInput | null;
  deleteMany?: RequestScalarWhereInput[] | RequestScalarWhereInput | null;
  upsert?: RequestUpsertWithWhereUniqueWithoutOwnerInput[] | RequestUpsertWithWhereUniqueWithoutOwnerInput | null;
}

export interface RequestUpdateManyWithWhereNestedInput {
  where: RequestScalarWhereInput;
  data: RequestUpdateManyDataInput;
}

export interface RequestUpdateWithoutOwnerDataInput {
  title?: String | null;
  device?: String | null;
  description?: String | null;
  status?: STATUS | null;
}

export interface RequestUpdateWithWhereUniqueWithoutOwnerInput {
  where: RequestWhereUniqueInput;
  data: RequestUpdateWithoutOwnerDataInput;
}

export interface RequestUpsertWithWhereUniqueWithoutOwnerInput {
  where: RequestWhereUniqueInput;
  update: RequestUpdateWithoutOwnerDataInput;
  create: RequestCreateWithoutOwnerInput;
}

export interface RequestWhereInput {
  AND?: RequestWhereInput[] | RequestWhereInput | null;
  OR?: RequestWhereInput[] | RequestWhereInput | null;
  NOT?: RequestWhereInput[] | RequestWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
  title?: String | null;
  title_not?: String | null;
  title_in?: String[] | String | null;
  title_not_in?: String[] | String | null;
  title_lt?: String | null;
  title_lte?: String | null;
  title_gt?: String | null;
  title_gte?: String | null;
  title_contains?: String | null;
  title_not_contains?: String | null;
  title_starts_with?: String | null;
  title_not_starts_with?: String | null;
  title_ends_with?: String | null;
  title_not_ends_with?: String | null;
  device?: String | null;
  device_not?: String | null;
  device_in?: String[] | String | null;
  device_not_in?: String[] | String | null;
  device_lt?: String | null;
  device_lte?: String | null;
  device_gt?: String | null;
  device_gte?: String | null;
  device_contains?: String | null;
  device_not_contains?: String | null;
  device_starts_with?: String | null;
  device_not_starts_with?: String | null;
  device_ends_with?: String | null;
  device_not_ends_with?: String | null;
  description?: String | null;
  description_not?: String | null;
  description_in?: String[] | String | null;
  description_not_in?: String[] | String | null;
  description_lt?: String | null;
  description_lte?: String | null;
  description_gt?: String | null;
  description_gte?: String | null;
  description_contains?: String | null;
  description_not_contains?: String | null;
  description_starts_with?: String | null;
  description_not_starts_with?: String | null;
  description_ends_with?: String | null;
  description_not_ends_with?: String | null;
  status?: STATUS | null;
  status_not?: STATUS | null;
  status_in?: STATUS[] | STATUS | null;
  status_not_in?: STATUS[] | STATUS | null;
  owner?: UserWhereInput | null;
}

export interface RequestWhereUniqueInput {
  id?: ID_Input | null;
}

export interface UserCreateInput {
  firstName?: String | null;
  lastName?: String | null;
  email: String;
  username: String;
  password: String;
  role?: ROLE | null;
  requests?: RequestCreateManyWithoutOwnerInput | null;
}

export interface UserCreateOneWithoutRequestsInput {
  create?: UserCreateWithoutRequestsInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateWithoutRequestsInput {
  firstName?: String | null;
  lastName?: String | null;
  email: String;
  username: String;
  password: String;
  role?: ROLE | null;
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null;
  mutation_in?: MutationType[] | MutationType | null;
  updatedFields_contains?: String | null;
  updatedFields_contains_every?: String[] | String | null;
  updatedFields_contains_some?: String[] | String | null;
  node?: UserWhereInput | null;
}

export interface UserUpdateInput {
  firstName?: String | null;
  lastName?: String | null;
  email?: String | null;
  username?: String | null;
  password?: String | null;
  role?: ROLE | null;
  requests?: RequestUpdateManyWithoutOwnerInput | null;
}

export interface UserUpdateManyMutationInput {
  firstName?: String | null;
  lastName?: String | null;
  email?: String | null;
  username?: String | null;
  password?: String | null;
  role?: ROLE | null;
}

export interface UserUpdateOneRequiredWithoutRequestsInput {
  create?: UserCreateWithoutRequestsInput | null;
  connect?: UserWhereUniqueInput | null;
  update?: UserUpdateWithoutRequestsDataInput | null;
  upsert?: UserUpsertWithoutRequestsInput | null;
}

export interface UserUpdateWithoutRequestsDataInput {
  firstName?: String | null;
  lastName?: String | null;
  email?: String | null;
  username?: String | null;
  password?: String | null;
  role?: ROLE | null;
}

export interface UserUpsertWithoutRequestsInput {
  update: UserUpdateWithoutRequestsDataInput;
  create: UserCreateWithoutRequestsInput;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null;
  OR?: UserWhereInput[] | UserWhereInput | null;
  NOT?: UserWhereInput[] | UserWhereInput | null;
  id?: ID_Input | null;
  id_not?: ID_Input | null;
  id_in?: ID_Output[] | ID_Output | null;
  id_not_in?: ID_Output[] | ID_Output | null;
  id_lt?: ID_Input | null;
  id_lte?: ID_Input | null;
  id_gt?: ID_Input | null;
  id_gte?: ID_Input | null;
  id_contains?: ID_Input | null;
  id_not_contains?: ID_Input | null;
  id_starts_with?: ID_Input | null;
  id_not_starts_with?: ID_Input | null;
  id_ends_with?: ID_Input | null;
  id_not_ends_with?: ID_Input | null;
  createdAt?: DateTime | null;
  createdAt_not?: DateTime | null;
  createdAt_in?: DateTime[] | DateTime | null;
  createdAt_not_in?: DateTime[] | DateTime | null;
  createdAt_lt?: DateTime | null;
  createdAt_lte?: DateTime | null;
  createdAt_gt?: DateTime | null;
  createdAt_gte?: DateTime | null;
  updatedAt?: DateTime | null;
  updatedAt_not?: DateTime | null;
  updatedAt_in?: DateTime[] | DateTime | null;
  updatedAt_not_in?: DateTime[] | DateTime | null;
  updatedAt_lt?: DateTime | null;
  updatedAt_lte?: DateTime | null;
  updatedAt_gt?: DateTime | null;
  updatedAt_gte?: DateTime | null;
  firstName?: String | null;
  firstName_not?: String | null;
  firstName_in?: String[] | String | null;
  firstName_not_in?: String[] | String | null;
  firstName_lt?: String | null;
  firstName_lte?: String | null;
  firstName_gt?: String | null;
  firstName_gte?: String | null;
  firstName_contains?: String | null;
  firstName_not_contains?: String | null;
  firstName_starts_with?: String | null;
  firstName_not_starts_with?: String | null;
  firstName_ends_with?: String | null;
  firstName_not_ends_with?: String | null;
  lastName?: String | null;
  lastName_not?: String | null;
  lastName_in?: String[] | String | null;
  lastName_not_in?: String[] | String | null;
  lastName_lt?: String | null;
  lastName_lte?: String | null;
  lastName_gt?: String | null;
  lastName_gte?: String | null;
  lastName_contains?: String | null;
  lastName_not_contains?: String | null;
  lastName_starts_with?: String | null;
  lastName_not_starts_with?: String | null;
  lastName_ends_with?: String | null;
  lastName_not_ends_with?: String | null;
  email?: String | null;
  email_not?: String | null;
  email_in?: String[] | String | null;
  email_not_in?: String[] | String | null;
  email_lt?: String | null;
  email_lte?: String | null;
  email_gt?: String | null;
  email_gte?: String | null;
  email_contains?: String | null;
  email_not_contains?: String | null;
  email_starts_with?: String | null;
  email_not_starts_with?: String | null;
  email_ends_with?: String | null;
  email_not_ends_with?: String | null;
  username?: String | null;
  username_not?: String | null;
  username_in?: String[] | String | null;
  username_not_in?: String[] | String | null;
  username_lt?: String | null;
  username_lte?: String | null;
  username_gt?: String | null;
  username_gte?: String | null;
  username_contains?: String | null;
  username_not_contains?: String | null;
  username_starts_with?: String | null;
  username_not_starts_with?: String | null;
  username_ends_with?: String | null;
  username_not_ends_with?: String | null;
  password?: String | null;
  password_not?: String | null;
  password_in?: String[] | String | null;
  password_not_in?: String[] | String | null;
  password_lt?: String | null;
  password_lte?: String | null;
  password_gt?: String | null;
  password_gte?: String | null;
  password_contains?: String | null;
  password_not_contains?: String | null;
  password_starts_with?: String | null;
  password_not_starts_with?: String | null;
  password_ends_with?: String | null;
  password_not_ends_with?: String | null;
  role?: ROLE | null;
  role_not?: ROLE | null;
  role_in?: ROLE[] | ROLE | null;
  role_not_in?: ROLE[] | ROLE | null;
  requests_every?: RequestWhereInput | null;
  requests_some?: RequestWhereInput | null;
  requests_none?: RequestWhereInput | null;
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null;
  email?: String | null;
  username?: String | null;
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output;
}

export interface AggregateRequest {
  count: Int;
}

export interface AggregateUser {
  count: Int;
}

export interface BatchPayload {
  count: Long;
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String | null;
  endCursor?: String | null;
}

export interface Request extends Node {
  id: ID_Output;
  createdAt: DateTime;
  updatedAt: DateTime;
  title: String;
  device: String;
  description: String;
  status: STATUS;
  owner: User;
}

/*
 * A connection to a list of items.

 */
export interface RequestConnection {
  pageInfo: PageInfo;
  edges: Array<RequestEdge | null>;
  aggregate: AggregateRequest;
}

/*
 * An edge in a connection.

 */
export interface RequestEdge {
  node: Request;
  cursor: String;
}

export interface RequestPreviousValues {
  id: ID_Output;
  createdAt: DateTime;
  updatedAt: DateTime;
  title: String;
  device: String;
  description: String;
  status: STATUS;
}

export interface RequestSubscriptionPayload {
  mutation: MutationType;
  node?: Request | null;
  updatedFields?: String[] | null;
  previousValues?: RequestPreviousValues | null;
}

export interface User extends Node {
  id: ID_Output;
  createdAt: DateTime;
  updatedAt: DateTime;
  firstName?: String | null;
  lastName?: String | null;
  email: String;
  username: String;
  password: String;
  role: ROLE;
  requests?: Request[] | null;
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo;
  edges: Array<UserEdge | null>;
  aggregate: AggregateUser;
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserPreviousValues {
  id: ID_Output;
  createdAt: DateTime;
  updatedAt: DateTime;
  firstName?: String | null;
  lastName?: String | null;
  email: String;
  username: String;
  password: String;
  role: ROLE;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node?: User | null;
  updatedFields?: String[] | null;
  previousValues?: UserPreviousValues | null;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type DateTime = Date | string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
Raw JSON value
*/
export type Json = any;

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;