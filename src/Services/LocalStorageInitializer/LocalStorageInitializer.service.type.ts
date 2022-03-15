import { FollowerFollowedType } from '../../Models/FollowerFollowed.types';
import { PostType } from '../../Models/Post.types';
import { QuotePostType } from '../../Models/QuotePost.types';
import { RepostType } from '../../Models/Repost.types';
import { UserType } from '../../Models/User.types';

export type PostTypes = PostType | RepostType | QuotePostType;

export interface LocalStorageInitializer {
  posts: PostTypes[];
  users: UserType[];
  followerFollowed: FollowerFollowedType[];
}

export interface LocalStorageInitializerService {
  initialize: () => void;
}
