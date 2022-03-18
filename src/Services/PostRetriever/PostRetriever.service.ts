import { LOCAL_STORAGE } from '../../Config/Constants';
import { followerFollowedRetrieverService } from '../FollowerFollowedRetriever';
import { PostTypes } from '../LocalStorageInitializer/LocalStorageInitializer.service.type';
import { PostRetrieverService } from './PostRetriever.service.type';

const getAll = (): PostTypes[] => {
  return JSON.parse(
    localStorage.getItem(LOCAL_STORAGE.POSTS) || '[]'
  ) as PostTypes[];
};

const getById = (postId: string): PostTypes | undefined => {
  return getAll().find((post) => post.id === postId);
};

const getAllFromFollowedUsers = (followerUserId: string) => {
  return getAll().filter(
    (post) =>
      post.createdBy.id !== followerUserId &&
      followerFollowedRetrieverService.isFollowerFollowed(
        followerUserId,
        post.createdBy.id
      )
  );
};

const getAllCreatedByUser = (userId: string) => {
  return getAll().filter((post) => post.createdBy.id === userId);
};

export const postRetrieverService: PostRetrieverService = {
  getAll,
  getById,
  getAllFromFollowedUsers,
  getAllCreatedByUser,
};
