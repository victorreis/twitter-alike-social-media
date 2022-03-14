import { UserType } from './User.types';

export interface PostType {
  type: 'Post';
  id: string;
  text: string;
  createdAt: Date;
  createdBy: UserType;
  reposts: number;
  quotPosts: number;
}
