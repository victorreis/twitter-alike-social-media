import styled from 'styled-components';

import { toPx } from '../../Utils/Transform/toPx.util';
import { TextareaStyleProps } from './Textarea.types';

export const StyledTextarea = styled.textarea<TextareaStyleProps>`
  box-sizing: border-box;
  padding: 0.5rem;
  resize: none;
  flex: 1;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.main.effect.normal}55;
  border-style: solid;
  border-radius: ${({ theme }) => toPx(theme.borders.radius.LG)};

  ${({ theme }) => theme.typographies.body1};
  background-color: ${({ theme }) => theme.colors.background.default.lightest};
`;
