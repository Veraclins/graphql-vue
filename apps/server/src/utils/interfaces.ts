import { NextFunction, Request, Response } from 'express';
import { GraphQLResolveInfo } from 'graphql';

import { Prisma } from '@generated/prisma-client';

// Allows the attachment of objects to the request and response objects
export interface Request extends Request {
  [key: string]: any;
}

export interface Response extends Response {
  [key: string]: any;
}

export type NextFunction = NextFunction;

export interface Context {
  prisma: Prisma;
  request: any;
  user?: any;
}

export interface Resolver<T> {
  [index: string]: {
    [P in keyof Partial<T>]: (
      parent: T,
      args: any,
      context: Context,
      info: GraphQLResolveInfo
    ) => any
  };
}
