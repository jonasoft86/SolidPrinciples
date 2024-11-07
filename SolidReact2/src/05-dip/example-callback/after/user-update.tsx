import { User } from "../../../types";
import { useManageUsers } from "./use-manage-users";
import { UserForm } from "./user-form";

export function UserUpdate() {
  const { updateUser } = useManageUsers();

  async function handleSubmit(user: Partial<User>) {
    if (!user.name) {
      return;
    }

    await updateUser(user);
  }

  return <UserForm onSubmit={handleSubmit} />
}
