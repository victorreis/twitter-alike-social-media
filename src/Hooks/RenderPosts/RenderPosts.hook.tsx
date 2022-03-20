import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

import { Post } from '../../Components/Post';
import { QuotePost } from '../../Components/QuotePost';
import { Repost } from '../../Components/Repost';
import { REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY } from '../../Config/ErrorMessages.config';
import {
  QUOTE_POST_CREATED,
  REPOST_CREATED,
} from '../../Config/SuccessMessages.config';
import { TOAST_PARAMS } from '../../Config/Toast.config';
import { PostType } from '../../Models/Post.types';
import { QuotePostType } from '../../Models/QuotePost.types';
import { RepostType } from '../../Models/Repost.types';
import { PostTypes } from '../../Services/LocalStorageInitializer';
import { postCreatorService } from '../../Services/PostCreator';
import { postRetrieverService } from '../../Services/PostRetriever';
import { useLoggedUser } from '../LoggedUser';
import { useShowUserPage } from '../ShowUserPage/ShowUserPage.hook';

export const useRenderPosts = (options: { userId?: string }) => {
  const { userId } = options;

  const [posts, setPosts] = useState<PostTypes[]>([]);
  const { loggedUser } = useLoggedUser();
  const { isAvatarClickable, handleShowUserPage } = useShowUserPage();

  const showAllPosts = useCallback(() => {
    setPosts(() => postRetrieverService.getAll());
  }, []);

  const showAllPostsFromFollowedUsers = useCallback(() => {
    if (loggedUser) {
      setPosts(() =>
        postRetrieverService.getAllFromFollowedUsers(loggedUser.id)
      );
    }
  }, [loggedUser]);

  const showAllPostsFromUser = useCallback(() => {
    if (userId) {
      setPosts(() => postRetrieverService.getAllCreatedByUser(userId));
    }
  }, [userId]);

  const updateLoadedPosts = useCallback(() => {
    if (userId) {
      showAllPostsFromUser();
    } else {
      showAllPosts();
    }
  }, [showAllPosts, showAllPostsFromUser, userId]);

  useEffect(() => {
    updateLoadedPosts();
  }, [updateLoadedPosts]);

  const handleClickRepost = useCallback(
    (originalPostId: string) => {
      if (loggedUser) {
        try {
          postCreatorService.createRepost(originalPostId, loggedUser.id);
          updateLoadedPosts();
          toast.success(REPOST_CREATED, TOAST_PARAMS['SUCCESS']);
        } catch (e) {
          toast.error(
            REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY,
            TOAST_PARAMS['ERROR']
          );
        }
      }
    },
    [loggedUser, updateLoadedPosts]
  );

  const handleClickQuotePost = useCallback(
    (originalPostId: string, text: string) => {
      if (loggedUser) {
        try {
          postCreatorService.createQuotePost(
            originalPostId,
            text,
            loggedUser.id
          );
          updateLoadedPosts();
          toast.success(QUOTE_POST_CREATED, TOAST_PARAMS['SUCCESS']);
        } catch (e) {
          toast.error(
            REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY,
            TOAST_PARAMS['ERROR']
          );
        }
      }
    },
    [loggedUser, updateLoadedPosts]
  );

  const renderPost = useCallback(
    (post: PostType) => {
      return (
        <Post
          key={post.id}
          isAvatarClickable={isAvatarClickable}
          onClickAvatar={handleShowUserPage}
          onClickQuotePost={handleClickQuotePost}
          onClickRepost={handleClickRepost}
          {...post}
        />
      );
    },
    [
      handleClickQuotePost,
      handleClickRepost,
      handleShowUserPage,
      isAvatarClickable,
    ]
  );

  const renderRepost = useCallback(
    (post: RepostType) => {
      return (
        <Repost
          key={post.id}
          isAvatarClickable={isAvatarClickable}
          onClickAvatar={handleShowUserPage}
          onClickQuotePost={handleClickQuotePost}
          onClickRepost={handleClickRepost}
          {...post}
        />
      );
    },
    [
      handleClickQuotePost,
      handleClickRepost,
      handleShowUserPage,
      isAvatarClickable,
    ]
  );

  const renderQuotePost = useCallback(
    (post: QuotePostType) => {
      return (
        <QuotePost
          key={post.id}
          isAvatarClickable={isAvatarClickable}
          onClickAvatar={handleShowUserPage}
          onClickQuotePost={handleClickQuotePost}
          onClickRepost={handleClickRepost}
          {...post}
        />
      );
    },
    [
      handleClickQuotePost,
      handleClickRepost,
      handleShowUserPage,
      isAvatarClickable,
    ]
  );

  const renderPosts: () => JSX.Element[] = useCallback(() => {
    const renderedPosts: JSX.Element[] = [];

    posts.forEach((post) => {
      switch (post.type) {
        case 'Post':
          renderedPosts.push(renderPost(post));
          break;
        case 'Repost':
          renderedPosts.push(renderRepost(post));
          break;
        case 'QuotePost':
          renderedPosts.push(renderQuotePost(post));
          break;
        default:
          break;
      }
    });
    return renderedPosts;
  }, [posts, renderPost, renderQuotePost, renderRepost]);

  return {
    renderPosts,
    showAllPosts,
    showAllPostsFromFollowedUsers,
    showAllPostsFromUser,
    updateLoadedPosts,
  };
};
