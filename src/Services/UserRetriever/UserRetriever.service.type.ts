import { UserType } from '../../Models/User.types';

export interface UserRetrieverService {
  getAll: () => UserType[];
  getById: (userId: string) => UserType | undefined;
  getByNickname: (nickname: string) => UserType | undefined;
}
