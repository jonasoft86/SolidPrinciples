import { User } from "../../../types";

export interface IUserRepository {
  getAll(): Promise<User[]>;
  create(user: Partial<User>): Promise<void>;
  update(user: Partial<User>): Promise<void>;
  remove(userId: string): Promise<void>;
}
