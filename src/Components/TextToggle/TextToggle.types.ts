import { TestProps } from '../../Config/Tests/Test.types';

export interface RequiredTextToggleProps {
  /**
   * Texts to be shown.
   */
  texts: string[];

  /**
   * Texts to be shown.
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

export interface OptionalTextToggleProps {
  /**
   * Sets the component styles.
   */
  style?: React.CSSProperties;
}

export type TextToggleProps = RequiredTextToggleProps &
  DefaultTextToggleProps &
  OptionalTextToggleProps &
  TestProps &
  Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>;
