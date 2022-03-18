import { nanoid } from 'nanoid';

import { LOCAL_STORAGE } from '../../Config/Constants';
import { FollowerFollowedType } from '../../Models/FollowerFollowed.types';
import { UserType } from '../../Models/User.types';
import { followerFollowedRetrieverService } from '../FollowerFollowedRetriever/FollowerFollowedRetriever.service';
import { userRetrieverService } from '../UserRetriever';
import { FollowerFollowedCreatorService } from './FollowerFollowedCreator.service.type';

const updateUserFollowingNumber = (
  userToBeUpdated: UserType,
  operationNumber: number
) => {
  const users = userRetrieverService.getAll().map((user) => {
    if (user.id === userToBeUpdated.id) {
      return {
        ...userToBeUpdated,
        following: userToBeUpdated.following + operationNumber,
      };
    }
    return user;
  });

  localStorage.setItem(LOCAL_STORAGE.USERS, JSON.stringify(users));
};

const createRelationship = (
  followerUserId: string,
  followedUserId: string
): FollowerFollowedType => {
  const followerFolloweds = followerFollowedRetrieverService.getAll();
  const follower = userRetrieverService.getById(followerUserId);
  const followed = userRetrieverService.getById(followedUserId);

  if (!follower || !followed) {
    throw Error(`This user doesn't exists`);
  }

  const newFollowerFollowed: FollowerFollowedType = {
    id: nanoid(),
    follower,
    followed,
  };

  followerFolloweds.push(newFollowerFollowed);
  localStorage.setItem(
    LOCAL_STORAGE.FOLLOWER_FOLLOWED,
    JSON.stringify(followerFolloweds)
  );

  updateUserFollowingNumber(follower, 1);

  return newFollowerFollowed;
};

const deleteRelationship = (
  followerUserId: string,
  followedUserId: string
): void => {
  const followerFolloweds = followerFollowedRetrieverService.getAll();
  const follower = userRetrieverService.getById(followerUserId);
  const followed = userRetrieverService.getById(followedUserId);

  if (!follower || !followed) {
    throw Error(`This user doesn't exists`);
  }

  const newFollowerFolloweds = followerFolloweds.filter(
    (followerFollowed) =>
      !(
        followerFollowed.follower.id === follower.id &&
        followerFollowed.followed.id === followed.id
      )
  );
  localStorage.setItem(
    LOCAL_STORAGE.FOLLOWER_FOLLOWED,
    JSON.stringify(newFollowerFolloweds)
  );

  updateUserFollowingNumber(follower, -1);
};

export const followerFollowedCreatorService: FollowerFollowedCreatorService = {
  createRelationship,
  deleteRelationship,
};
