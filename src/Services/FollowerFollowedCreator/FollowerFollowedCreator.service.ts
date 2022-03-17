import { nanoid } from 'nanoid';

import { LOCAL_STORAGE } from '../../Config/Constants';
import { FollowerFollowedType } from '../../Models/FollowerFollowed.types';
import { FollowerFollowedRetrieverService } from '../FollowerFollowedRetriever/FollowerFollowedRetriever.service';
import { userRetrieverService } from '../UserRetriever';
import { FollowerFollowedCreatorService } from './FollowerFollowedCreator.service.type';

const createRelationship = (
  followerUserId: string,
  followedUserId: string
): FollowerFollowedType => {
  const followerFolloweds = FollowerFollowedRetrieverService.getAll();
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

  return newFollowerFollowed;
};

const deleteRelationship = (
  followerUserId: string,
  followedUserId: string
): void => {
  const followerFolloweds = FollowerFollowedRetrieverService.getAll();
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
};

export const followerFollowedCreatorService: FollowerFollowedCreatorService = {
  createRelationship,
  deleteRelationship,
};
