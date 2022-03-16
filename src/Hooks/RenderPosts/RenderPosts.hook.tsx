import { Post } from '../../Components/Post';
import { QuotePost } from '../../Components/QuotePost';
import { Repost } from '../../Components/Repost';
import { PostType } from '../../Models/Post.types';
import { QuotePostType } from '../../Models/QuotePost.types';
import { RepostType } from '../../Models/Repost.types';
import { PostTypes } from '../../Services/LocalStorageInitializer';

export const useRenderPosts = (options: { posts: PostTypes[] }) => {
  const { posts } = options;

  const renderPost = (post: PostType) => {
    return <Post key={post.id} {...post} />;
  };

  const renderRepost = (post: RepostType) => {
    return <Repost key={post.id} {...post} />;
  };

  const renderQuotePost = (post: QuotePostType) => {
    return <QuotePost key={post.id} {...post} />;
  };

  const renderPosts: () => JSX.Element[] = () => {
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
  };

  return { renderPosts };
};
