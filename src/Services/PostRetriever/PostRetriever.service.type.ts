import { PostTypes } from '../LocalStorageInitializer/LocalStorageInitializer.service.type';

export interface PostRetrieverService {
  getAll: () => PostTypes[];
  getById: (postId: string) => PostTypes | undefined;
  getAllFollowing: (followerUserId: string) => PostTypes[];
  getAllCreatedByUser: (userId: string) => PostTypes[];
}
