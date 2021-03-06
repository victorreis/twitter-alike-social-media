import dayjs from 'dayjs';

import { SHORT_DATE_FORMAT } from '../../Config/Constants.config';
import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { PostType } from '../../Models/Post.types';
import { UserType } from '../../Models/User.types';
import { themes } from '../../Theme/CustomThemeProvider';
import { Post, postDefaults } from './Post';
import { PostProps } from './Post.types';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('post component tests', () => {
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
  const newCompact = true;
  const onClickRepost = jest.fn();
  const onClickQuotePost = jest.fn();

  const requiredProps: PostProps = {
    ...post,
    onClickRepost,
    onClickQuotePost,
  };

  const setup = (props?: PostProps) => {
    const renderRTR = () =>
      renderRTRCreator<PostProps>(Post, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<PostProps>(Post, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(postDefaults.testID);

      expect(testInstance).toBeTruthy();
    });

    it(`should render the text`, () => {
      expect.assertions(4);
      setup().renderJestDom();
      const lines = post.text.split('\n');
      const firstLine = screen.getByTestId(`${postDefaults.testID}_text`);

      expect(firstLine).toBeInTheDocument();
      expect(firstLine).toHaveTextContent(String(lines[0]));
      expect(firstLine).toHaveTextContent(String(lines[1]));
      expect(firstLine).toHaveTextContent(String(lines[2]));
    });

    it(`should render '${String(
      postDefaults.compact
    )}' as the default 'compact'`, () => {
      expect.assertions(1);
      const instance = setup().renderRTR().root;
      const element = instance.findByProps({
        compact: postDefaults.compact,
      });

      expect(element).toBeTruthy();
    });

    it(`should override the default 'compact' when it is passed as prop`, () => {
      expect.assertions(1);
      const instance = setup({
        ...requiredProps,
        compact: newCompact,
      }).renderRTR().root;
      const element = instance.findByProps({ compact: newCompact });

      expect(element).toBeTruthy();
    });
  });

  describe('style tests', () => {
    it(`should have styled the Container component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const container = screen.getByTestId(postDefaults.testID);

      expect(container).toHaveStyle({
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: themes.default.colors.background.default.normal,
      });
    });
  });

  describe('snapshot tests', () => {
    it(`should render correctly`, () => {
      expect.assertions(1);
      const generatedJson = setup().renderRTR().toJSON();

      expect(generatedJson).toMatchSnapshot();
    });
  });
});
