import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const Logo = styled(NavLink)`
  text-transform: uppercase;
  justify-content: center;
  margin: 0;
  ${({ theme }) => theme.typographies.h2};

  ${({ theme }) => `background: linear-gradient(135deg,
     ${theme.colors.main.effect.dark},
     ${theme.colors.main.effect.light},
     ${theme.colors.main.detail.darker},
     ${theme.colors.main.detail.normal});`}
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span.larger {
    font-size: 2.4rem;
  }
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
