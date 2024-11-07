import { useEffect, useState } from "react";
import { IUserRepository } from "../interface";
import { useUserRepository } from "../providers";
import { User } from "../../../types";

export const UserService = {
  useGetUsers,
  useManageUsers,
}

function useGetUsers() {
  const { getAll }: IUserRepository = useUserRepository();
  const [ users, setUsers ] = useState<User[]>([]);
  const [ isLoadingUsers, setIsLoadingUsers ] = useState<boolean>(true);

  // Load users from API
  useEffect(() => {
    async function loadUsers() {
      const data = await getAll();
      setUsers(data);
      setIsLoadingUsers(false);
    }

    loadUsers();
  }, [getAll]);

  return {
    users,
    isLoadingUsers,
  }
}

function useManageUsers() {
  const { create, remove }: IUserRepository = useUserRepository();

  const createUser = async (name: string) => {
    const user: Partial<User> = {
      name,
    };
    await create(user);
  }

  const deleteUser = async (userId: string) => {
    await remove(userId);
  }

  return {
    createUser,
    deleteUser,
  }
}
