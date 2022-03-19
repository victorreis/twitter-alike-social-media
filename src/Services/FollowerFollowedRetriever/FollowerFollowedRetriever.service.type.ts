import { FollowerFollowedType } from '../../Models/FollowerFollowed.types';
import { UserType } from '../../Models/User.types';

export interface FollowerFollowedService {
  /**
   * Get all follower-followed relationships.
   *
   * @returns FollowerFollowedType[]
   */
  getAll: () => FollowerFollowedType[];

  /**
   * Verifies if two users have
   *
   * @returns FollowerFollowedType[]
   */
  isFollowerFollowed: (
    followerUser: UserType | string,
    followedUser: UserType | string
  ) => boolean;
}
