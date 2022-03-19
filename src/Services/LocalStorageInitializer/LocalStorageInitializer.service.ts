import { LOCAL_STORAGE } from '../../Config/Constants.config';
import { mockedFollowerFolloweds } from './FollowerFollowed.mock';
import { LocalStorageInitializerService } from './LocalStorageInitializer.service.type';
import { mockedPostsAllTypes } from './Posts.mock';
import { mockedUsers } from './Users.mock';

const initialize = () => {
  if (
    localStorage.getItem(LOCAL_STORAGE.USERS) ||
    localStorage.getItem(LOCAL_STORAGE.POSTS) ||
    localStorage.getItem(LOCAL_STORAGE.FOLLOWER_FOLLOWED)
  ) {
    return;
  }

  localStorage.setItem(LOCAL_STORAGE.USERS, JSON.stringify(mockedUsers));
  localStorage.setItem(
    LOCAL_STORAGE.POSTS,
    JSON.stringify(mockedPostsAllTypes)
  );
  localStorage.setItem(
    LOCAL_STORAGE.FOLLOWER_FOLLOWED,
    JSON.stringify(mockedFollowerFolloweds)
  );
};

export const localStorageInitializerService: LocalStorageInitializerService = {
  initialize,
};
