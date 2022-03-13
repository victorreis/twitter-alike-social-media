import { TestProps } from '../../Config/Tests/Test.types';
import { Post } from '../Post';
import { QuotePostProps, DefaultQuotePostProps } from './QuotePost.types';

export const quotePostDefaults: Required<DefaultQuotePostProps> &
  Required<TestProps> = {
  testID: 'QuotePost',
};

export const QuotePost: React.FC<QuotePostProps> = (props): JSX.Element => {
  const {
    testID = quotePostDefaults.testID,
    originalPost,

    ...others
  } = props;

  return (
    <Post data-testid={testID} {...others}>
      <Post compact {...originalPost} />
    </Post>
  );
};
