import { useState } from "react";
import { useManageUsers } from "./use-manage-users";

export function UserCreationForm() {
  const { createUser } = useManageUsers();

  const [name, setName] = useState<string>();

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!name) {
      alert('User name is not valid');
      return;
    }
  
    createUser(name);
  }

  return <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" value={name} onChange={handleNameChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
}