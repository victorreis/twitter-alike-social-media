import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { themes } from '../../Theme/CustomThemeProvider';
import { hexToRgb } from '../../Utils/Transform/hexToRgb.util';
import { FixedBar, fixedBarDefaults } from './FixedBar';
import {
  RequiredFixedBarProps,
  FixedBarProps,
  JustifyContent,
} from './FixedBar.types';

describe('fixedBar component tests', () => {
  const text = 'text';
  const newJustifyContent: JustifyContent = 'space-between';

  const requiredProps: RequiredFixedBarProps = {
    children: text,
  };

  const setup = (props?: FixedBarProps) => {
    const renderRTR = () =>
      renderRTRCreator<FixedBarProps>(FixedBar, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<FixedBarProps>(FixedBar, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(fixedBarDefaults.testID);

      expect(testInstance).toBeTruthy();
    });

    it(`should render the text when passed as children`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const element = screen.getByText(text);

      expect(element).toBeInTheDocument();
    });

    it(`should render '${fixedBarDefaults.justifyContent}' as the default 'justifyContent'`, () => {
      expect.assertions(1);
      const instance = setup().renderRTR().root;
      const element = instance.findByProps({
        justifyContent: fixedBarDefaults.justifyContent,
      });

      expect(element).toBeTruthy();
    });

    it(`should override the default 'justifyContent' when it is passed as prop`, () => {
      expect.assertions(1);
      const instance = setup({
        ...requiredProps,
        justifyContent: newJustifyContent,
      }).renderRTR().root;
      const element = instance.findByProps({
        justifyContent: newJustifyContent,
      });

      expect(element).toBeTruthy();
    });
  });

  describe('style tests', () => {
    it(`should have styled the Container component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const container = screen.getByTestId(fixedBarDefaults.testID);

      expect(container).toHaveStyle({
        borderBottomStyle: 'solid',
        backgroundColor: hexToRgb(
          themes.default.colors.background.default.darkest
        ),
        color: hexToRgb(themes.default.colors.font.default),
        justifyContent: fixedBarDefaults.justifyContent,
        ...themes.default.typographies.h3,
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
