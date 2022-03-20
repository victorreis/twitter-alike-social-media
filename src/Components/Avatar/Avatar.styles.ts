import styled, { CSSObject } from 'styled-components';

import { toPx } from '../../Utils/Transform/toPx.util';
import { Typography } from '../Typography';
import {
  AvatarContainerStyleProps,
  AvatarSize,
  AvatarSizes,
  AvatarStyleProps,
} from './Avatar.types';

export const avatarDimensions: AvatarSizes = {
  SM: 32,
  MD: 56,
  LG: 100,
};

const getAvatarDimensions = ({ size }: { size: AvatarSize }): CSSObject => {
  return {
    width: avatarDimensions[size],
    height: avatarDimensions[size],
  };
};

const getAvatarContainerDimensions = ({
  size,
}: {
  size: AvatarSize;
}): CSSObject => {
  return {
    width: avatarDimensions[size] + 4,
    height: avatarDimensions[size] + 4,
  };
};

export const AvatarContainer = styled.div<AvatarContainerStyleProps>`
  vertical-align: middle;
  border-radius: 50%;
  background-color: white;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  padding: 2px;
  cursor: ${({ isAvatarClickable }) =>
    isAvatarClickable ? 'pointer' : undefined};

  ${getAvatarContainerDimensions};
`;

export const AvatarImage = styled.img<AvatarStyleProps>`
  vertical-align: middle;
  border-radius: 50%;
  ${getAvatarDimensions}
`;

export const AvatarInitials = styled(Typography)<AvatarStyleProps>`
  font-size: ${({ size }: { size: AvatarSize }) =>
    toPx(avatarDimensions[size] * 0.67)};
  color: red;
  font-family: Impact;
`;
