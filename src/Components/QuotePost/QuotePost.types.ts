import { TestProps } from '../../Config/Tests/Test.types';
import { QuotePostType } from '../../QuotePost.types';

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
  Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>;

export type QuotePostStyleProps = Required<DefaultQuotePostProps>;
