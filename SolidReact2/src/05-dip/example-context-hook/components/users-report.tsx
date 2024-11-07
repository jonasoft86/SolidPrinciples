import { UserService } from "../service";

export function UsersReport() {
  const { users, isLoadingUsers } = UserService.useGetUsers();

  return isLoadingUsers ?
    <>Loading Users</> :
    users.map((user) => (<div>{user.name}</div>))
}
