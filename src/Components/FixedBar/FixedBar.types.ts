import { TestProps } from '../../Config/Tests/Test.types';

export const availableJustifyContents = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
] as const;
export type JustifyContent = typeof availableJustifyContents[number];

export interface RequiredFixedBarProps {
  /**
   * Component's children.
   */
  children: React.ReactNode;
}

export interface DefaultFixedBarProps {
  /**
   * Sets the content justification.
   * @default 'flex-start'.
   */
  justifyContent?: JustifyContent;
}

export interface OptionalFixedBarProps {}

export type FixedBarProps = RequiredFixedBarProps &
  DefaultFixedBarProps &
  OptionalFixedBarProps &
  TestProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type FixedBarStyleProps = Required<DefaultFixedBarProps>;
