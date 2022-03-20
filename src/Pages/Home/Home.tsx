import { useEffect, useState, useRef, useCallback } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { PageContainer } from '../../App.styles';
import { Button } from '../../Components/Button';
import { FixedBar } from '../../Components/FixedBar';
import { MenuItem } from '../../Components/MenuItem';
import { Modal } from '../../Components/Modal';
import { PostCreator } from '../../Components/PostCreator';
import { TextToggle } from '../../Components/TextToggle';
import { Typography } from '../../Components/Typography';
import { REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY } from '../../Config/ErrorMessages.config';
import { POST_CREATED } from '../../Config/SuccessMessages.config';
import { TestProps } from '../../Config/Tests/Test.types';
import { TOAST_PARAMS } from '../../Config/Toast.config';
import { useLoggedUser } from '../../Hooks/LoggedUser';
import { useRenderPosts } from '../../Hooks/RenderPosts';
import { useShowUserPage } from '../../Hooks/ShowUserPage';
import { postCreatorService } from '../../Services/PostCreator';
import { User } from '../User';
import { HomeFeedContainer, Logo, HomeVerticalMenu } from './Home.styles';

export const homeDefaults: Required<TestProps> = {
  testID: 'Home',
};

export const Home: React.FC = (): JSX.Element => {
  const ALL_INDEX = 0;
  const FOLLOWING_INDEX = 1;
  const postCreatorRef = useRef<HTMLTextAreaElement>(null);

  const { loggedUser } = useLoggedUser();
  const {
    renderPosts,
    showAllPosts,
    showAllPostsFromFollowedUsers,
    updateLoadedPosts,
  } = useRenderPosts({});
  const {
    openUserModal,
    handleShowUserPage,
    handleCloseUserPage,
    isAvatarClickable,
  } = useShowUserPage();

  const [toggleActiveIndex, setToggleActiveIndex] = useState(0);
  const [open, setOpen] = useState(openUserModal);

  const handlePostButtonCLick = () => {
    if (postCreatorRef.current) {
      postCreatorRef.current.focus();
    }
  };

  const profileLink = (loggedUser && `/user/${loggedUser.nickname}`) || '#';

  useEffect(() => {
    setOpen(() => openUserModal);
  }, [loggedUser?.nickname, openUserModal]);

  const handleCloseModal = useCallback(() => {
    setToggleActiveIndex(() => ALL_INDEX);
    updateLoadedPosts();
    handleCloseUserPage();
    setOpen(() => false);
  }, [handleCloseUserPage, updateLoadedPosts]);

  const handleTogglePostFilter = (index: number) => {
    setToggleActiveIndex(() => index);

    if (index === ALL_INDEX) {
      showAllPosts();
    } else if (index === FOLLOWING_INDEX && loggedUser) {
      showAllPostsFromFollowedUsers();
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

  const renderLogo = () => {
    return (
      <Logo to="/">
        <span>
          <span className="larger">P</span>
          osterr
        </span>
      </Logo>
    );
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
          {renderLogo()}

          <MenuItem to="/">
            <AiFillHome /> Home
          </MenuItem>
          <MenuItem to={profileLink}>
            <FaUserCircle />
            Profile
          </MenuItem>

          <Button onClick={handlePostButtonCLick}>POST</Button>
        </HomeVerticalMenu>
      </nav>

      <HomeFeedContainer>
        <FixedBar justifyContent="space-between">
          <Typography>Home</Typography>
          <TextToggle
            activeIndex={toggleActiveIndex}
            onToggle={handleTogglePostFilter}
            texts={['ALL', 'FOLLOWING']}
          />
        </FixedBar>

        <PostCreator
          ref={postCreatorRef}
          isAvatarClickable={isAvatarClickable}
          name={String(loggedUser?.name)}
          nickname={String(loggedUser?.nickname)}
          onClickAvatar={handleShowUserPage}
          onSubmit={handleSubmitPost}
          thumbnailUrl={String(loggedUser?.thumbnailUrl)}
        />

        {renderPosts()}
      </HomeFeedContainer>
    </PageContainer>
  );
};
