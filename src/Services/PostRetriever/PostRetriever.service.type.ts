import { PostTypes } from '../LocalStorageInitializer/LocalStorageInitializer.service.type';

export interface PostRetrieverService {
  getAll: () => PostTypes[];
  getById: (postId: string) => PostTypes | undefined;
  getAllFromFollowedUsers: (followerUserId: string) => PostTypes[];
  getAllCreatedByUser: (userId: string) => PostTypes[];
}
