import { TestProps } from '../../Config/Tests/Test.types';

export interface RequiredTextareaProps {
  /**
   * Value to be controlled by the component.
   */
  value: string;

  /**
   * Callback function that is called when the input is changed.
   */
  onChange: (newValue: string) => void;
}

export interface DefaultTextareaProps {
  /**
   * Controls when the textarea is resizable or not.
   * @default false
   */
  resizable?: boolean;

  /**
   * Controls the number of rows.
   * @default 4
   */
  rows?: number;
}

export interface OptionalTextareaProps {
  /**
   * Controls the maximum number of caracters allowed.
   * @default 777
   */
  maxLength?: number;
}

export type TextareaProps = RequiredTextareaProps &
  DefaultTextareaProps &
  OptionalTextareaProps &
  TestProps &
  Omit<
    React.HTMLAttributes<HTMLTextAreaElement>,
    'children' | 'onChange' | 'rows' | 'maxLength'
  >;

export type TextareaStyleProps = Required<DefaultTextareaProps>;
