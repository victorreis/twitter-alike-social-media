import styled from 'styled-components';

import { UserDetailsStyleProps } from './UserDetails.types';

export const UserDetailsContainer = styled.div<UserDetailsStyleProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
  row-gap: 1rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.background.default.normal};
`;

export const UserDetailsHeader = styled.div<UserDetailsStyleProps>`
  display: flex;
  column-gap: 1rem;
`;

export const UserDetailsHeaderContent = styled.div<UserDetailsStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  row-gap: 0.5rem;
`;

export const UserDetailsContent = styled.div<UserDetailsStyleProps>`
  display: flex;
  flex-direction: column;
  row-gap: 0.2rem;
`;
