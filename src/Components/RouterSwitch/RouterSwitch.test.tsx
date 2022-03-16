import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { RouterSwitch, routerSwitchDefaults } from './RouterSwitch';
import {
  RequiredRouterSwitchProps,
  RouterSwitchProps,
} from './RouterSwitch.types';

describe('routerSwitch component tests', () => {
  const requiredProps: RequiredRouterSwitchProps = {};

  const setup = (props?: RouterSwitchProps) => {
    const renderRTR = () =>
      renderRTRCreator<RouterSwitchProps>(RouterSwitch, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<RouterSwitchProps>(RouterSwitch, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(routerSwitchDefaults.testID);

      expect(testInstance).toBeTruthy();
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
