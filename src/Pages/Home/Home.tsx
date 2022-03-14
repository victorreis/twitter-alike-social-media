import { useState } from 'react';

import { PageContainer } from '../../App.styles';
import { Button } from '../../Components/Button';
import { FixedBar } from '../../Components/FixedBar';
import { Modal } from '../../Components/Modal';
import { Post } from '../../Components/Post';
import { PostCreator } from '../../Components/PostCreator';
import { QuotePost } from '../../Components/QuotePost';
import { Repost } from '../../Components/Repost';
import { TextToggle } from '../../Components/TextToggle';
import { Typography } from '../../Components/Typography';
import { TestProps } from '../../Config/Tests/Test.types';
import { PostType } from '../../Post.types';
import { QuotePostType } from '../../QuotePost.types';
import { RepostType } from '../../Repost.types';
import { UserType } from '../../User.types';
import { User } from '../User';
import { HomeFeedContainer, HomeTitle, HomeVerticalMenu } from './Home.styles';

export const homeDefaults: Required<TestProps> = {
  testID: 'Home',
};

export const Home: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleOpenClose = () => {
    setOpen((prevState) => !prevState);
  };

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
    <PageContainer data-testid={homeDefaults.testID}>
      <HomeVerticalMenu>
        <HomeTitle variant="h2">Posterr</HomeTitle>
        <Typography>Home</Typography>
        <Typography onClick={handleOpenClose}>Profile</Typography>
        <Button onClick={() => {}}>POST</Button>
        {open && (
          <Modal onClose={handleOpenClose}>
            <User />
          </Modal>
        )}
      </HomeVerticalMenu>

      <HomeFeedContainer>
        <FixedBar justifyContent="space-between">
          <Typography>Home</Typography>
          <TextToggle onToggle={() => {}} texts={['ALL', 'FOLLOWING']} />
        </FixedBar>

        <PostCreator
          name="Victor Reis"
          onChange={() => {}}
          thumbnailUrl="https://i.pravatar.cc/300"
        />

        <Post {...post} />
        <Repost {...repost} />
        <QuotePost {...quotePost} />
      </HomeFeedContainer>
    </PageContainer>
  );
};
