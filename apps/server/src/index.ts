// tslint:disable: no-implicit-dependencies
import dotenv from 'dotenv';
import express from 'express';
import { importSchema } from 'graphql-import';

dotenv.config();

import { formatError } from '@errors';
import { prisma } from '@generated/prisma-client';
import {
  isAdmin,
  isAuthenticated,
  isValidLogin,
  isValidRequest,
  isValidSignup,
} from '@middleware';
import { resolvers } from '@resolvers';
import createApolloServer from '@root/apollo-server';
import pubsub from '@root/pubsub';
import { logger } from '@services/logger';
import { Request } from '@utils/interfaces';

const { GRAPHQL_ENDPOINT, GRAPHQL_SUBSCRIPTIONS, PORT, NODE_ENV } = process.env;

const app = express();

app.post(GRAPHQL_ENDPOINT);

const middlewares = [
  isValidSignup,
  isValidLogin,
  isAuthenticated,
  isAdmin,
  isValidRequest,
];

const server = createApolloServer(app, {
  graphqlEndpoint: GRAPHQL_ENDPOINT,
  subscriptionsEndpoint: GRAPHQL_SUBSCRIPTIONS,
  graphqlMiddlewares: middlewares,
  apolloServerOptions: { formatError },
  typeDefs: importSchema('src/schema/index.graphql'),
  resolvers,
  context: (request: Request) => ({
    ...request,
    prisma,
    pubsub,
  }),
});

server.listen({ port: PORT }, () => {
  logger.info(
    `🚀 GraphQL Server is running on http://localhost:${PORT}${GRAPHQL_ENDPOINT} in "${NODE_ENV}" mode\n`
  );
});
