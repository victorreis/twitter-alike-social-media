import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { PostType } from '../../Post.types';
import { themes } from '../../Theme/CustomThemeProvider';
import { UserType } from '../../User.types';
import { Post, postDefaults } from './Post';
import { PostProps } from './Post.types';

describe('post component tests', () => {
  const userTeste: UserType = {
    id: 'user123',
    name: 'Victor Reis',
    nickname: 'victor.reis',
    url: '...',
    thumbnailUrl: 'https://i.pravatar.cc/300',
    createdAt: new Date(),
    following: 333,
    followers: 777,
  };
  const post: PostType = {
    id: 'post123',
    text: `first line\nsecond line\nthird line`,
    createdAt: new Date(),
    createdBy: userTeste,
    reposts: 9,
    quotPosts: 99,
  };
  const newCompact = true;

  const requiredProps: PostProps = {
    ...post,
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
        borderBottomColor: themes.default.colors.background.default.light,
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
