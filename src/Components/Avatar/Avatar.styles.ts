import styled, { CSSObject } from 'styled-components';

import { toPx } from '../../Utils/Transform/toPx.util';
import { Typography } from '../Typography';
import { AvatarSize, AvatarSizes, AvatarStyleProps } from './Avatar.types';

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

export const AvatarContainer = styled.div<AvatarStyleProps>`
  vertical-align: middle;
  border-radius: 50%;
  background-color: white;
  display: grid;
  place-items: center;
  ${getAvatarContainerDimensions};
  box-sizing: border-box;
`;

export const AvatarImage = styled.img<AvatarStyleProps>`
  vertical-align: middle;
  border-radius: 50%;
  ${getAvatarDimensions}
`;

export const AvatarInitials = styled(Typography)<{ size: AvatarSize }>`
  font-size: ${({ size }) => toPx(avatarDimensions[size] * 0.67)};
  color: red;
  font-family: Impact;
`;
