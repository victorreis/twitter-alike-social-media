import { AiOutlineRetweet } from 'react-icons/ai';

import styled from 'styled-components';

import { Typography } from '../Typography';

export const RepostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RepostTextContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
  padding: 16px;
  padding-bottom: 0;
`;

export const RepostText = styled(Typography)`
  margin: 0;
  color: ${({ theme }) => theme.colors.font.hint};
`;

export const RepostIcon = styled(AiOutlineRetweet)`
  color: ${({ theme }) => theme.colors.font.hint};
`;
