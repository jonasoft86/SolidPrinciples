import { useEffect, useState } from "react";
import { Person } from "../../types";

export function usePersons() {
  const [ persons, setPersons ] = useState<Person[]>([]);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  // Load persons from API
  useEffect(() => {
    async function loadPersons() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setPersons(data);
      setIsLoading(false);
    }

    loadPersons();
  }, []);

  return {
    persons,
    isLoading,
  }
}