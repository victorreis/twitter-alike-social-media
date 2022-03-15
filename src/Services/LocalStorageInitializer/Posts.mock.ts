import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

import { SHORT_DATE_FORMAT } from '../../Config/Constants';
import { PostType } from '../../Models/Post.types';
import { QuotePostType } from '../../Models/QuotePost.types';
import { RepostType } from '../../Models/Repost.types';
import { UserType } from '../../Models/User.types';
import { PostTypes } from './LocalStorageInitializer.service.type';
import { getRandomNumber, LOGGED_IN_USER, mockedUsers } from './Users.mock';

const text = `line 1\nline 2\nline 3`;

export const mockedPosts: PostType[] = [
  {
    type: 'Post',
    id: nanoid(),
    text,
    createdAt: dayjs('01-01-2021', SHORT_DATE_FORMAT).toDate(),
    createdBy: LOGGED_IN_USER,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
  {
    type: 'Post',
    id: nanoid(),
    text,
    createdAt: dayjs('02-02-2021', SHORT_DATE_FORMAT).toDate(),
    createdBy: LOGGED_IN_USER,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
  {
    type: 'Post',
    id: nanoid(),
    text,
    createdAt: dayjs('03-03-2021', SHORT_DATE_FORMAT).toDate(),
    createdBy: LOGGED_IN_USER,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
  {
    type: 'Post',
    id: nanoid(),
    text,
    createdAt: dayjs('01-01-2021', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[1] as UserType,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
  {
    type: 'Post',
    id: nanoid(),
    text,
    createdAt: dayjs('02-02-2021', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[1] as UserType,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
  {
    type: 'Post',
    id: nanoid(),
    text,
    createdAt: dayjs('03-03-2021', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[2] as UserType,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
  {
    type: 'Post',
    id: nanoid(),
    text,
    createdAt: dayjs('01-01-2021', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[3] as UserType,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
  {
    type: 'Post',
    id: nanoid(),
    text,
    createdAt: dayjs('02-02-2021', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[3] as UserType,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
  {
    type: 'Post',
    id: nanoid(),
    text,
    createdAt: dayjs('03-03-2021', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[4] as UserType,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
  {
    type: 'Post',
    id: nanoid(),
    text,
    createdAt: dayjs('01-01-2021', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[5] as UserType,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
  {
    type: 'Post',
    id: nanoid(),
    text,
    createdAt: dayjs('02-02-2021', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[6] as UserType,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
];
export const mockedReposts: RepostType[] = [
  {
    type: 'Repost',
    originalPost: mockedPosts[6] as PostType,
    id: nanoid(),
    createdAt: dayjs('01-01-2022', SHORT_DATE_FORMAT).toDate(),
    createdBy: LOGGED_IN_USER,
  },
  {
    type: 'Repost',
    originalPost: mockedPosts[7] as PostType,
    id: nanoid(),
    createdAt: dayjs('01-01-2022', SHORT_DATE_FORMAT).toDate(),
    createdBy: LOGGED_IN_USER,
  },
  {
    type: 'Repost',
    originalPost: mockedPosts[8] as PostType,
    id: nanoid(),
    createdAt: dayjs('01-01-2022', SHORT_DATE_FORMAT).toDate(),
    createdBy: LOGGED_IN_USER,
  },
  {
    type: 'Repost',
    originalPost: mockedPosts[7] as PostType,
    id: nanoid(),
    createdAt: dayjs('01-01-2022', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[1] as UserType,
  },
  {
    type: 'Repost',
    originalPost: mockedPosts[7] as PostType,
    id: nanoid(),
    createdAt: dayjs('01-01-2022', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[2] as UserType,
  },
  {
    type: 'Repost',
    originalPost: mockedPosts[7] as PostType,
    id: nanoid(),
    createdAt: dayjs('01-01-2022', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[3] as UserType,
  },
];

export const mockedQuotePosts: QuotePostType[] = [
  {
    type: 'QuotePost',
    originalPost: mockedPosts[4] as PostType,
    id: nanoid(),
    text: `What do you think about?`,
    createdAt: dayjs('01-01-2022', SHORT_DATE_FORMAT).toDate(),
    createdBy: LOGGED_IN_USER,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
  {
    type: 'QuotePost',
    originalPost: mockedPosts[0] as PostType,
    id: nanoid(),
    text: `Totally agree :)`,
    createdAt: dayjs('01-01-2022', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[4] as UserType,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
  {
    type: 'QuotePost',
    originalPost: mockedPosts[0] as PostType,
    id: nanoid(),
    text: `Desagree!!!`,
    createdAt: dayjs('01-01-2022', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[5] as UserType,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
  {
    type: 'QuotePost',
    originalPost: mockedPosts[0] as PostType,
    id: nanoid(),
    text: `This is the truth!`,
    createdAt: dayjs('01-01-2022', SHORT_DATE_FORMAT).toDate(),
    createdBy: mockedUsers[6] as UserType,
    reposts: getRandomNumber(),
    quotPosts: getRandomNumber(),
  },
];

export const mockedPostsAllTypes: PostTypes[] = [
  ...mockedPosts,
  ...mockedReposts,
  ...mockedQuotePosts,
];
