import { TestProps } from '../../Config/Tests/Test.types';
import { RequiredAvatarProps } from '../Avatar';

export interface RequiredPostCreatorProps {
  /**
   * Callback function that is called when the post button is clicked.
   */
  onSubmit: (text: string) => void;

  /**
   * Callback function that is called when the text is changed.
   */
  nickname: string;
}

export interface DefaultPostCreatorProps {}

export interface OptionalPostCreatorProps {}

export type PostCreatorProps = RequiredPostCreatorProps &
  DefaultPostCreatorProps &
  OptionalPostCreatorProps &
  TestProps &
  RequiredAvatarProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'onSubmit'>;

export type PostCreatorStyleProps = Required<DefaultPostCreatorProps>;
