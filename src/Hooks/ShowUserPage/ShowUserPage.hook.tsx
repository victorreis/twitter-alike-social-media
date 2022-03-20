import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { UserType } from '../../Models/User.types';
import { userRetrieverService } from '../../Services/UserRetriever';

export const useShowUserPage = () => {
  const [userFromUserPage, setUserFromUserPage] = useState<UserType>();

  const navigate = useNavigate();
  const { nickname: urlNickname } = useParams();

  const handleCloseUserPage = useCallback(() => {
    navigate(`/`);
  }, [navigate]);

  useEffect(() => {
    const loadedUser = userRetrieverService.getByNickname(String(urlNickname));
    if (!loadedUser) {
      handleCloseUserPage();
      return;
    }
    setUserFromUserPage(() => loadedUser);
  }, [handleCloseUserPage, urlNickname]);

  const handleShowUserPage = useCallback(
    (newNickname: string) => {
      if (urlNickname !== newNickname) {
        navigate(`/user/${newNickname}`);
      }
    },
    [navigate, urlNickname]
  );

  return {
    userFromUserPage,
    handleShowUserPage,
    handleCloseUserPage,
    openUserModal: Boolean(urlNickname),
    isAvatarClickable: true,
  };
};
