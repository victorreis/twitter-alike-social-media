import { UserType } from './User.types';

export interface PostType {
  id: string;
  text: string;
  createdAt: Date;
  createdBy: UserType;
  reposts: number;
  quotPosts: number;
}
