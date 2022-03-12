import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { themes } from '../../Theme/CustomThemeProvider';
import { hexToRgb } from '../../Utils/Transform/hexToRgb.util';
import { Tab, tabDefaults } from './Tab';
import { RequiredTabProps, TabProps } from './Tab.types';

describe('tab component tests', () => {
  const text = 'text';
  const newActive = true;

  const requiredProps: RequiredTabProps = {
    text,
  };

  const setup = (props?: TabProps) => {
    const renderRTR = () =>
      renderRTRCreator<TabProps>(Tab, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<TabProps>(Tab, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(tabDefaults.testID);

      expect(testInstance).toBeTruthy();
    });

    it(`should render the text`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const element = screen.getByText(text);

      expect(element).toBeInTheDocument();
    });

    it(`should render '${String(
      tabDefaults.active
    )}' as the default active status`, () => {
      expect.assertions(1);
      const instance = setup().renderRTR().root;
      const element = instance.findByProps({
        active: tabDefaults.active,
      });

      expect(element).toBeTruthy();
    });

    it(`should override the default 'active' when it is passed as prop`, () => {
      expect.assertions(1);
      const instance = setup({
        ...requiredProps,
        active: newActive,
      }).renderRTR().root;
      const element = instance.findByProps({ active: newActive });

      expect(element).toBeTruthy();
    });
  });

  describe('style tests', () => {
    it(`should have styled the Container component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const container = screen.getByTestId(tabDefaults.testID);

      expect(container).toHaveStyle({
        color: hexToRgb(themes.default.colors.font.default),
        ...themes.default.typographies.button,
      });
    });

    it(`should add border style when the tab is active`, () => {
      expect.assertions(1);
      setup({ ...requiredProps, active: true }).renderJestDom();
      const container = screen.getByTestId(tabDefaults.testID);

      expect(container).toHaveStyle({
        borderBottomWidth: '4px',
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
