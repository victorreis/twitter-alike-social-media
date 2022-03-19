import { TestProps } from '../../Config/Tests/Test.types';

export interface RequiredTextToggleProps {
  /**
   * Texts to be shown.
   */
  texts: string[];

  /**
   * Callback function that is called when the selected button is changed.
   */
  onToggle: (index: number) => void;
}

export interface DefaultTextToggleProps {
  /**
   * Active index.
   * @default 0
   */
  activeIndex?: number;
}

export interface OptionalTextToggleProps {}

export type TextToggleProps = RequiredTextToggleProps &
  DefaultTextToggleProps &
  OptionalTextToggleProps &
  TestProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
