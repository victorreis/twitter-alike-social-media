import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserTabBar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;

  box-sizing: border-box;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.background.default.light};
`;
