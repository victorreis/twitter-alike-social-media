import styled from 'styled-components';

import { PostCreatorStyleProps } from './PostCreator.types';

export const PostCreatorContainer = styled.div<PostCreatorStyleProps>`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const PostCreatorHeader = styled.div<PostCreatorStyleProps>`
  display: flex;
  column-gap: 1rem;
  justify-content: flex-end;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.background.default.light};
  padding-bottom: 16px;
`;

export const PostCreatorFooter = styled.div<PostCreatorStyleProps>`
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  column-gap: 1rem;
`;
