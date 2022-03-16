import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ContainerScroll = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background.default.normal};
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.default.light};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.background.default.darker}cc;
  }
  &::-webkit-scrollbar-track:hover {
    background: ${({ theme }) => theme.colors.background.default.light}cc;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.background.default.darkest};
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const PageContainer = styled(ContainerScroll)`
  padding: 0 2rem;
  height: 100vh;
`;
