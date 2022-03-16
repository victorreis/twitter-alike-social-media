export interface UserType {
  id: string;
  name: string;
  nickname: string;
  url: string;
  thumbnailUrl: string;
  createdAt: Date;
  following: number;
  followers: number;
  numberOfPosts: number;
}
