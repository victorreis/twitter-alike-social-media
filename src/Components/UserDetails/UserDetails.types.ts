import { TestProps } from '../../Config/Tests/Test.types';
import { UserType } from '../../User.types';

export interface RequiredUserDetailsProps {
  /**
   * Sets the component styles.
   */
  numberOfPosts: number;
}

export interface DefaultUserDetailsProps {}

export interface OptionalUserDetailsProps {
  /**
   * Sets the component styles.
   */
  style?: React.CSSProperties;

  /**
   * Sets the component styles.
   */
  isFollowing?: boolean;

  /**
   * Sets the component styles.
   */
  onFollow?: (follow: boolean) => void;
}

export type UserDetailsProps = RequiredUserDetailsProps &
  DefaultUserDetailsProps &
  OptionalUserDetailsProps &
  TestProps &
  UserType &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type UserDetailsStyleProps = Required<DefaultUserDetailsProps>;
