import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { PageContainer } from '../../App.styles';
import { PostCreator } from '../../Components/PostCreator';
import { Tab } from '../../Components/Tab';
import { UserDetails } from '../../Components/UserDetails';
import {
  REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY,
  UNNAVAILABLE_USER,
} from '../../Config/ErrorMessages.config';
import {
  FOLLOW_CREATED,
  FOLLOW_DELETED,
  POST_CREATED,
} from '../../Config/SuccessMessages.config';
import { TestProps } from '../../Config/Tests/Test.types';
import { TOAST_PARAMS } from '../../Config/Toast.config';
import { useLoggedUser } from '../../Hooks/LoggedUser';
import { useRenderPosts } from '../../Hooks/RenderPosts';
import { useShowUserPage } from '../../Hooks/ShowUserPage';
import { followerFollowedCreatorService } from '../../Services/FollowerFollowedCreator';
import { followerFollowedRetrieverService } from '../../Services/FollowerFollowedRetriever';
import { postCreatorService } from '../../Services/PostCreator';
import { UserTabBar } from './User.styles';

export const userDefaults: Required<TestProps> = {
  testID: 'User',
};

export const User: React.FC = (): JSX.Element | null => {
  const [isFollowing, setIsFollowing] = useState<boolean | undefined>(
    undefined
  );
  const { userFromUserPage, isAvatarClickable, handleShowUserPage } =
    useShowUserPage();
  const { loggedUser } = useLoggedUser();
  const { renderPosts, updateLoadedPosts } = useRenderPosts({
    userId: userFromUserPage?.id,
  });

  useEffect(() => {
    if (
      loggedUser &&
      userFromUserPage &&
      loggedUser?.id !== userFromUserPage?.id
    ) {
      setIsFollowing(() =>
        followerFollowedRetrieverService.isFollowerFollowed(
          loggedUser.id,
          userFromUserPage.id
        )
      );
    }
  }, [loggedUser, userFromUserPage, userFromUserPage?.id]);

  if (!userFromUserPage) {
    return null;
  }

  const handleFollow = () => {
    if (loggedUser) {
      try {
        followerFollowedCreatorService.createRelationship(
          loggedUser.id,
          userFromUserPage.id
        );
        toast.success(
          FOLLOW_CREATED(userFromUserPage.nickname),
          TOAST_PARAMS['SUCCESS']
        );
        setIsFollowing((prevState) => !prevState);
        updateLoadedPosts();
      } catch (e) {
        toast.error(UNNAVAILABLE_USER, TOAST_PARAMS['ERROR']);
      }
    }
  };

  const handleUnfollow = () => {
    if (loggedUser) {
      try {
        followerFollowedCreatorService.deleteRelationship(
          loggedUser.id,
          userFromUserPage.id
        );
        toast.success(
          FOLLOW_DELETED(userFromUserPage.nickname),
          TOAST_PARAMS['SUCCESS']
        );
        setIsFollowing((prevState) => !prevState);
        updateLoadedPosts();
      } catch (e) {
        toast.error(UNNAVAILABLE_USER, TOAST_PARAMS['ERROR']);
      }
    }
  };

  const handleSubmitPost = (text: string) => {
    if (loggedUser) {
      try {
        postCreatorService.createPost(text, loggedUser.id);
        toast.success(POST_CREATED, TOAST_PARAMS['SUCCESS']);
        updateLoadedPosts();
      } catch (e) {
        toast.error(
          REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY,
          TOAST_PARAMS['ERROR']
        );
      }
    }
  };

  const renderPostCreator = () => {
    const { id, name, thumbnailUrl } = userFromUserPage;
    if (loggedUser?.id !== id) {
      return null;
    }

    return (
      <PostCreator
        isAvatarClickable={isAvatarClickable}
        name={name}
        nickname={String(loggedUser?.nickname)}
        onClickAvatar={handleShowUserPage}
        onSubmit={handleSubmitPost}
        thumbnailUrl={thumbnailUrl}
      />
    );
  };

  return (
    <PageContainer data-testid={userDefaults.testID}>
      <UserDetails
        {...userFromUserPage}
        isFollowing={isFollowing}
        onFollow={handleFollow}
        onUnfollow={handleUnfollow}
      />

      {renderPostCreator()}

      <UserTabBar>
        <Tab active text="POSTS" />
      </UserTabBar>

      {renderPosts()}
    </PageContainer>
  );
};
