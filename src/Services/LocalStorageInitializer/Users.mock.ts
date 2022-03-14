import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

import { UserType } from '../../Models/User.types';

export const getRandomNumber = (max = 777) => Math.round(Math.random() * max);
export const dateFormat = 'MM-DD-YYYY';

export const LOGGED_IN_USER_ID = '1';
export const LOGGED_IN_USER: UserType = {
  id: LOGGED_IN_USER_ID,
  name: 'Victor Reis',
  nickname: 'victor.reis',
  url: 'https://i.pravatar.cc/500',
  thumbnailUrl: 'https://i.pravatar.cc/100',
  createdAt: dayjs('01-01-2011', 'MM-DD-YYYY').toDate(),
  following: getRandomNumber(),
  followers: getRandomNumber(),
};

export const mockedUsers: UserType[] = [
  LOGGED_IN_USER,
  {
    id: nanoid(),
    name: 'User Two',
    nickname: 'user.two',
    url: 'https://i.pravatar.cc/500',
    thumbnailUrl: 'https://i.pravatar.cc/100',
    createdAt: dayjs('02-02-2012', 'MM-DD-YYYY').toDate(),
    following: getRandomNumber(),
    followers: getRandomNumber(),
  },
  {
    id: nanoid(),
    name: 'User Three',
    nickname: 'user.three',
    url: 'https://i.pravatar.cc/500',
    thumbnailUrl: 'https://i.pravatar.cc/100',
    createdAt: dayjs('03-03-2013', 'MM-DD-YYYY').toDate(),
    following: getRandomNumber(),
    followers: getRandomNumber(),
  },
  {
    id: nanoid(),
    name: 'User Four',
    nickname: 'user.four',
    url: 'https://i.pravatar.cc/500',
    thumbnailUrl: 'https://i.pravatar.cc/100',
    createdAt: dayjs('04-04-2014', 'MM-DD-YYYY').toDate(),
    following: getRandomNumber(),
    followers: getRandomNumber(),
  },
  {
    id: nanoid(),
    name: 'User Five',
    nickname: 'user.five',
    url: 'https://i.pravatar.cc/500',
    thumbnailUrl: 'https://i.pravatar.cc/100',
    createdAt: dayjs('05-05-2015', 'MM-DD-YYYY').toDate(),
    following: getRandomNumber(),
    followers: getRandomNumber(),
  },
  {
    id: nanoid(),
    name: 'User Six',
    nickname: 'user.six',
    url: 'https://i.pravatar.cc/500',
    thumbnailUrl: 'https://i.pravatar.cc/100',
    createdAt: dayjs('06-06-2016', 'MM-DD-YYYY').toDate(),
    following: getRandomNumber(),
    followers: getRandomNumber(),
  },
  {
    id: nanoid(),
    name: 'User Seven',
    nickname: 'user.seven',
    url: 'https://i.pravatar.cc/500',
    thumbnailUrl: 'https://i.pravatar.cc/100',
    createdAt: dayjs('07-07-2017', 'MM-DD-YYYY').toDate(),
    following: getRandomNumber(),
    followers: getRandomNumber(),
  },
];
