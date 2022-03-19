import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

import { SHORT_DATE_FORMAT } from '../../Config/Constants.config';
import { UserType } from '../../Models/User.types';

export const getRandomNumber = (max = 777) => Math.round(Math.random() * max);

export const LOGGED_IN_USER_ID = '1';
export const LOGGED_IN_USER: UserType = {
  id: LOGGED_IN_USER_ID,
  name: 'Victor Reis',
  nickname: 'victor.reis',
  url: 'https://i.pravatar.cc/500',
  thumbnailUrl: 'https://i.pravatar.cc/100',
  createdAt: dayjs('01-01-2011', SHORT_DATE_FORMAT).toDate(),
  following: getRandomNumber(),
  followers: getRandomNumber(),
  numberOfPosts: getRandomNumber(),
};

export const mockedUsers: UserType[] = [
  LOGGED_IN_USER,
  {
    id: nanoid(),
    name: 'User Two',
    nickname: 'usertwo',
    url: 'https://i.pravatar.cc/500',
    thumbnailUrl: 'https://i.pravatar.cc/100',
    createdAt: dayjs('02-02-2012', SHORT_DATE_FORMAT).toDate(),
    following: getRandomNumber(),
    followers: getRandomNumber(),
    numberOfPosts: getRandomNumber(),
  },
  {
    id: nanoid(),
    name: 'User Three',
    nickname: 'userthree',
    url: 'https://i.pravatar.cc/500',
    thumbnailUrl: 'https://i.pravatar.cc/100',
    createdAt: dayjs('03-03-2013', SHORT_DATE_FORMAT).toDate(),
    following: getRandomNumber(),
    followers: getRandomNumber(),
    numberOfPosts: getRandomNumber(),
  },
  {
    id: nanoid(),
    name: 'User Four',
    nickname: 'userfour',
    url: 'https://i.pravatar.cc/500',
    thumbnailUrl: 'https://i.pravatar.cc/100',
    createdAt: dayjs('04-04-2014', SHORT_DATE_FORMAT).toDate(),
    following: getRandomNumber(),
    followers: getRandomNumber(),
    numberOfPosts: getRandomNumber(),
  },
  {
    id: nanoid(),
    name: 'User Five',
    nickname: 'userfive',
    url: 'https://i.pravatar.cc/500',
    thumbnailUrl: 'https://i.pravatar.cc/100',
    createdAt: dayjs('05-05-2015', SHORT_DATE_FORMAT).toDate(),
    following: getRandomNumber(),
    followers: getRandomNumber(),
    numberOfPosts: getRandomNumber(),
  },
  {
    id: nanoid(),
    name: 'User Six',
    nickname: 'usersix',
    url: 'https://i.pravatar.cc/500',
    thumbnailUrl: 'https://i.pravatar.cc/100',
    createdAt: dayjs('06-06-2016', SHORT_DATE_FORMAT).toDate(),
    following: getRandomNumber(),
    followers: getRandomNumber(),
    numberOfPosts: getRandomNumber(),
  },
  {
    id: nanoid(),
    name: 'User Seven',
    nickname: 'userseven',
    url: 'https://i.pravatar.cc/500',
    thumbnailUrl: 'https://i.pravatar.cc/100',
    createdAt: dayjs('07-07-2017', SHORT_DATE_FORMAT).toDate(),
    following: getRandomNumber(),
    followers: getRandomNumber(),
    numberOfPosts: getRandomNumber(),
  },
];
