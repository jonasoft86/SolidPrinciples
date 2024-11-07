import { User } from "../../../types";
import { IUserRepository } from "../interface";

export const UserFetchRepository: IUserRepository = {
  getAll,
  create,
  update,
  remove,
}

async function getAll(): Promise<User[]> {
  const response = await fetch('/api/user');
  return await response.json();
}

async function create(user: Partial<User>): Promise<void> {
  await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify(user),
  });
}

async function update(user: Partial<User>): Promise<void> {
  await fetch('/api/user', {
    method: 'PUT',
    body: JSON.stringify(user),
  });
}

async function remove(userId: string): Promise<void> {
  await fetch(`/api/user/${userId}`, {
    method: 'DELETE',
  });
}
