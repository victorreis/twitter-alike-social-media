import { TestProps } from '../../Config/Tests/Test.types';
import { UserType } from '../../Models/User.types';

export interface RequiredUserDetailsProps {
  /**
   * Sets the component styles.
   */
  numberOfPosts: number;
}

export interface DefaultUserDetailsProps {}

export interface OptionalUserDetailsProps {
  /**
   * Defines when the logged user is following or not the loaded user.
   */
  isFollowing?: boolean;

  /**
   * Callback function that is called when the logged user follows the loaded user.
   */
  onFollow?: () => void;

  /**
   * Callback function that is called when the logged user unfollows the loaded user.
   */
  onUnfollow?: () => void;
}

export type UserDetailsProps = RequiredUserDetailsProps &
  DefaultUserDetailsProps &
  OptionalUserDetailsProps &
  TestProps &
  UserType &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type UserDetailsStyleProps = Required<DefaultUserDetailsProps>;
