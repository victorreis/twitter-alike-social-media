import { TestProps } from '../../Config/Tests/Test.types';
import { QuotePostType } from '../../Models/QuotePost.types';
import { RequiredPostProps } from '../Post';

export interface RequiredQuotePostProps {}

export interface DefaultQuotePostProps {}

export interface OptionalQuotePostProps {
  /**
   * Sets the component styles.
   */
  style?: React.CSSProperties;
}

export type QuotePostProps = RequiredQuotePostProps &
  DefaultQuotePostProps &
  OptionalQuotePostProps &
  TestProps &
  QuotePostType &
  RequiredPostProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type QuotePostStyleProps = Required<DefaultQuotePostProps>;
