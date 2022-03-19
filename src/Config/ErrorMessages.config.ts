import { MAX_NUMBER_POSTS_PER_DAY } from './Constants.config';

export const USER_NOT_FOUND = (userId: string) =>
  `User '${userId}' was not found.`;

export const REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY = (userId: string) =>
  `User '${userId}' reached the max number of posts per day (${MAX_NUMBER_POSTS_PER_DAY})`;
