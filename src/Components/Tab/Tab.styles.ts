import styled, { CSSObject, DefaultTheme } from 'styled-components';

import { TabStyleProps } from './Tab.types';

const getTabActiveBorder = ({
  theme,
  active,
}: {
  theme: DefaultTheme;
  active: boolean;
}): CSSObject => {
  return {
    ...(active && {
      borderBottomWidth: '4px',
      borderBottomStyle: 'solid',
      borderBottomColor: theme.colors.background.default.light,
    }),
  };
};

export const TabContainer = styled.div<TabStyleProps>`
  box-sizing: border-box;
  height: 3rem;
  padding: 16px;
  padding-bottom: 12px;

  color: ${({ theme }) => theme.colors.font.default};
  ${({ theme }) => theme.typographies.button};

  ${getTabActiveBorder};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.default.dark};
  }
`;
