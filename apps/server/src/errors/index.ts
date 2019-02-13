import { ApolloError } from 'apollo-server-express';

import { logger } from '@services/logger';

export {
  ApolloError,
  AuthenticationError,
  ForbiddenError,
  SyntaxError,
  UserInputError,
  ValidationError,
} from 'apollo-server-express';

export const formatError = (error: Error) => {
  // This can be used to send errors to third
  // party services like Sentry or Stackdriver
  logger.error(error);
  return error;
};

// Define custom Apollo errors here
export class ExternalServiceError extends ApolloError {
  constructor(message: string) {
    super(message, 'EXTERNAL_SERVICE_UNAVAILABLE');

    Object.defineProperty(this, 'name', { value: this.constructor.name });
  }
}

// tslint:disable-next-line: max-classes-per-file
export class NotFoundError extends ApolloError {
  // tslint:disable-next-line: no-identical-functions
  constructor(message: string) {
    super(message, 'RESOURCE_NOT_FOUND');

    Object.defineProperty(this, 'name', { value: this.constructor.name });
  }
}

// tslint:disable-next-line: max-classes-per-file
export class ConflictError extends ApolloError {
  // tslint:disable-next-line: no-identical-functions
  constructor(message: string) {
    super(message, 'RESOURCE_CONFLICT');

    Object.defineProperty(this, 'name', { value: this.constructor.name });
  }
}
