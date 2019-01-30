import { GetRecentPosts } from '@gql/user';

import { apolloClient } from '@state';
/**
 * @description Send login attempt to the API with the provided credentials
 * @param {String} username User's username or email
 * @param {String} password User's password
 */
export const feed = async () => {
  try {
    const { data } = await apolloClient.mutate({
      query: GetRecentPosts,
    });

    return data;
  } catch (err) {
    console.error(err);
  }
};
