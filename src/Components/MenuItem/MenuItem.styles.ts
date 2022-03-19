import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { MenuItemStyleProps } from './MenuItem.types';

export const MenuItemContainer = styled(NavLink)<MenuItemStyleProps>`
  color: ${({ theme }) => theme.colors.font.default};
  ${({ theme }) => theme.typographies.h4};
  display: flex;
  text-decoration: none;
  column-gap: 1rem;
`;
