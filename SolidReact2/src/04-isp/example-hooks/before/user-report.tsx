import { useUsers } from "./use-users";

export function UserReport() {
  const { users, isLoadingUsers } = useUsers();

  return isLoadingUsers ?
    <>Loading Users</> :
    users.map((user) => (<div>{user.name}</div>))
}
