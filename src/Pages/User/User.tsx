import { useState, useLayoutEffect } from 'react';

import { PageContainer } from '../../App.styles';
import { PostCreator } from '../../Components/PostCreator';
import { Tab } from '../../Components/Tab';
import { UserDetails } from '../../Components/UserDetails';
import { TestProps } from '../../Config/Tests/Test.types';
import { useRenderPosts } from '../../Hooks/RenderPosts';
import { UserType } from '../../Models/User.types';
import { PostTypes } from '../../Services/LocalStorageInitializer';
import { LOGGED_IN_USER_ID } from '../../Services/LocalStorageInitializer/Users.mock';
import { postRetrieverService } from '../../Services/PostRetriever';
import { userRetrieverService } from '../../Services/UserRetriever';
import { UserTabBar } from './User.styles';

export const userDefaults: Required<TestProps> = {
  testID: 'User',
};

export const User: React.FC = (): JSX.Element => {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [user, setUser] = useState<UserType>();
  const { renderPosts } = useRenderPosts(posts);

  useLayoutEffect(() => {
    const loadedUser = userRetrieverService.getById(LOGGED_IN_USER_ID);
    if (loadedUser) {
      setUser(() => loadedUser);
    }

    const loadedPosts =
      postRetrieverService.getAllCreatedByUser(LOGGED_IN_USER_ID);
    setPosts(() => loadedPosts);
  }, []);

  return (
    <PageContainer data-testid={userDefaults.testID}>
      {user && <UserDetails numberOfPosts={789} {...user} />}

      <PostCreator
        name="Victor Reis"
        onChange={() => {}}
        thumbnailUrl="https://i.pravatar.cc/300"
      />

      <UserTabBar>
        <Tab active text="POSTS" />
      </UserTabBar>

      {renderPosts()}
    </PageContainer>
  );
};
