import { FollowerFollowedType } from '../../Models/FollowerFollowed.types';
import { UserType } from '../../Models/User.types';

export interface FollowerFollowedService {
  getAll: () => FollowerFollowedType[];
  isFollowerFollowed: (
    followerUser: UserType | string,
    followedUser: UserType | string
  ) => boolean;
}
