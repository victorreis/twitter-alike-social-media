import { PostType } from '../../Models/Post.types';
import { QuotePostType } from '../../Models/QuotePost.types';
import { RepostType } from '../../Models/Repost.types';

export interface PostCreatorService {
  /**
   * Create a Post.
   *
   * @param text text to be posted
   * @param createdById post's creator id
   * @returns PostType
   *
   * @throws when the user doesn't exists
   * @throws when the user has not a valid number of posts per day
   */
  createPost: (text: string, createdById: string) => PostType;

  /**
   * Create a Repost.
   *
   * @param originalPostId original post id
   * @param createdById post's creator id
   * @returns RepostType
   *
   * @throws when the user doesn't exists
   * @throws when the user has not a valid number of posts per day
   */
  createRepost: (originalPostId: string, createdById: string) => RepostType;

  /**
   * Create a QuotePost.
   *
   * @param originalPostId original post id
   * @param text text to be posted
   * @param createdById post's creator id
   * @returns RepostType
   *
   * @throws when the user doesn't exists
   * @throws when the user has not a valid number of posts per day
   */
  createQuotePost: (
    originalPostId: string,
    text: string,
    createdById: string
  ) => QuotePostType;
}
