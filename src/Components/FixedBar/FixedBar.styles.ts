import styled from 'styled-components';

import { FixedBarStyleProps } from './FixedBar.types';

export const FixedBarContainer = styled.div<FixedBarStyleProps>`
  display: flex;
  height: 3rem;
  top: 0;
  left: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;

  box-sizing: border-box;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.background.default.normal};

  background-color: ${({ theme }) => theme.colors.background.default.darkest};
  color: ${({ theme }) => theme.colors.font.default};
  ${({ theme }) => theme.typographies.h3};

  justify-content: ${({ justifyContent }) => justifyContent};
`;
