import styled from 'styled-components';

import { Button } from '../Button/Button';

export const TextToggleContainer = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background.default.light};

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.background.default.dark};
  border-radius: 3rem;
`;

export const TextToggleActiveButton = styled(Button)`
  height: 2rem;
  border-radius: 3rem;
  margin: 1px;
  padding: 0 16px;
  border-width: 0;
`;

export const TextToggleButton = styled(TextToggleActiveButton)`
  background-color: ${({ theme }) => theme.colors.background.default.light};
  border-radius: 3rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.default.dark};
  }
`;
