import { TestProps } from '../../Config/Tests/Test.types';
import { QuotePostType } from '../../Models/QuotePost.types';
import { AvatarClickProps } from '../Avatar';
import { RequiredPostProps } from '../Post';

export interface RequiredQuotePostProps {}

export interface DefaultQuotePostProps {}

export interface OptionalQuotePostProps {}

export type QuotePostProps = RequiredQuotePostProps &
  DefaultQuotePostProps &
  OptionalQuotePostProps &
  TestProps &
  QuotePostType &
  RequiredPostProps &
  AvatarClickProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type QuotePostStyleProps = Required<DefaultQuotePostProps>;
