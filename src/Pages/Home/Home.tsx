import { useEffect, useState, useRef } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import { PageContainer } from '../../App.styles';
import { Button } from '../../Components/Button';
import { FixedBar } from '../../Components/FixedBar';
import { Modal } from '../../Components/Modal';
import { PostCreator } from '../../Components/PostCreator';
import { TextToggle } from '../../Components/TextToggle';
import { Typography } from '../../Components/Typography';
import { TestProps } from '../../Config/Tests/Test.types';
import { useRenderPosts } from '../../Hooks/RenderPosts';
import { UserType } from '../../Models/User.types';
import { PostTypes } from '../../Services/LocalStorageInitializer';
import { LOGGED_IN_USER_ID } from '../../Services/LocalStorageInitializer/Users.mock';
import { postRetrieverService } from '../../Services/PostRetriever';
import { userRetrieverService } from '../../Services/UserRetriever';
import { User } from '../User';
import { HomeFeedContainer, HomeTitle, HomeVerticalMenu } from './Home.styles';

export const homeDefaults: Required<TestProps> = {
  testID: 'Home',
};

export const Home: React.FC = (): JSX.Element => {
  const { nickname } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(Boolean(nickname));

  const [loggedUser, setLoggedUser] = useState<UserType>();
  const [loadedPosts, setLoadedPosts] = useState<PostTypes[]>([]);
  const { renderPosts } = useRenderPosts(loadedPosts);

  const postCreatorRef = useRef<HTMLTextAreaElement>(null);
  const handlePostButtonCLick = () => {
    if (postCreatorRef.current) {
      postCreatorRef.current.focus();
    }
  };

  const profileLink = (loggedUser && `/user/${loggedUser.nickname}`) || '#';

  useEffect(() => {
    const posts = postRetrieverService.getAll();
    setLoadedPosts(() => posts);

    const loggedUserData = userRetrieverService.getById(LOGGED_IN_USER_ID);
    if (loggedUserData) {
      setLoggedUser(() => loggedUserData);
    }
  }, []);

  useEffect(() => {
    setOpen(() => Boolean(nickname));
  }, [nickname]);

  const handleCloseModal = () => {
    setOpen(() => false);
    navigate('/');
  };

  return (
    <PageContainer data-testid={homeDefaults.testID}>
      {open && (
        <Modal onClose={handleCloseModal}>
          <User />
        </Modal>
      )}

      <nav>
        <HomeVerticalMenu>
          <HomeTitle variant="h2">
            <NavLink to="/">Posterr</NavLink>
          </HomeTitle>
          <Typography>
            <NavLink to="/">Home</NavLink>
          </Typography>
          <Typography>
            <NavLink to={profileLink}>Profile</NavLink>
          </Typography>

          <Button onClick={handlePostButtonCLick}>POST</Button>
        </HomeVerticalMenu>
      </nav>

      <HomeFeedContainer>
        <FixedBar justifyContent="space-between">
          <Typography>Home</Typography>
          <TextToggle onToggle={() => {}} texts={['ALL', 'FOLLOWING']} />
        </FixedBar>

        <PostCreator
          ref={postCreatorRef}
          name={String(loggedUser?.name)}
          onChange={() => {}}
          thumbnailUrl={String(loggedUser?.thumbnailUrl)}
        />

        {renderPosts()}
      </HomeFeedContainer>
    </PageContainer>
  );
};
