import { LOCAL_STORAGE } from '../../Config/Constants';
import { mockedFollowerFolloweds } from './FollowerFollowed.mock';
import { LocalStorageInitializerService } from './LocalStorageInitializer.service.type';
import { mockedPostsAllTypes } from './Posts.mock';
import { mockedUsers } from './Users.mock';

const initialize = () => {
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
