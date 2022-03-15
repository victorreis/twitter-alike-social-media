import { useEffect, useState } from 'react';

import { PageContainer } from '../../App.styles';
import { Button } from '../../Components/Button';
import { FixedBar } from '../../Components/FixedBar';
import { Modal } from '../../Components/Modal';
import { PostCreator } from '../../Components/PostCreator';
import { TextToggle } from '../../Components/TextToggle';
import { Typography } from '../../Components/Typography';
import { TestProps } from '../../Config/Tests/Test.types';
import { useRenderPosts } from '../../Hooks/RenderPosts';
import { PostTypes } from '../../Services/LocalStorageInitializer';
import { postRetrieverService } from '../../Services/PostRetriever';
import { User } from '../User';
import { HomeFeedContainer, HomeTitle, HomeVerticalMenu } from './Home.styles';

export const homeDefaults: Required<TestProps> = {
  testID: 'Home',
};

export const Home: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [loadedPosts, setLoadedPosts] = useState<PostTypes[]>([]);
  const { renderPosts } = useRenderPosts(loadedPosts);

  useEffect(() => {
    const posts = postRetrieverService.getAll();
    setLoadedPosts(() => posts);
  }, []);

  const handleOpenClose = () => {
    setOpen((prevState) => !prevState);
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

        {renderPosts()}
      </HomeFeedContainer>
    </PageContainer>
  );
};
