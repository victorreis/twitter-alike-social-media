import { PostType } from './Post.types';

export interface QuotePostType extends PostType {
  originalPost: PostType;
}
