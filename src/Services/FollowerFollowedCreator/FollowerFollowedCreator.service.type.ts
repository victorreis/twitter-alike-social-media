import { FollowerFollowedType } from '../../Models/FollowerFollowed.types';

export interface FollowerFollowedCreatorService {
  create: (
    followerUserId: string,
    followedUserId: string
  ) => FollowerFollowedType;
}
