import dayjs from 'dayjs';

import { SHORT_DATE_FORMAT } from '../../Config/Constants';
import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { PostType } from '../../Models/Post.types';
import { QuotePostType } from '../../Models/QuotePost.types';
import { UserType } from '../../Models/User.types';
import { QuotePost, quotePostDefaults } from './QuotePost';
import { QuotePostProps } from './QuotePost.types';

describe('quotePost component tests', () => {
  const originalPostUser: UserType = {
    id: 'user123',
    name: 'Victor Reis',
    nickname: 'victor.reis',
    url: '...',
    thumbnailUrl: 'https://i.pravatar.cc/300',
    createdAt: dayjs('01-01-2011', SHORT_DATE_FORMAT).toDate(),
    following: 333,
    followers: 777,
    numberOfPosts: 999,
  };
  const user: UserType = {
    id: 'user456',
    name: 'Another User',
    nickname: 'another.user',
    url: '...',
    thumbnailUrl: 'https://i.pravatar.cc/300',
    createdAt: dayjs('01-01-2011', SHORT_DATE_FORMAT).toDate(),
    following: 33,
    followers: 77,
    numberOfPosts: 999,
  };
  const originalPost: PostType = {
    type: 'Post',
    id: 'post123',
    text: `first line\nsecond line\nthird line`,
    createdAt: dayjs('01-01-2011', SHORT_DATE_FORMAT).toDate(),
    createdBy: originalPostUser,
    reposts: 9,
    quotPosts: 99,
  };
  const quotePost: QuotePostType = {
    type: 'QuotePost',
    originalPost,
    id: 'post123',
    text: `first line\nsecond line\nthird line`,
    createdAt: dayjs('01-01-2011', SHORT_DATE_FORMAT).toDate(),
    createdBy: user,
    reposts: 9,
    quotPosts: 99,
  };
  const onClickRepost = jest.fn();
  const onClickQuotePost = jest.fn();

  const requiredProps: QuotePostProps = {
    ...quotePost,
    onClickRepost,
    onClickQuotePost,
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
