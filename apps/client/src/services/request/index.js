import {
  CreateRequest,
  UpdateRequest,
  ApproveRequest,
  DisapproveRequest,
  ResolveRequest,
  LocalSetRequests,
} from '@gql/user';
import { apolloClient } from '@state';

export const cacheRequest = requests => {
  return apolloClient.mutate({
    mutation: LocalSetRequests,
    variables: {
      requests,
    },
  });
};

export const create = async args => {
  const { title, device, description } = args;
  try {
    const {
      data: { createRequest: request },
    } = await apolloClient.mutate({
      mutation: CreateRequest,
      variables: {
        title,
        device,
        description,
      },
    });
    cacheRequest([request]);
    return true;
  } catch (err) {
    throw err;
  }
};

export const update = async args => {
  const { title, device, description } = args;
  try {
    const {
      data: { updateRequest: request },
    } = await apolloClient.mutate({
      mutation: UpdateRequest,
      variables: {
        title,
        device,
        description,
      },
    });
    cacheRequest([request]);
    return true;
  } catch (err) {
    throw err;
  }
};

export const changeStatus = async args => {
  const { id, action } = args;
  const MUTATION =
    action === 'approve'
      ? ApproveRequest
      : action === 'disapprove'
      ? DisapproveRequest
      : ResolveRequest;
  try {
    const { data } = await apolloClient.mutate({
      mutation: MUTATION,
      variables: {
        id,
      },
    });
    const request =
      action === 'approve'
        ? data.approveRequest
        : action === 'disapprove'
        ? data.disapproveRequest
        : data.resolveRequest;
    cacheRequest([request]);
    return true;
  } catch (err) {
    throw err;
  }
};
