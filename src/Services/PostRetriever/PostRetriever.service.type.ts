import { PostTypes } from '../LocalStorageInitializer/LocalStorageInitializer.service.type';

export interface PostRetrieverService {
  /**
   * Get all posts.
   *
   * @returns PostTypes[]
   */
  getAll: () => PostTypes[];

  /**
   * Get a post by id.
   *
   * @param postId post's id
   * @returns PostTypes | undefined
   */
  getById: (postId: string) => PostTypes | undefined;

  /**
   * Get all posts from the followed users of another user.
   *
   * @param postId user's id
   * @returns PostTypes[]
   */
  getAllFromFollowedUsers: (followerUserId: string) => PostTypes[];

  /**
   * Get all posts created by a user.
   *
   * @param postId user's id
   * @returns PostTypes[]
   */
  getAllCreatedByUser: (userId: string) => PostTypes[];
}
