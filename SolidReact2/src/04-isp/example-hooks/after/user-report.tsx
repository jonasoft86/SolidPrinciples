import { useGetUsers } from "./use-get-users";

export function UserReport() {
  const { users, isLoadingUsers } = useGetUsers();

  return isLoadingUsers ?
    <>Loading Users</> :
    users.map((user) => (<div>{user.name}</div>))
}
