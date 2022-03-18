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
  const { renderPosts } = useRenderPosts({ userId: userFromUserPage?.id });

  useEffect(() => {
    if (
      loggedUser &&
      userFromUserPage &&
      loggedUser.id !== userFromUserPage.id
    ) {
      setIsFollowing(() =>
        followerFollowedRetrieverService.isFollowerFollowed(
          loggedUser.id,
          userFromUserPage.id
        )
      );
    }
  }, [loggedUser, userFromUserPage, userFromUserPage?.id]);

  const handleFollow = () => {
    if (loggedUser && userFromUserPage) {
      followerFollowedCreatorService.createRelationship(
        loggedUser.id,
        userFromUserPage.id
      );
      setIsFollowing((prevState) => !prevState);
    }
  };

  const handleUnfollow = () => {
    if (loggedUser && userFromUserPage) {
      followerFollowedCreatorService.deleteRelationship(
        loggedUser.id,
        userFromUserPage.id
      );
      setIsFollowing((prevState) => !prevState);
    }
  };

  if (!userFromUserPage) {
    return null;
  }

  const { name, thumbnailUrl } = userFromUserPage;

  return (
    <PageContainer data-testid={userDefaults.testID}>
      <UserDetails
        {...userFromUserPage}
        isFollowing={isFollowing}
        onFollow={handleFollow}
        onUnfollow={handleUnfollow}
      />

      <PostCreator
        name={name}
        nickname={String(userFromUserPage?.nickname)}
        onChange={() => {}}
        thumbnailUrl={thumbnailUrl}
      />

      <UserTabBar>
        <Tab active text="POSTS" />
      </UserTabBar>

      {renderPosts()}
    </PageContainer>
  );
};
