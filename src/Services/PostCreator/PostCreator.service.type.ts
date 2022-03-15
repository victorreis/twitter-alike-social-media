import { PostType } from '../../Models/Post.types';
import { QuotePostType } from '../../Models/QuotePost.types';
import { RepostType } from '../../Models/Repost.types';

export interface PostCreatorService {
  createPost: (text: string, createdById: string) => PostType;

  createRepost: (originalPostId: string, createdById: string) => RepostType;

  createQuotePost: (
    originalPostId: string,
    text: string,
    createdById: string
  ) => QuotePostType;
}
