import { User } from "../../../types";
import { useManageUsers } from "./use-manage-users";
import { UserForm } from "./user-form";

export function UserCreate() {
  const { createUser } = useManageUsers();

  async function handleSubmit(user: Partial<User>) {
    if (!user.name) {
      return;
    }

    await createUser(user.name);
  }

  return <UserForm onSubmit={handleSubmit} />
}
