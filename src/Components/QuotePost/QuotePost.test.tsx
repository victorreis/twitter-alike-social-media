import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { PostType } from '../../Post.types';
import { QuotePostType } from '../../QuotePost.types';
import { UserType } from '../../User.types';
import { QuotePost, quotePostDefaults } from './QuotePost';
import { QuotePostProps } from './QuotePost.types';

describe('quotePost component tests', () => {
  const originalPostUser: UserType = {
    id: 'user123',
    name: 'Victor Reis',
    nickname: 'victor.reis',
    url: '...',
    thumbnailUrl: 'https://i.pravatar.cc/300',
    createdAt: new Date(),
    following: 333,
    followers: 777,
  };
  const user: UserType = {
    id: 'user456',
    name: 'Another User',
    nickname: 'another.user',
    url: '...',
    thumbnailUrl: 'https://i.pravatar.cc/300',
    createdAt: new Date(),
    following: 33,
    followers: 77,
  };
  const originalPost: PostType = {
    id: 'post123',
    text: `first line\nsecond line\nthird line`,
    createdAt: new Date(),
    createdBy: originalPostUser,
    reposts: 9,
    quotPosts: 99,
  };
  const quotePost: QuotePostType = {
    originalPost,
    id: 'post123',
    text: `first line\nsecond line\nthird line`,
    createdAt: new Date(),
    createdBy: user,
    reposts: 9,
    quotPosts: 99,
  };

  const requiredProps: QuotePostProps = {
    ...quotePost,
  };

  const setup = (props?: QuotePostProps) => {
    const renderRTR = () =>
      renderRTRCreator<QuotePostProps>(QuotePost, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<QuotePostProps>(QuotePost, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(quotePostDefaults.testID);

      expect(testInstance).toBeTruthy();
    });
  });

  describe('style tests', () => {});

  describe('snapshot tests', () => {
    it(`should render correctly`, () => {
      expect.assertions(1);
      const generatedJson = setup().renderRTR().toJSON();

      expect(generatedJson).toMatchSnapshot();
    });
  });
});