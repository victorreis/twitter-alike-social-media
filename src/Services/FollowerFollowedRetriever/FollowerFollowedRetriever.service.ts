import { LOCAL_STORAGE } from '../../Config/Constants.config';
import { FollowerFollowedType } from '../../Models/FollowerFollowed.types';
import { UserType } from '../../Models/User.types';
import { FollowerFollowedService } from './FollowerFollowedRetriever.service.type';

const getAll = (): FollowerFollowedType[] => {
  return JSON.parse(
    localStorage.getItem(LOCAL_STORAGE.FOLLOWER_FOLLOWED) || '[]'
  ) as FollowerFollowedType[];
};

const isFollowerFollowed = (
  followerUser: UserType | string,
  followedUser: UserType | string
) => {
  const followerUserId =
    typeof followerUser === 'string' ? followerUser : followerUser.id;
  const followedUserId =
    typeof followedUser === 'string' ? followedUser : followedUser.id;

  return Boolean(
    getAll().find(
      ({ follower, followed }) =>
        follower.id === followerUserId && followed.id === followedUserId
    )
  );
};

export const followerFollowedRetrieverService: FollowerFollowedService = {
  getAll,
  isFollowerFollowed,
};
