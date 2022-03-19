import styled, { CSSObject, DefaultTheme } from 'styled-components';

import { FeedbackColor } from '../../Theme/Types/Colors.types';
import { toPx } from '../../Utils/Transform/toPx.util';
import { ButtonSize, ButtonSizes, ButtonStyleProps } from './Button.types';

const getBackgroundColor = ({
  theme,
  hoverFeedbackColor,
  hover,
}: {
  theme: DefaultTheme;
  hoverFeedbackColor?: FeedbackColor;
  hover: boolean;
}): string => {
  if (hover && hoverFeedbackColor) {
    return theme.colors.feedback[hoverFeedbackColor].dark;
  }
  return theme.colors.background.default.darkest;
};
const getButtonDimensions = ({ size }: { size: ButtonSize }): CSSObject => {
  const buttonDimensions: ButtonSizes = {
    MD: '2.2rem',
    LG: '3rem',
  };
  return { height: buttonDimensions[size] };
};

const getBorderColor = ({
  theme,
  hoverFeedbackColor,
  hover,
}: {
  theme: DefaultTheme;
  hoverFeedbackColor?: FeedbackColor;
  hover: boolean;
}): string => {
  if (hover && hoverFeedbackColor) {
    return theme.colors.feedback[hoverFeedbackColor].darkest;
  }
  return `${theme.colors.main.effect.normal}55`;
};

export const ButtonContainer = styled.button<ButtonStyleProps>`
  cursor: pointer;
  border: 0;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;

  ${getButtonDimensions};

  border-width: 1px;
  border-color: ${({ theme, hoverFeedbackColor }) =>
    getBorderColor({ theme, hoverFeedbackColor, hover: false })};
  border-style: solid;
  border-radius: ${({ theme }) => toPx(theme.borders.radius.LG)};

  ${({ theme }) => theme.typographies.button};
  color: ${({ theme }) => theme.colors.background.default.lightest};

  background-color: ${({ theme }) =>
    getBackgroundColor({ theme, hover: false })};

  &:hover {
    background-color: ${({ theme, hoverFeedbackColor }) =>
      getBackgroundColor({ theme, hoverFeedbackColor, hover: true })};

    border-color: ${({ theme, hoverFeedbackColor }) =>
      getBorderColor({ theme, hoverFeedbackColor, hover: true })};

    box-shadow: inset 0 0 1em
      ${({ theme, hoverFeedbackColor }) =>
        getBorderColor({ theme, hoverFeedbackColor, hover: true })};
  }
`;
