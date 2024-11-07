import { User } from "../../../types";

export function useManageUsers() {
  const createUser = async (name: string) => {
    const user: Partial<User> = {
      name,
    };
    await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  }

  const updateUser = async (user: Partial<User>) => {
    await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(user),
    });
  }

  const deleteUser = async (userId: string) => {
    await fetch(`/api/user/${userId}`, {
      method: 'DELETE',
    });
  }

  return {
    createUser,
    updateUser,
    deleteUser,
  }
}