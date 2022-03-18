import dayjs from 'dayjs';

import { SHORT_DATE_FORMAT } from '../../Config/Constants';
import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { PostType } from '../../Models/Post.types';
import { RepostType } from '../../Models/Repost.types';
import { UserType } from '../../Models/User.types';
import { postDefaults } from '../Post';
import { Repost, repostDefaults } from './Repost';
import { RepostProps } from './Repost.types';

describe('repost component tests', () => {
  const userTeste: UserType = {
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
  const post: PostType = {
    type: 'Post',
    id: 'post123',
    text: `first line\nsecond line\nthird line`,
    createdAt: dayjs('01-01-2011', SHORT_DATE_FORMAT).toDate(),
    createdBy: userTeste,
    reposts: 9,
    quotPosts: 99,
  };
  const repost: RepostType = {
    type: 'Repost',
    id: 'post123',
    createdAt: dayjs('01-01-2011', SHORT_DATE_FORMAT).toDate(),
    createdBy: userTeste,
    originalPost: post,
  };
  const onClickRepost = jest.fn();
  const onClickQuotePost = jest.fn();

  const requiredProps: RepostProps = {
    ...repost,
    onClickRepost,
    onClickQuotePost,
  };

  const setup = (props?: RepostProps) => {
    const renderRTR = () =>
      renderRTRCreator<RepostProps>(Repost, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<RepostProps>(Repost, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(repostDefaults.testID);

      expect(testInstance).toBeTruthy();
    });

    it(`should render the Post component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(postDefaults.testID);

      expect(testInstance).toBeTruthy();
    });

    it(`should render the text`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const element = screen.getByText(`${repost.createdBy.name} Reposted`);

      expect(element).toBeInTheDocument();
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
