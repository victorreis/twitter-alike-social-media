import { App } from './App';
import {
  renderRTRCreator,
  renderJestDomCreator,
  screen,
} from './Config/Tests/GlobalSetup.config';
import { themes } from './Theme/CustomThemeProvider';
import { hexToRgb } from './Utils/Transform/hexToRgb.util';

describe('app component tests', () => {
  const setup = () => {
    const renderRTR = () => renderRTRCreator(App, {});
    const renderJestDom = () => renderJestDomCreator(App, {});

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it('should render the Typography component', () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId('container');

      expect(testInstance).toBeTruthy();
    });
  });

  describe('style tests', () => {
    it('should have style the Container component', () => {
      expect.assertions(1);
      setup().renderJestDom();
      const container = screen.getByTestId('container');

      expect(container).toHaveStyle({
        backgroundColor: hexToRgb(
          themes.default.colors.background.default.darkest
        ),
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
      });
    });
  });
});
