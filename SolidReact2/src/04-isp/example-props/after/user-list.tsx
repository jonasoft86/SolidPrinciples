import { useGetUsers } from '../../example-hooks';
import { Thumbnail } from './thumbnail';

export function UsersList() {
  const { users, isLoadingUsers } = useGetUsers();

  return isLoadingUsers ?
    <>Loading Users</> :
    users.map((user) => (
    <div>
      <div>Name of the User:{user.name}</div>
      <Thumbnail imageUrl={user.profileThumbnail} />
    </div>
    ))
}
