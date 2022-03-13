import styled, { CSSObject, DefaultTheme } from 'styled-components';

import { Typography } from '../Typography';

const getPostBorders = ({
  theme,
  compact,
}: {
  theme: DefaultTheme;
  compact: boolean;
}): CSSObject => {
  if (compact) {
    return {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.colors.background.default.light,
      borderRadius: 16,
    };
  }

  return {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: theme.colors.background.default.light,
  };
};

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  column-gap: 1rem;

  ${getPostBorders}
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 1rem;
  flex: 1;
`;

export const PostContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;
`;

export const PostText = styled(Typography)`
  flex: 1;
  padding: 16px 0;
  margin-bottom: 16px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.background.default.light};
`;

export const PostContentButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;
  align-self: flex-end;
`;
