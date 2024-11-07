import React, { useState } from "react";
import { User } from "../../../types";

type UserFormProps = {
  user?: User;
  onSubmit: (user: Partial<User>) => Promise<void>;
}

export function UserForm({
  user,
  onSubmit,
}: UserFormProps) {
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

    const updatedUser: Partial<User> = {
      ...user,
      name: name
    };

    onSubmit(updatedUser);
  }

  return <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" value={name} onChange={handleNameChange} />
    </label>
    <button type="submit">Create</button>
  </form>
}
