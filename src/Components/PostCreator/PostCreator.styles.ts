import styled from 'styled-components';

export const PostCreatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.background.default.normal};
`;

export const PostCreatorHeader = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: flex-end;
`;

export const PostCreatorFooter = styled.div`
  padding-top: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 1rem;
`;
