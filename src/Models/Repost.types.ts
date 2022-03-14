import { PostType } from './Post.types';
import { UserType } from './User.types';

export interface RepostType {
  type: 'Repost';
  id: string;
  createdAt: Date;
  createdBy: UserType;
  originalPost: PostType;
}
