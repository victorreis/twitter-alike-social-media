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
    id,
    createdBy,
    originalPost,
    onClickRepost,
    onClickQuotePost,
    ...others
  } = props;

  const handleClickRepost = () => {
    onClickRepost(id);
  };

  const handleClickQuotePost = () => {
    onClickQuotePost(id);
  };

  const handleClickRepostOriginalPost = () => {
    onClickRepost(originalPost.id);
  };

  const handleClickQuotePostOriginalPost = () => {
    onClickQuotePost(originalPost.id);
  };

  return (
    <Post
      createdBy={createdBy}
      data-testid={testID}
      id={id}
      onClickQuotePost={handleClickQuotePost}
      onClickRepost={handleClickRepost}
      {...others}
      type="Post"
    >
      <Post
        compact
        {...originalPost}
        onClickQuotePost={handleClickQuotePostOriginalPost}
        onClickRepost={handleClickRepostOriginalPost}
      />
    </Post>
  );
};
