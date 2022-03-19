import styled from 'styled-components';

import { Typography } from '../../Components/Typography';

export const HomeContainer = styled.div`
  display: flex;
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
  border-right: 1px solid
    ${({ theme }) => theme.colors.background.default.normal};
`;

export const HomeFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13rem;
`;
