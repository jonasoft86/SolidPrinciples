import { useEffect, useState } from "react";
import { User } from "../../../types";

export function useUsers() {
  const [ users, setUsers ] = useState<User[]>([]);
  const [ isLoadingUsers, setIsLoadingUsers ] = useState<boolean>(true);

  // Load users from API
  useEffect(() => {
    async function loadUsers() {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUsers(data);
      setIsLoadingUsers(false);
    }

    loadUsers();
  }, []);

  const createUser = async (name: string) => {
    const user: Partial<User> = {
      name,
    };
    await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  }

  const deleteUser = async (userId: string) => {
    await fetch(`/api/user/${userId}`, {
      method: 'DELETE',
    });
  }

  return {
    users,
    createUser,
    deleteUser,
    isLoadingUsers,
  }
}