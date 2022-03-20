import styled, { CSSObject, DefaultTheme } from 'styled-components';

import { FeedbackColor } from '../../Theme/Types/Colors.types';
import { toPx } from '../../Utils/Transform/toPx.util';
import { ButtonSize, ButtonSizes, ButtonStyleProps } from './Button.types';

const getBackgroundColor = ({
  theme,
  hoverFeedbackColor,
  hover,
  disabled,
}: {
  theme: DefaultTheme;
  hoverFeedbackColor?: FeedbackColor;
  hover: boolean;
  disabled: boolean;
}): string => {
  if (disabled) {
    return theme.colors.background.default.dark;
  }
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
  disabled,
}: {
  theme: DefaultTheme;
  hoverFeedbackColor?: FeedbackColor;
  hover: boolean;
  disabled: boolean;
}): string => {
  if (hover && hoverFeedbackColor) {
    if (disabled) {
      return theme.colors.feedback[hoverFeedbackColor].dark;
    }
    return theme.colors.feedback[hoverFeedbackColor].darkest;
  }
  if (disabled) {
    return `${theme.colors.main.effect.normal}33`;
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
  border-style: solid;
  border-color: ${({ theme, hoverFeedbackColor, disabled }) =>
    getBorderColor({ theme, hoverFeedbackColor, hover: false, disabled })};
  border-radius: ${({ theme }) => toPx(theme.borders.radius.LG)};

  ${({ theme }) => theme.typographies.button};
  color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.background.default.light
      : theme.colors.background.default.lightest};

  background-color: ${({ theme, disabled }) =>
    getBackgroundColor({ theme, hover: false, disabled })};

  &:hover {
    background-color: ${({ theme, hoverFeedbackColor, disabled }) =>
      getBackgroundColor({ theme, hoverFeedbackColor, hover: true, disabled })};

    border-color: ${({ theme, hoverFeedbackColor, disabled }) =>
      getBorderColor({ theme, hoverFeedbackColor, hover: true, disabled })};

    ${({ theme, hoverFeedbackColor, disabled }) =>
      !disabled &&
      `box-shadow: inset 0 0 1em ${getBorderColor({
        theme,
        hoverFeedbackColor,
        hover: true,
        disabled,
      })}`};
  }
`;
