import {
  fireEvent,
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { themes } from '../../Theme/CustomThemeProvider';
import { hexToRgb } from '../../Utils/Transform/hexToRgb.util';
import { TextToggle, textToggleDefaults } from './TextToggle';
import { RequiredTextToggleProps, TextToggleProps } from './TextToggle.types';

describe('textToggle component tests', () => {
  const texts = ['teste1', 'teste2', 'teste3'];
  const onToggle = jest.fn();

  const requiredProps: RequiredTextToggleProps = {
    texts,
    onToggle,
  };

  const setup = (props?: TextToggleProps) => {
    const renderRTR = () =>
      renderRTRCreator<TextToggleProps>(TextToggle, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<TextToggleProps>(TextToggle, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(textToggleDefaults.testID);

      expect(testInstance).toBeTruthy();
    });

    it(`should render the texts`, () => {
      expect.assertions(3);
      setup().renderJestDom();
      const element0 = screen.getByText(String(texts[0]));
      const element1 = screen.getByText(String(texts[1]));
      const element2 = screen.getByText(String(texts[2]));

      expect(element0).toBeInTheDocument();
      expect(element1).toBeInTheDocument();
      expect(element2).toBeInTheDocument();
    });

    it(`should call the 'onToggle' callback when the button is clicked`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const index = 1;
      const element = screen.getByText(String(texts[index]));

      fireEvent.click(element);

      expect(onToggle).toHaveBeenCalledWith(index);
    });
  });

  describe('style tests', () => {
    it(`should have styled the Container component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const container = screen.getByTestId(textToggleDefaults.testID);

      expect(container).toHaveStyle({
        backgroundColor: themes.default.colors.background.default.light,
        borderColor: themes.default.colors.background.default.dark,
      });
    });

    it(`should change style of the buttons when some button is clicked`, () => {
      expect.assertions(4);
      setup().renderJestDom();
      const elementActiveByDefault = screen.getByText(
        String(texts[textToggleDefaults.activeIndex])
      );
      const element2 = screen.getByText(String(texts[1]));

      expect(elementActiveByDefault).toHaveStyle({
        backgroundColor: hexToRgb(
          themes.default.colors.background.default.darkest
        ),
      });
      expect(element2).toHaveStyle({
        backgroundColor: hexToRgb(
          themes.default.colors.background.default.light
        ),
      });

      fireEvent.click(element2);

      // TODO: async changes
      expect(elementActiveByDefault).toHaveStyle({
        backgroundColor: hexToRgb(
          themes.default.colors.background.default.darkest
        ),
      });
      expect(element2).toHaveStyle({
        backgroundColor: hexToRgb(
          themes.default.colors.background.default.light
        ),
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
