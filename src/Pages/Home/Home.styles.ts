import styled from 'styled-components';

import { Typography } from '../../Components/Typography';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;

export const HomeTitle = styled(Typography)`
  margin: 0;
`;

export const HomeVerticalMenu = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 13rem;
  position: fixed;
  padding: 1rem;
  box-sizing: border-box;
  height: 100vh;

  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${({ theme }) => theme.colors.background.default.normal};
`;

export const HomeFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13rem;
`;
