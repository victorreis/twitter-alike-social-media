import styled from 'styled-components';

import { PostCreatorStyleProps } from './PostCreator.types';

export const PostCreatorContainer = styled.div<PostCreatorStyleProps>`
  display: flex;
  flex-direction: column;
  padding: 16px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.background.default.normal};
`;

export const PostCreatorHeader = styled.div<PostCreatorStyleProps>`
  display: flex;
  column-gap: 1rem;
  justify-content: flex-end;
`;

export const PostCreatorFooter = styled.div<PostCreatorStyleProps>`
  padding-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  column-gap: 1rem;
`;
