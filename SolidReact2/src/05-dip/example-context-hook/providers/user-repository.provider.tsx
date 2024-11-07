import { createContext, useContext } from "react";
import { IUserRepository } from "../interface";
import { UserAxiosRepository } from "../repository";

export const UserRepositoryContext = createContext<IUserRepository | null>(null);

type UserRepositoryProviderProps = {
  children: React.ReactNode;
};

export function UserRepositoryProvider({
  children,
}: UserRepositoryProviderProps) {

  const contextValue: IUserRepository = new UserAxiosRepository();

  return (
    <UserRepositoryContext.Provider value={contextValue}>
      {children}
    </UserRepositoryContext.Provider>
  );
}

export function useUserRepository() {
  const context = useContext(UserRepositoryContext);
  if (!context) {
    throw new Error(`useDependencies must be used within UserRepositoryProvider`);
  }
  return context;
}
