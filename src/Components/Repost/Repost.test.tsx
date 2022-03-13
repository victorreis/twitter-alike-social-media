import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { PostType } from '../../Post.types';
import { RepostType } from '../../Repost.types';
import { UserType } from '../../User.types';
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
  const repost: RepostType = {
    id: 'post123',
    createdAt: new Date(),
    createdBy: userTeste,
    originalPost: post,
  };

  const requiredProps: RepostProps = {
    ...repost,
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
