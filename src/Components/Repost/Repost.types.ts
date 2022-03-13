import { TestProps } from '../../Config/Tests/Test.types';
import { RepostType } from '../../Repost.types';

export interface RequiredRepostProps {}

export interface DefaultRepostProps {}

export interface OptionalRepostProps {
  /**
   * Sets the component styles.
   */
  style?: React.CSSProperties;
}

export type RepostProps = RequiredRepostProps &
  DefaultRepostProps &
  OptionalRepostProps &
  TestProps &
  RepostType &
  Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>;

export type RepostStyleProps = Required<DefaultRepostProps>;
