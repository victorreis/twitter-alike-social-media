import { TestProps } from '../../Config/Tests/Test.types';
import { RequiredAvatarProps } from '../Avatar';

export interface RequiredPostCreatorProps {
  /**
   * Callback function that is called when the text is changed.
   */
  onChange: (newText: string) => void;

  /**
   * Callback function that is called when the text is changed.
   */
  nickname: string;
}

export interface DefaultPostCreatorProps {}

export interface OptionalPostCreatorProps {
  /**
   * Sets the component styles.
   */
  style?: React.CSSProperties;
}

export type PostCreatorProps = RequiredPostCreatorProps &
  DefaultPostCreatorProps &
  OptionalPostCreatorProps &
  TestProps &
  RequiredAvatarProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type PostCreatorStyleProps = Required<DefaultPostCreatorProps>;
