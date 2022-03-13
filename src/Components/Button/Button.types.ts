import { TestProps } from '../../Config/Tests/Test.types';
import { Size } from '../../Theme/Types';
import { FeedbackColor } from '../../Theme/Types/Colors.types';

export const availableButtonTypes = ['button', 'submit'] as const;
export type ButtonType = typeof availableButtonTypes[number];

export const availableButtonSizes: ReadonlyArray<Extract<Size, 'MD' | 'LG'>> = [
  'MD',
  'LG',
] as const;
export type ButtonSize = typeof availableButtonSizes[number];
export type ButtonSizes = Record<ButtonSize, string>;

export interface RequiredButtonProps {
  /**
   * Component's children.
   */
  children: string;

  /**
   * Callback function that is called when the componentis clicked.
   */
  onClick: () => void;
}

export interface DefaultButtonProps {
  /**
   * Sets the button type.
   * @default 'button'.
   */
  type?: ButtonType;

  /**
   * Sets the button size.
   * @default 'LG'.
   */
  size?: ButtonSize;
}

export interface OptionalButtonProps {
  /**
   * Sets the component styles.
   */
  style?: React.CSSProperties;

  /**
   * Sets the background color when the component is in a hover state.
   */
  hoverFeedbackColor?: FeedbackColor;

  /**
   * Sets the button text when the component is in a hover state.
   */
  hoverText?: string;
}

export type ButtonProps = RequiredButtonProps &
  DefaultButtonProps &
  OptionalButtonProps &
  TestProps &
  Omit<React.HTMLAttributes<HTMLButtonElement>, 'children' | 'onClick'>;

export type ButtonStyleProps = Required<DefaultButtonProps> & {
  hoverFeedbackColor?: FeedbackColor;
  hoverText?: string;
};
