import { useState, useEffect } from 'react';

import { PageContainer } from '../../App.styles';
import { PostCreator } from '../../Components/PostCreator';
import { Tab } from '../../Components/Tab';
import { UserDetails } from '../../Components/UserDetails';
import { TestProps } from '../../Config/Tests/Test.types';
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
  const { userFromUserPage } = useShowUserPage({});
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
      followerFollowedCreatorService.createRelationship(
        loggedUser.id,
        userFromUserPage.id
      );
      setIsFollowing((prevState) => !prevState);
      updateLoadedPosts();
    }
  };

  const handleUnfollow = () => {
    if (loggedUser) {
      followerFollowedCreatorService.deleteRelationship(
        loggedUser.id,
        userFromUserPage.id
      );
      setIsFollowing((prevState) => !prevState);
      updateLoadedPosts();
    }
  };

  const handleSubmitPost = (text: string) => {
    if (loggedUser) {
      postCreatorService.createPost(text, loggedUser.id);
      updateLoadedPosts();
    }
  };

  const renderPostCreator = () => {
    const { id, name, nickname, thumbnailUrl } = userFromUserPage;
    if (loggedUser?.id !== id) {
      return null;
    }

    return (
      <PostCreator
        name={name}
        nickname={nickname}
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
