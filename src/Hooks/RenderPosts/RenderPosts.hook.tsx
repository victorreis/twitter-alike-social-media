import { useState, useEffect, useCallback } from 'react';

import { Post } from '../../Components/Post';
import { QuotePost } from '../../Components/QuotePost';
import { Repost } from '../../Components/Repost';
import { PostType } from '../../Models/Post.types';
import { QuotePostType } from '../../Models/QuotePost.types';
import { RepostType } from '../../Models/Repost.types';
import { PostTypes } from '../../Services/LocalStorageInitializer';
import { postCreatorService } from '../../Services/PostCreator';
import { postRetrieverService } from '../../Services/PostRetriever';
import { useLoggedUser } from '../LoggedUser';

export const useRenderPosts = (options: { userId?: string }) => {
  const { userId } = options;

  const [posts, setPosts] = useState<PostTypes[]>([]);
  const { loggedUser } = useLoggedUser();

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
        postCreatorService.createRepost(originalPostId, loggedUser.id);
        updateLoadedPosts();
      }
    },
    [loggedUser, updateLoadedPosts]
  );

  const handleClickQuotePost = useCallback(
    (originalPostId: string) => {
      if (loggedUser) {
        postCreatorService.createQuotePost(
          originalPostId,
          '...',
          loggedUser.id
        );
        updateLoadedPosts();
      }
    },
    [loggedUser, updateLoadedPosts]
  );

  const renderPost = useCallback(
    (post: PostType) => {
      return (
        <Post
          key={post.id}
          {...post}
          onClickQuotePost={handleClickQuotePost}
          onClickRepost={handleClickRepost}
        />
      );
    },
    [handleClickQuotePost, handleClickRepost]
  );

  const renderRepost = useCallback(
    (post: RepostType) => {
      return (
        <Repost
          key={post.id}
          {...post}
          onClickQuotePost={handleClickQuotePost}
          onClickRepost={handleClickRepost}
        />
      );
    },
    [handleClickQuotePost, handleClickRepost]
  );

  const renderQuotePost = useCallback(
    (post: QuotePostType) => {
      return (
        <QuotePost
          key={post.id}
          {...post}
          onClickQuotePost={handleClickQuotePost}
          onClickRepost={handleClickRepost}
        />
      );
    },
    [handleClickQuotePost, handleClickRepost]
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
