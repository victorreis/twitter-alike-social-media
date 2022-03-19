import { FollowerFollowedType } from '../../Models/FollowerFollowed.types';

export interface FollowerFollowedCreatorService {
  /**
   * Create the follower-followed relationship
   * @param followerUserId follower user id
   * @param followedUserId followed user id
   *
   * @throws when the users were not found.
   */
  createRelationship: (
    followerUserId: string,
    followedUserId: string
  ) => FollowerFollowedType;

  /**
   * Delete the follower-followed relationship
   * @param followerUserId follower user id
   * @param followedUserId followed user id
   *
   * @throws when the users were not found.
   */
  deleteRelationship: (followerUserId: string, followedUserId: string) => void;
}
