import { TestProps } from '../../Config/Tests/Test.types';
import { Post } from '../Post';
import {
  RepostContainer,
  RepostIcon,
  RepostText,
  RepostTextContainer,
} from './Repost.styles';
import { RepostProps, DefaultRepostProps } from './Repost.types';

export const repostDefaults: Required<DefaultRepostProps> &
  Required<TestProps> = {
  testID: 'Repost',
};

export const Repost: React.FC<RepostProps> = (props): JSX.Element => {
  const {
    testID = repostDefaults.testID,
    style,
    originalPost,
    createdBy,
    onClickRepost,
    onClickQuotePost,
    ...others
  } = props;

  const handleClickRepostOriginalPost = () => {
    onClickRepost(originalPost.id);
  };

  const handleClickQuotePostOriginalPost = () => {
    onClickQuotePost(originalPost.id);
  };

  return (
    <RepostContainer data-testid={testID} style={style} {...others}>
      <RepostTextContainer>
        <RepostIcon size={20} />
        <RepostText variant="h5">{createdBy.name} Reposted</RepostText>
      </RepostTextContainer>

      <Post
        {...originalPost}
        onClickQuotePost={handleClickQuotePostOriginalPost}
        onClickRepost={handleClickRepostOriginalPost}
      />
    </RepostContainer>
  );
};
