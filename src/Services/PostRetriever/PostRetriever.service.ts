import { LOCAL_STORAGE } from '../../Config/Constants';
import { followerFollowedRetrieverService } from '../FollowerFollowedRetriever';
import { PostTypes } from '../LocalStorageInitializer/LocalStorageInitializer.service.type';
import { PostRetrieverService } from './PostRetriever.service.type';

const sortByDateDesc = (posts: PostTypes[]): PostTypes[] => {
  return posts
    .sort(
      (post1, post2) =>
        new Date(post1.createdAt).getTime() -
        new Date(post2.createdAt).getTime()
    )
    .reverse();
};

const getAll = (): PostTypes[] => {
  const nonSortedPosts = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE.POSTS) || '[]'
  ) as PostTypes[];
  return sortByDateDesc(nonSortedPosts);
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
