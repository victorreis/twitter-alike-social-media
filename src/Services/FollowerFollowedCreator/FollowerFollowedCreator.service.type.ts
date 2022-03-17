import { FollowerFollowedType } from '../../Models/FollowerFollowed.types';

export interface FollowerFollowedCreatorService {
  createRelationship: (
    followerUserId: string,
    followedUserId: string
  ) => FollowerFollowedType;
  deleteRelationship: (followerUserId: string, followedUserId: string) => void;
}
