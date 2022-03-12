import { TestProps } from '../../Config/Tests/Test.types';
import { Size } from '../../Theme/Types/Sizes.types';

export const availableAvatarSize: ReadonlyArray<
  Extract<Size, 'SM' | 'MD' | 'LG'>
> = ['SM', 'MD', 'LG'] as const;
export type AvatarSize = typeof availableAvatarSize[number];
export type AvatarSizes = Record<AvatarSize, number>;

export interface RequiredAvatarProps {
  /**
   * Avatar image.
   */
  thumbnailUrl: string;

  /**
   * Name show as title.
   */
  name: string;
}

export interface DefaultAvatarProps {
  /**
   * Sets the width and height Avatar dimensions.
   * @default 'MD'.
   */
  size?: AvatarSize;
}

export interface OptionalAvatarProps {
  /**
   * Sets the component styles.
   */
  style?: React.CSSProperties;
}

export type AvatarProps = RequiredAvatarProps &
  DefaultAvatarProps &
  OptionalAvatarProps &
  TestProps &
  Omit<React.HTMLAttributes<HTMLImageElement>, 'children'>;

export type AvatarStyleProps = Required<DefaultAvatarProps>;
