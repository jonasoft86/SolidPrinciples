import React, { useState } from "react";
import { useManageUsers } from "./use-manage-users";
import { User } from "../../../types";

type UserFormProps = {
  user?: User;
}

export function UserForm({
  user,
}: UserFormProps) {
  const { createUser, updateUser } = useManageUsers();

  const [name, setName] = useState<string>(user ? user.name : '');

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!name) {
      alert('User name is not valid');
      return;
    }

    if (user) {
      const updatedUser = {
        ...user,
        name,
      };
      updateUser(updatedUser);
    } else {
      createUser(name);
    }
  
  }

  return <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" value={name} onChange={handleNameChange} />
    </label>
    <button type="submit">Create</button>
  </form>
}
