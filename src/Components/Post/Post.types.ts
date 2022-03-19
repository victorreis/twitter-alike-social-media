import { TestProps } from '../../Config/Tests/Test.types';
import { PostType } from '../../Models/Post.types';

export interface RequiredPostProps {
  /**
   * Callback function that is called when the Repost button is clicked.
   */
  onClickRepost: (originalPostId: string) => void;

  /**
   * Callback function that is called when the QuotePost button is clicked.
   */
  onClickQuotePost: (originalPostId: string) => void;
}

export interface DefaultPostProps {
  /**
   * Controls when the Post is compact or not.
   */
  compact?: boolean;
}

export interface OptionalPostProps {}

export type PostProps = RequiredPostProps &
  DefaultPostProps &
  OptionalPostProps &
  TestProps &
  PostType &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
