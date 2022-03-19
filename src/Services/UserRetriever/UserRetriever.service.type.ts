import { UserType } from '../../Models/User.types';

export interface UserRetrieverService {
  /**
   * Get all users.
   *
   * @returns UserType[]
   */
  getAll: () => UserType[];

  /**
   * Get user by id.
   *
   * @param userId user's id
   * @returns UserType[]
   */
  getById: (userId: string) => UserType | undefined;

  /**
   * Get user by user's nickname.
   *
   * @param userId user's nickname
   * @returns UserType[]
   */
  getByNickname: (nickname: string) => UserType | undefined;
}
