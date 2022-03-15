import { LOCAL_STORAGE } from '../../Config/Constants';
import { UserType } from '../../Models/User.types';
import { UserRetrieverService } from './UserRetriever.service.type';

const getAll = (): UserType[] => {
  return JSON.parse(
    localStorage.getItem(LOCAL_STORAGE.USERS) || '[]'
  ) as UserType[];
};

const getById = (userId: string): UserType | undefined => {
  return getAll().find((user) => user.id === userId);
};

export const userRetrieverService: UserRetrieverService = {
  getAll,
  getById,
};
