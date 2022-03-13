import { UserType } from './User.types';

export interface PostType {
  id: string;
  text: string;
  createdAt: Date;
  createdBy: string | UserType;
  reposts: number;
  quotPosts: number;
}
