import { PostType } from './Post.types';

export interface QuotePostType extends Omit<PostType, 'type'> {
  type: 'QuotePost';
  originalPost: PostType;
}
