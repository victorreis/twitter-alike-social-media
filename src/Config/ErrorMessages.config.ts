import { MAX_NUMBER_POSTS_PER_DAY } from './Constants.config';

export const USER_NOT_FOUND = (userId: string) =>
  `User '${userId}' was not found.`;

export const REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY = `Only ${MAX_NUMBER_POSTS_PER_DAY} posts per day are allowed.`;

export const INTERNAL_SERVER_ERROR = 'Internal server error.';
export const UNNAVAILABLE_USER = 'This user is unnavailable.';
