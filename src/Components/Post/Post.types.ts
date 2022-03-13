import { TestProps } from '../../Config/Tests/Test.types';
import { PostType } from '../../Post.types';

export interface RequiredPostProps {}

export interface DefaultPostProps {
  /**
   * Controls when the Post is compact or not.
   */
  compact?: boolean;
}

export interface OptionalPostProps {
  /**
   * Sets the component styles.
   */
  style?: React.CSSProperties;
}

export type PostProps = RequiredPostProps &
  DefaultPostProps &
  OptionalPostProps &
  TestProps &
  PostType &
  Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>;
