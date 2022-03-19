import { AiOutlineRetweet } from 'react-icons/ai';

import styled from 'styled-components';

import { Typography } from '../Typography';
import { RepostStyleProps } from './Repost.types';

export const RepostContainer = styled.div<RepostStyleProps>`
  display: flex;
  flex-direction: column;
`;

export const RepostTextContainer = styled.div<RepostStyleProps>`
  display: flex;
  column-gap: 0.5rem;
  padding: 16px;
  padding-bottom: 0;
`;

export const RepostText = styled(Typography)<RepostStyleProps>`
  margin: 0;
  color: ${({ theme }) => theme.colors.font.hint};
`;

export const RepostIcon = styled(AiOutlineRetweet)`
  color: ${({ theme }) => theme.colors.font.hint};
`;
