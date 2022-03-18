import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { UserType } from '../../Models/User.types';
import { userRetrieverService } from '../../Services/UserRetriever';

export const useShowUserPage = (options: { nickname?: string }) => {
  const [userFromUserPage, setUserFromUserPage] = useState<UserType>();

  const { nickname } = options;
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

  const canUserPageBeShown = useCallback(
    () => Boolean(urlNickname !== nickname && nickname),
    [nickname, urlNickname]
  );

  const handleShowUserPage = useCallback(() => {
    if (canUserPageBeShown() && nickname) {
      navigate(`/user/${nickname}`);
    }
  }, [canUserPageBeShown, navigate, nickname]);

  return {
    userFromUserPage,
    handleShowUserPage,
    handleCloseUserPage,
    openUserModal: Boolean(urlNickname),
    isAvatarClickable: canUserPageBeShown(),
  };
};
