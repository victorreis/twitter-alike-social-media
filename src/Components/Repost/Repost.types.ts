import { TestProps } from '../../Config/Tests/Test.types';
import { RepostType } from '../../Models/Repost.types';
import { RequiredPostProps } from '../Post';

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
  RequiredPostProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type RepostStyleProps = Required<DefaultRepostProps>;
