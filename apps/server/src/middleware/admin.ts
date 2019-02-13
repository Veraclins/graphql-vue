import { ForbiddenError } from '@errors';
import { Context } from '@utils/interfaces';
import { GraphQLResolveInfo } from 'graphql';

export default async (
  resolve: Function,
  root: any,
  args: any,
  context: Context,
  info: GraphQLResolveInfo
) => {
  const { user } = context;
  if (user.role !== 'ADMIN')
    throw new ForbiddenError('You are not Authorized to do this!');
  return resolve(root, args, context, info);
};
