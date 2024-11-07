import { useEffect, useState } from "react";
import { User } from "../../../types";

export function useGetUsers() {
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

  return {
    users,
    isLoadingUsers,
  }
}