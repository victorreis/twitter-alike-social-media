import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import { PostCreator, postCreatorDefaults } from './PostCreator';
import { PostCreatorProps } from './PostCreator.types';

describe('postCreator component tests', () => {
  const onSubmit = jest.fn();
  const thumbnailUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAcCAYAAAATFf3WAAAAAXNSR0IArs4c6QAAArJJREFUWEftlVtIk2EYx3/bPKERZOkItUSIskLojKDRwRrDIlMo0wkzwwmpQzS7KPBQ1E3zstZuUjONsIvAxNKMJPDCykM1yQ5WHppmIeWhMl1839xyUG4xJS/28V297/O+///3ew6fxGw2m1nAj8Rt0MXsuAm6CBA3QTdBVwm4et5BDVpnuMROx4z9bJfgaF84bh9juVC450/rv+UcNsn4+BdytLn8nLI3lZauoa2lmcet7TaRxCQVu3dEYTAYuF1bh6+vH5laLX1vX1J/74FNVbgpOCSUgoJTSF0xKJD6Pj5CYeEZRkdHuHRRzx5lLOvC13BElcTpk7l0ve7nYNw+UfxAfAKDPW84lKzmRH4+TE6wyD+AiNVhND1sprGhnve9A6jVKpYHhZCTk4UU6axVMCtBCzOz+A5/MiGXB6MvvUZqymEkTKJU7AXPJdTWVIschN/6+eICis7paH3aQfiqMIu4xJLG7Ix06pseYTQ+EeabSF4yvfc3lw5TbD04PGQiUB7EZdFgIjCFUhFDa8cLtm3djFTmRenVMvq6u4iO3sm3HxMkq1IoPluEPGCZaCYrI52GphaMxjYH3P6hBh0ZNH0cIy8vG6lURnxCPF4eMnp7eyjR6dDrDWyJ3M79xjvIJJA5bbDT2Oag8ubQIJ7+YorFYjBPMT42iq+fn1gW2uMayipvMTDUh4+Hx/8x2P7sFdFRkaLBpBQ1NTcrGfz8ldCVK7heVcUuRSyVFVfEfWuK54Gg0M1jXNCVsD8ugYj1a0XB6htVPO/ssuUjRqEkcOliyssr+GAaYMPGTaQdTcXH2xthItytq6X7XT8azTGhPZya4U43iWWoii05Y56Z7YSsA1zsaFvkTCOWVSFuHgw69cFzHvQPBOdc26kL3QadwjRLkJugm6CrBFw9v+Br8BdSpWm8K4SiiQAAAABJRU5ErkJggg==';
  const name = 'Victor Reis';
  const nickname = 'victor.reis';

  const requiredProps: PostCreatorProps = {
    onSubmit,
    thumbnailUrl,
    name,
    nickname,
  };

  const setup = (props?: PostCreatorProps) => {
    const renderRTR = () =>
      renderRTRCreator<PostCreatorProps>(PostCreator, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<PostCreatorProps>(PostCreator, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(postCreatorDefaults.testID);

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
