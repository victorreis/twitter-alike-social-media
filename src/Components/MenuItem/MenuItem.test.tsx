import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { themes } from '../../Theme/CustomThemeProvider';
import { hexToRgb } from '../../Utils/Transform/hexToRgb.util';
import { MenuItem, menuItemDefaults } from './MenuItem';
import { RequiredMenuItemProps, MenuItemProps } from './MenuItem.types';

describe('menuItem component tests', () => {
  const children = 'text';
  const to = '/user/teste';

  const requiredProps: RequiredMenuItemProps = {
    children,
    to,
  };

  const setup = (props?: MenuItemProps) => {
    const renderRTR = () =>
      renderRTRCreator<MenuItemProps>(MenuItem, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<MenuItemProps>(MenuItem, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(menuItemDefaults.testID);

      expect(testInstance).toBeTruthy();
    });

    it(`should render the text`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const element = screen.getByText(children);

      expect(element).toBeInTheDocument();
    });
  });

  describe('style tests', () => {
    it(`should have styled the Container component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const container = screen.getByTestId(menuItemDefaults.testID);

      expect(container).toHaveStyle({
        color: hexToRgb(themes.default.colors.font.default),
        ...themes.default.typographies.h4,
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
