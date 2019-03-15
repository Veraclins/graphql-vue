import { GraphQLResolveInfo } from 'graphql';

import { UserInputError } from '@errors';
import { Context } from '@utils/interfaces';
import validateRequest from '@validations';
import LoginValidator from '@validations/validators/LoginValidator';
import RequestValidator from '@validations/validators/RequestValidator';
import SignupValidator from '@validations/validators/SignupValidator';

const validate = async (
  resolve: Function,
  root: any,
  args: any,
  context: Context,
  info: GraphQLResolveInfo,
  validator: any
) => {
  const error = await validateRequest(validator, args);
  if (error) {
    const { message, errors } = error;
    throw new UserInputError(message, errors);
  }
  return resolve(root, args, context, info);
};

export default {
  validateSignup: async (
    resolve: Function,
    root: any,
    args: any,
    context: Context,
    info: GraphQLResolveInfo
  ) => validate(resolve, root, args, context, info, SignupValidator),

  validateLogin: async (
    resolve: Function,
    root: any,
    args: any,
    context: Context,
    info: GraphQLResolveInfo
  ) => validate(resolve, root, args, context, info, LoginValidator),

  validateRequests: async (
    resolve: Function,
    root: any,
    args: any,
    context: Context,
    info: GraphQLResolveInfo
  ) => validate(resolve, root, args, context, info, RequestValidator),
};
