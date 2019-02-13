import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import express from 'express';
import { applyMiddleware as applyGraphQLMiddleware } from 'graphql-middleware';
import http from 'http';
import { logger } from './services/logger';

/**
 *
 * @description Creates an Apollo Server. Setup based on `vue-cli-plugin-apollo`.
 * @param {Object} app Express application
 * @param {Object} options Apollo options
 * @returns {Object} HTTP Server
 */
const createApolloServer = (
  app: express.Application,
  {
    // Main options
    graphqlEndpoint = '',
    typeDefs = {},
    resolvers = {},
    schemaDirectives = {},
    directiveResolvers = {},
    graphqlMiddlewares = [],
    dataSources = () => ({}),
    context = (params: any) => ({}),
    // Subscriptions
    subscriptionsEndpoint = '',
    wsMiddlewares = [],
    // Apollo Engine
    engineKey = '',
    // HTTP options
    cors = true,
    timeout = 120000,
    // Extra options for Apollo Server
    apolloServerOptions = {},
  }: any
) => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives,
    directiveResolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
  });

  // Apollo server options
  const options = {
    ...apolloServerOptions,
    schema: applyGraphQLMiddleware(schema, ...graphqlMiddlewares),
    tracing: true,
    cacheControl: true,
    engine: engineKey ? { apiKey: engineKey } : false,
    dataSources,
    // Resolvers context in POST requests
    context: async ({ req, connection }: any) => {
      let contextData;
      try {
        if (connection) {
          contextData = { ...connection.context };
        } else {
          contextData = await context({ req, request: req });
        }
      } catch (err) {
        logger.error(err, 'error');
        throw err;
      }

      return contextData;
    },
    // Resolvers context in WebSocket requests
    subscriptions: {
      path: subscriptionsEndpoint,
      onConnect: async (connection: any, websocket: any) => {
        const { authorization } = connection;

        let contextData = {};
        try {
          // Simulate `req` object for auth
          const req = { headers: { authorization } };

          // Call all middlewares in order and modify `req`
          await new Promise((resolve, reject) =>
            wsMiddlewares.reduceRight(
              (acc: any, m: any) => (err: any) =>
                err ? reject(err) : m(req, null, acc),
              (err: any) => (err ? reject(err) : resolve())
            )()
          );

          contextData = await context({
            connection,
            websocket,
            request: req,
            req,
          });
        } catch (err) {
          if (err.status !== 401) {
            logger.error(err);
          }

          throw err;
        }

        return contextData;
      },
    },
  };

  // Apollo Server
  const server = new ApolloServer(options);

  // Express middleware
  server.applyMiddleware({
    app,
    cors,
    path: graphqlEndpoint,
    // gui: {
    //   endpoint: graphqlEndpoint,
    //   subscriptionEndpoint: graphqlSubscriptionsPath,
    // },
  });

  // Create HTTP server and add subscriptions
  const httpServer = http.createServer(app);
  httpServer.setTimeout(timeout);
  server.installSubscriptionHandlers(httpServer);

  return httpServer;
};

export default createApolloServer;
