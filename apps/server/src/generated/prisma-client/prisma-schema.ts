export const typeDefs = /* GraphQL */ `type AggregateRequest {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createRequest(data: RequestCreateInput!): Request!
  updateRequest(data: RequestUpdateInput!, where: RequestWhereUniqueInput!): Request
  updateManyRequests(data: RequestUpdateManyMutationInput!, where: RequestWhereInput): BatchPayload!
  upsertRequest(where: RequestWhereUniqueInput!, create: RequestCreateInput!, update: RequestUpdateInput!): Request!
  deleteRequest(where: RequestWhereUniqueInput!): Request
  deleteManyRequests(where: RequestWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  request(where: RequestWhereUniqueInput!): Request
  requests(where: RequestWhereInput, orderBy: RequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Request]!
  requestsConnection(where: RequestWhereInput, orderBy: RequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RequestConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Request {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  device: String!
  description: String!
  status: STATUS!
  owner: User!
}

type RequestConnection {
  pageInfo: PageInfo!
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

type RequestEdge {
  node: Request!
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  device: String
  device_not: String
  device_in: [String!]
  device_not_in: [String!]
  device_lt: String
  device_lte: String
  device_gt: String
  device_gte: String
  device_contains: String
  device_not_contains: String
  device_starts_with: String
  device_not_starts_with: String
  device_ends_with: String
  device_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  status: STATUS
  status_not: STATUS
  status_in: [STATUS!]
  status_not_in: [STATUS!]
  AND: [RequestScalarWhereInput!]
  OR: [RequestScalarWhereInput!]
  NOT: [RequestScalarWhereInput!]
}

type RequestSubscriptionPayload {
  mutation: MutationType!
  node: Request
  updatedFields: [String!]
  previousValues: RequestPreviousValues
}

input RequestSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RequestWhereInput
  AND: [RequestSubscriptionWhereInput!]
  OR: [RequestSubscriptionWhereInput!]
  NOT: [RequestSubscriptionWhereInput!]
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
  delete: [RequestWhereUniqueInput!]
  connect: [RequestWhereUniqueInput!]
  disconnect: [RequestWhereUniqueInput!]
  update: [RequestUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [RequestUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [RequestScalarWhereInput!]
  updateMany: [RequestUpdateManyWithWhereNestedInput!]
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  device: String
  device_not: String
  device_in: [String!]
  device_not_in: [String!]
  device_lt: String
  device_lte: String
  device_gt: String
  device_gte: String
  device_contains: String
  device_not_contains: String
  device_starts_with: String
  device_not_starts_with: String
  device_ends_with: String
  device_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  status: STATUS
  status_not: STATUS
  status_in: [STATUS!]
  status_not_in: [STATUS!]
  owner: UserWhereInput
  AND: [RequestWhereInput!]
  OR: [RequestWhereInput!]
  NOT: [RequestWhereInput!]
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
  request(where: RequestSubscriptionWhereInput): RequestSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
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

type UserConnection {
  pageInfo: PageInfo!
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

type UserEdge {
  node: User!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
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
  update: UserUpdateWithoutRequestsDataInput
  upsert: UserUpsertWithoutRequestsInput
  connect: UserWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  role: ROLE
  role_not: ROLE
  role_in: [ROLE!]
  role_not_in: [ROLE!]
  requests_every: RequestWhereInput
  requests_some: RequestWhereInput
  requests_none: RequestWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`