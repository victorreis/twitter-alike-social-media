import styled from 'styled-components';

import { screenBreakpointRanges, screenBreakpoints } from '../../Theme/Types';
import { toPx } from '../../Utils/Transform/toPx.util';

export const ModalBackdropContainer = styled.div`
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.common.black}bb;
  z-index: 1;
  overflow-y: hidden;
`;

export const ModalContentContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.default.darker};
  border: 0;
  padding: 2rem 1rem;
  border-radius: ${({ theme }) => toPx(theme.borders.radius.XL)};
  z-index: 10;
  box-sizing: border-box;

  top: 5vh;
  left: 15vw;
  right: 15vw;
  height: 90vh;

  @media only screen and (max-width: ${screenBreakpoints.md}px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  @media ${screenBreakpointRanges.lg} {
    width: 80vw;
    left: 10vw;
    right: 10vw;
  }
  @media ${screenBreakpointRanges.xl} {
    width: 70vw;
    left: 15vw;
    right: 15vw;
  }
`;
