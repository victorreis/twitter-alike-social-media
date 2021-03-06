import dayjs from 'dayjs';

import { SHORT_DATE_FORMAT } from '../../Config/Constants.config';
import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { UserType } from '../../Models/User.types';
import { themes } from '../../Theme/CustomThemeProvider';
import { UserDetails, userDetailsDefaults } from './UserDetails';
import { UserDetailsProps } from './UserDetails.types';

describe('userDetails component tests', () => {
  const user: UserType = {
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
