import { UserType } from './User.types';

export type FollowerFollowedType = {
  id: string;
  follower: UserType;
  followed: UserType;
};
