import axios from "axios";
import { User } from "../../../types";
import { IUserRepository } from "../interface";

export class UserAxiosRepository implements IUserRepository {
  public async getAll(): Promise<User[]> {
    return axios.get('/api/user');
  }
  
  public async create(user: Partial<User>): Promise<void> {
    return axios.post('/api/user', user);
  }
  
  public async update(user: Partial<User>): Promise<void> {
    return axios.put('/api/user', user);
  }
  
  public async remove(userId: string): Promise<void> {
    await axios.delete(`/api/user/${userId}`);
  }
  
}

