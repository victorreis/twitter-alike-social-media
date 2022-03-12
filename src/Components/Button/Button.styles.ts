import styled, { DefaultTheme } from 'styled-components';

import { FeedbackColor } from '../../Theme/Types/Colors.types';
import { toPx } from '../../Utils/Transform/toPx.util';
import { ButtonStyleProps } from './Button.types';

const getBackgroundColor = ({
  theme,
  hoverFeedbackColor,
  hover,
}: {
  theme: DefaultTheme;
  hoverFeedbackColor?: FeedbackColor;
  hover: boolean;
}): string => {
  if (hover) {
    if (hoverFeedbackColor) {
      return theme.colors.feedback[hoverFeedbackColor].dark;
    }
  }
  return theme.colors.background.default.darkest;
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
  if (hover) {
    if (hoverFeedbackColor) {
      return theme.colors.feedback[hoverFeedbackColor].darkest;
    }
  }
  return `${theme.colors.main.effect.normal}55`;
};

export const ButtonContainer = styled.button<ButtonStyleProps>`
  cursor: pointer;
  height: 3rem;
  margin: 0.5rem;
  border: 0;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme, hoverFeedbackColor }) =>
    getBorderColor({ theme, hoverFeedbackColor, hover: false })};
  border-style: solid;
  padding: 1rem;
  box-sizing: border-box;

  ${({ theme }) => theme.typographies.button};
  background-color: ${({ theme }) =>
    getBackgroundColor({ theme, hover: false })};
  color: ${({ theme }) => theme.colors.background.default.lightest};
  border-radius: ${({ theme }) => toPx(theme.borders.radius.LG)};

  &:hover {
    background-color: ${({ theme, hoverFeedbackColor }) =>
      getBackgroundColor({ theme, hoverFeedbackColor, hover: true })};
    border-color: ${({ theme, hoverFeedbackColor }) =>
      getBorderColor({ theme, hoverFeedbackColor, hover: true })};
  }
`;
