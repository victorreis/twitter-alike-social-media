import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PageContainer } from '../../App.styles';
import { PostCreator } from '../../Components/PostCreator';
import { Tab } from '../../Components/Tab';
import { UserDetails } from '../../Components/UserDetails';
import { TestProps } from '../../Config/Tests/Test.types';
import { useRenderPosts } from '../../Hooks/RenderPosts';
import { UserType } from '../../Models/User.types';
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
  const { renderPosts } = useRenderPosts(posts);

  const { nickname } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadedUser = userRetrieverService.getByNickname(String(nickname));
    if (!loadedUser) {
      navigate('/');
      return;
    }
    setUser(() => loadedUser);

    const loadedPosts = postRetrieverService.getAllCreatedByUser(loadedUser.id);
    setPosts(() => loadedPosts);
  }, [navigate, nickname]);

  if (!user) {
    return null;
  }

  const { name, thumbnailUrl } = user;

  return (
    <PageContainer data-testid={userDefaults.testID}>
      <UserDetails {...user} />

      <PostCreator
        name={name}
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
