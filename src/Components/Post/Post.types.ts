import { TestProps } from '../../Config/Tests/Test.types';
import { PostType } from '../../Post.types';
import { UserType } from '../../User.types';

export interface RequiredPostProps {
  /**
   * User that created the post.
   */
  createdBy: UserType;
}

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
  Omit<PostType, 'createdBy'> &
  Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>;
