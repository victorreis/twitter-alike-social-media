import { TestProps } from '../../Config/Tests/Test.types';
import { AvatarClickProps, RequiredAvatarProps } from '../Avatar';

export interface RequiredPostCreatorProps {
  /**
   * Callback function that is called when the post button is clicked.
   */
  onSubmit: (text: string) => void;
}

export interface DefaultPostCreatorProps {}

export interface OptionalPostCreatorProps {}

export type PostCreatorProps = RequiredPostCreatorProps &
  DefaultPostCreatorProps &
  OptionalPostCreatorProps &
  TestProps &
  RequiredAvatarProps &
  AvatarClickProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'onSubmit'>;

export type PostCreatorStyleProps = Required<DefaultPostCreatorProps>;
