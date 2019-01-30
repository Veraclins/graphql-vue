import { AuthenticationError } from '@errors';
import { Context } from '@utils/interfaces';
import { createToken } from '@utils/jwt';
import fs from 'fs';
import path from 'path';

// Require all the modules in the specified directory
export const mergeDirectoryModules = (dirPath: string) =>
  fs
    .readdirSync(dirPath, 'utf8')
    .filter(filename => !/^[_|index.]/.test(filename))
    .reduce(
      (accumulator, filename) => ({
        ...accumulator,
        ...require(path.resolve(dirPath, filename)).default,
      }),
      {}
    );

export const getLoggedInUser = (context: Context) => {
  const { user } = context;
  if (!user) throw new AuthenticationError('You must login first!');
  return user;
};

export const isOwner = (userId: string, resourceId: string) =>
  userId === resourceId;

export const getAuthPayload = (user: any) => {
  const { id, role } = user;
  return {
    token: createToken({ id, role }),
    user,
  };
};
