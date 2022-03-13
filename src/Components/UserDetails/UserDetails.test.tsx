import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { themes } from '../../Theme/CustomThemeProvider';
import { UserType } from '../../User.types';
import { UserDetails, userDetailsDefaults } from './UserDetails';
import { UserDetailsProps } from './UserDetails.types';

describe('userDetails component tests', () => {
  const user: UserType = {
    id: 'user123',
    name: 'Victor Reis',
    nickname: 'victor.reis',
    url: '...',
    thumbnailUrl: 'https://i.pravatar.cc/300',
    createdAt: new Date(),
    following: 333,
    followers: 777,
  };
  const numberOfPosts = 999;

  const requiredProps: UserDetailsProps = {
    ...user,
    numberOfPosts,
  };

  const setup = (props?: UserDetailsProps) => {
    const renderRTR = () =>
      renderRTRCreator<UserDetailsProps>(UserDetails, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<UserDetailsProps>(UserDetails, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(userDetailsDefaults.testID);

      expect(testInstance).toBeTruthy();
    });

    it(`should render the text`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const element = screen.getByText(user.name);

      expect(element).toBeInTheDocument();
    });
  });

  describe('style tests', () => {
    it(`should have styled the Container component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const container = screen.getByTestId(userDetailsDefaults.testID);

      expect(container).toHaveStyle({
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
