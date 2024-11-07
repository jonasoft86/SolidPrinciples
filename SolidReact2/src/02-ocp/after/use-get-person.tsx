import { useEffect, useState } from "react";
import { Person } from "../../types";

export function useGetPerson() {
  const [ person, setPerson ] = useState<Person>();

  // Load users from API
  useEffect(() => {
    async function loadUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const persons = await response.json();
      setPerson(persons[0]);
    }

    loadUsers();
  }, []);

  return {
    person,
  }
}