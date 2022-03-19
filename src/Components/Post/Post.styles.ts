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
    borderBottomColor: theme.colors.background.default.normal,
  };
};

const getPostContentButtonsContainerBorder = ({
  theme,
  hasChildren,
}: {
  theme: DefaultTheme;
  hasChildren: boolean;
}): CSSObject => {
  return {
    ...(!hasChildren && {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: theme.colors.background.default.normal,
    }),
  };
};

export const PostContainer = styled.div`
  display: flex;
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
  column-gap: 1rem;
  align-items: center;
`;

export const PostContentTitle = styled(Typography)`
  margin: 0;
`;

export const PostText = styled(Typography)`
  flex: 1;
  margin-bottom: 16px;
`;

export const PostContentButtonsContainer = styled.div<{ hasChildren: boolean }>`
  display: flex;
  flex: 1;
  column-gap: 1rem;
  align-items: center;
  align-self: stretch;
  justify-content: flex-end;
  padding-top: 16px;

  ${getPostContentButtonsContainerBorder};
`;
