import { TestProps } from '../../Config/Tests/Test.types';
import { Size } from '../../Theme/Types/Sizes.types';

export const availableAvatarSize: ReadonlyArray<
  Extract<Size, 'SM' | 'MD' | 'LG'>
> = ['SM', 'MD', 'LG'] as const;
export type AvatarSize = typeof availableAvatarSize[number];
export type AvatarSizes = Record<AvatarSize, number>;

export interface AvatarClickProps {
  /**
   * Controls when the Avatar is clickable or not.
   */
  isAvatarClickable?: boolean;

  /**
   * Callback function that is called when the Avatar is clicked.
   */
  onClickAvatar?: (nickname: string) => void;
}

export interface RequiredAvatarProps {
  /**
   * Avatar image.
   */
  thumbnailUrl: string;

  /**
   * Name show as title or as initials.
   */
  name: string;

  /**
   * Name show as title or as initials.
   */
  nickname: string;
}

export interface DefaultAvatarProps {
  /**
   * Sets the width and height Avatar dimensions.
   * @default 'MD'.
   */
  size?: AvatarSize;
}

export interface OptionalAvatarProps {}

export type AvatarProps = RequiredAvatarProps &
  DefaultAvatarProps &
  OptionalAvatarProps &
  AvatarClickProps &
  TestProps &
  Omit<React.HTMLAttributes<HTMLImageElement>, 'children' | 'onClick'>;

export type AvatarContainerStyleProps = Required<
  DefaultAvatarProps & Pick<AvatarClickProps, 'isAvatarClickable'>
>;
export type AvatarStyleProps = Required<DefaultAvatarProps>;
