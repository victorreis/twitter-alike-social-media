import { useState, useEffect } from 'react';

import { PageContainer } from '../../App.styles';
import { PostCreator } from '../../Components/PostCreator';
import { Tab } from '../../Components/Tab';
import { UserDetails } from '../../Components/UserDetails';
import { TestProps } from '../../Config/Tests/Test.types';
import { useLoggedUser } from '../../Hooks/LoggedUser';
import { useRenderPosts } from '../../Hooks/RenderPosts';
import { useShowUserPage } from '../../Hooks/ShowUserPage';
import { UserType } from '../../Models/User.types';
import { followerFollowedCreatorService } from '../../Services/FollowerFollowedCreator';
import { FollowerFollowedRetrieverService } from '../../Services/FollowerFollowedRetriever';
import { PostTypes } from '../../Services/LocalStorageInitializer';
import { postRetrieverService } from '../../Services/PostRetriever';
import { userRetrieverService } from '../../Services/UserRetriever';
import { UserTabBar } from './User.styles';

export const userDefaults: Required<TestProps> = {
  testID: 'User',
};

export const User: React.FC = (): JSX.Element | null => {
  const [user, setUser] = useState<UserType>();
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [isFollowing, setIsFollowing] = useState<boolean | undefined>(
    undefined
  );
  const { renderPosts } = useRenderPosts({ posts });

  const { loggedUser } = useLoggedUser();
  const { urlNickname, handleCloseUserPage } = useShowUserPage({
    nickname: user?.nickname,
  });

  useEffect(() => {
    const loadedUser = userRetrieverService.getByNickname(String(urlNickname));
    if (!loadedUser) {
      handleCloseUserPage();
      return;
    }
    setUser(() => loadedUser);

    const loadedPosts = postRetrieverService.getAllCreatedByUser(loadedUser.id);
    setPosts(() => loadedPosts);

    if (loggedUser && loggedUser.id !== loadedUser.id) {
      setIsFollowing(() =>
        FollowerFollowedRetrieverService.isFollowerFollowed(
          loggedUser.id,
          loadedUser.id
        )
      );
    }
  }, [handleCloseUserPage, loggedUser, loggedUser?.id, urlNickname]);

  const handleFollow = () => {
    if (loggedUser && user) {
      followerFollowedCreatorService.createRelationship(loggedUser.id, user.id);
      setIsFollowing((prevState) => !prevState);
    }
  };

  const handleUnfollow = () => {
    if (loggedUser && user) {
      followerFollowedCreatorService.deleteRelationship(loggedUser.id, user.id);
      setIsFollowing((prevState) => !prevState);
    }
  };

  if (!user) {
    return null;
  }

  const { name, thumbnailUrl } = user;

  return (
    <PageContainer data-testid={userDefaults.testID}>
      <UserDetails
        {...user}
        isFollowing={isFollowing}
        onFollow={handleFollow}
        onUnfollow={handleUnfollow}
      />

      <PostCreator
        name={name}
        nickname={String(urlNickname)}
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
