import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const useShowUserPage = (options: { nickname?: string }) => {
  const { nickname } = options;
  const navigate = useNavigate();
  const { nickname: urlNickname } = useParams();

  const canUserPageBeShown = useCallback(
    () => Boolean(urlNickname !== nickname && nickname),
    [nickname, urlNickname]
  );

  const handleShowUserPage = useCallback(() => {
    if (canUserPageBeShown() && nickname) {
      navigate(`/user/${nickname}`);
    }
  }, [canUserPageBeShown, navigate, nickname]);

  const handleCloseUserPage = useCallback(() => {
    navigate(`/`);
  }, [navigate]);

  return {
    urlNickname,
    handleShowUserPage,
    handleCloseUserPage,
    openUserModal: Boolean(urlNickname),
    isAvatarClickable: canUserPageBeShown(),
  };
};
