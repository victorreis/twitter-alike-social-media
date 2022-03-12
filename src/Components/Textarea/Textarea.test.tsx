import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { themes } from '../../Theme/CustomThemeProvider';
import { toPx } from '../../Utils/Transform/toPx.util';
import { Textarea, textareaDefaults } from './Textarea';
import { RequiredTextareaProps, TextareaProps } from './Textarea.types';

describe('textarea component tests', () => {
  const value = 'text';
  const onChange = jest.fn();
  const newResizable = true;
  const newRows = 5;

  const requiredProps: RequiredTextareaProps = {
    value,
    onChange,
  };

  const setup = (props?: TextareaProps) => {
    const renderRTR = () =>
      renderRTRCreator<TextareaProps>(Textarea, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<TextareaProps>(Textarea, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(textareaDefaults.testID);

      expect(testInstance).toBeTruthy();
    });

    it(`should render the text`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const element = screen.getByText(value);

      expect(element).toBeInTheDocument();
    });

    it(`should render '${String(
      textareaDefaults.resizable
    )}' as the default 'resizable'`, () => {
      expect.assertions(1);
      const instance = setup().renderRTR().root;
      const element = instance.findByProps({
        resizable: textareaDefaults.resizable,
      });

      expect(element).toBeTruthy();
    });

    it(`should override the default 'resizable' when it is passed as prop`, () => {
      expect.assertions(1);
      const instance = setup({
        ...requiredProps,
        resizable: newResizable,
      }).renderRTR().root;
      const element = instance.findByProps({ resizable: newResizable });

      expect(element).toBeTruthy();
    });

    it(`should render '${String(
      textareaDefaults.rows
    )}' as the default 'row'`, () => {
      expect.assertions(1);
      const instance = setup().renderRTR().root;
      const element = instance.findByProps({
        rows: textareaDefaults.rows,
      });

      expect(element).toBeTruthy();
    });

    it(`should override the default 'row' when it is passed as prop`, () => {
      expect.assertions(1);
      const instance = setup({
        ...requiredProps,
        rows: newRows,
      }).renderRTR().root;
      const element = instance.findByProps({ rows: newRows });

      expect(element).toBeTruthy();
    });
  });

  describe('style tests', () => {
    it(`should have styled the Container component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const container = screen.getByTestId(textareaDefaults.testID);

      expect(container).toHaveStyle({
        borderColor: `${themes.default.colors.main.effect.normal}55`,
        borderRadius: toPx(themes.default.borders.radius.LG),
        backgroundColor: themes.default.colors.background.default.lightest,
        ...themes.default.typographies.body1,
        // // color: hexToRgb(themes.default.colors.font.default),
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
