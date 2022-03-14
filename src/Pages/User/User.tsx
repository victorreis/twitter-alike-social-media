import { PageContainer } from '../../App.styles';
import { Post } from '../../Components/Post';
import { PostCreator } from '../../Components/PostCreator';
import { QuotePost } from '../../Components/QuotePost';
import { Repost } from '../../Components/Repost';
import { Tab } from '../../Components/Tab';
import { UserDetails } from '../../Components/UserDetails';
import { TestProps } from '../../Config/Tests/Test.types';
import { PostType } from '../../Post.types';
import { QuotePostType } from '../../QuotePost.types';
import { RepostType } from '../../Repost.types';
import { UserType } from '../../User.types';
import { UserTabBar } from './User.styles';

export const userDefaults: Required<TestProps> = {
  testID: 'User',
};

export const User: React.FC = (): JSX.Element => {
  const userTeste: UserType = {
    id: 'user123',
    name: 'Victor Reis',
    nickname: 'victor.reis',
    url: '...',
    thumbnailUrl: 'https://i.pravatar.cc/300',
    createdAt: new Date(),
    following: 333,
    followers: 777,
  };
  const post: PostType = {
    id: 'post123',
    text: `texto de exemplo\nteste\nteste`,
    createdAt: new Date(),
    createdBy: userTeste,
    reposts: 9,
    quotPosts: 99,
  };
  const repost: RepostType = {
    id: 'post123',
    createdAt: new Date(),
    createdBy: userTeste,
    originalPost: post,
  };
  const quotePost: QuotePostType = {
    originalPost: post,
    id: 'post123',
    text: `texto de exemplo\nteste\nteste`,
    createdAt: new Date(),
    createdBy: userTeste,
    reposts: 9,
    quotPosts: 99,
  };

  return (
    <PageContainer data-testid={userDefaults.testID}>
      <UserDetails numberOfPosts={789} {...userTeste} />

      <PostCreator
        name="Victor Reis"
        onChange={() => {}}
        thumbnailUrl="https://i.pravatar.cc/300"
      />

      <UserTabBar>
        <Tab active text="POSTS" />
      </UserTabBar>

      <Post {...post} />
      <Repost {...repost} />
      <QuotePost {...quotePost} />
    </PageContainer>
  );
};
