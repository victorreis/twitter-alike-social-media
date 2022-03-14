import { nanoid } from 'nanoid';

import { UserType } from '../../Models/User.types';
import { FollowerFollowed } from './LocalStorageInitializer.service.type';
import { LOGGED_IN_USER, mockedUsers } from './Users.mock';

export const mockedFollowerFolloweds: FollowerFollowed[] = [
  {
    id: nanoid(),
    follower: mockedUsers[1] as UserType,
    followed: LOGGED_IN_USER,
  },
  {
    id: nanoid(),
    follower: mockedUsers[2] as UserType,
    followed: LOGGED_IN_USER,
  },
  {
    id: nanoid(),
    follower: mockedUsers[3] as UserType,
    followed: LOGGED_IN_USER,
  },
  {
    id: nanoid(),
    follower: mockedUsers[4] as UserType,
    followed: LOGGED_IN_USER,
  },
  {
    id: nanoid(),
    follower: mockedUsers[5] as UserType,
    followed: LOGGED_IN_USER,
  },
  {
    id: nanoid(),
    follower: mockedUsers[6] as UserType,
    followed: LOGGED_IN_USER,
  },
  {
    id: nanoid(),
    follower: LOGGED_IN_USER,
    followed: mockedUsers[1] as UserType,
  },
  {
    id: nanoid(),
    follower: LOGGED_IN_USER,
    followed: mockedUsers[6] as UserType,
  },
];
