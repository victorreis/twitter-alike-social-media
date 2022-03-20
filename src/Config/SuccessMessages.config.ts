export const POST_CREATED = 'Your post was created succesfully!';
export const REPOST_CREATED = 'Reposted succesfully!';
export const QUOTE_POST_CREATED = 'Your quote post was created succesfully!';

export const FOLLOW_CREATED = (followedNickname: string) =>
  `You are now following @${followedNickname}!`;
export const FOLLOW_DELETED = (unfollowedNickname: string) =>
  `You stoped following @${unfollowedNickname}!`;
