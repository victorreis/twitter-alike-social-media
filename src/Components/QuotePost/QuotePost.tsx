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
    isAvatarClickable,
    onClickAvatar,
    onClickRepost,
    onClickQuotePost,
    ...others
  } = props;

  const handleClickRepost = () => {
    onClickRepost(id);
  };

  const handleClickQuotePost = (
    originalPostId: string,
    quotePostText: string
  ) => {
    onClickQuotePost(originalPostId, quotePostText);
  };

  const handleClickRepostOriginalPost = () => {
    onClickRepost(originalPost.id);
  };

  const handleClickQuotePostOriginalPost = (
    originalPostId: string,
    quotePostText: string
  ) => {
    onClickQuotePost(originalPostId, quotePostText);
  };

  return (
    <Post
      createdBy={createdBy}
      data-testid={testID}
      id={id}
      onClickQuotePost={handleClickQuotePost}
      onClickRepost={handleClickRepost}
      {...others}
      isAvatarClickable={isAvatarClickable}
      onClickAvatar={onClickAvatar}
      type="Post"
    >
      <Post
        compact
        {...originalPost}
        isAvatarClickable={isAvatarClickable}
        onClickAvatar={onClickAvatar}
        onClickQuotePost={handleClickQuotePostOriginalPost}
        onClickRepost={handleClickRepostOriginalPost}
      />
    </Post>
  );
};
