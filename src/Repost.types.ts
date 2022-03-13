import { PostType } from './Post.types';
import { UserType } from './User.types';

export interface RepostType {
  id: string;
  createdAt: Date;
  createdBy: UserType;
  originalPost: PostType;
}
