import { useState, useEffect } from 'react';

import { UserType } from '../../Models/User.types';
import { LOGGED_IN_USER_ID } from '../../Services/LocalStorageInitializer/Users.mock';
import { userRetrieverService } from '../../Services/UserRetriever';

export const useLoggedUser = () => {
  const [loggedUser, setLoggedUser] = useState<UserType>();

  useEffect(() => {
    const loggedUserData = userRetrieverService.getById(LOGGED_IN_USER_ID);
    if (loggedUserData) {
      setLoggedUser(() => loggedUserData);
    }
  }, []);

  return {
    loggedUser,
  };
};
