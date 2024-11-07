import { useState } from "react";
import { PersonCard } from "./person-card";
import { useGetPerson } from "./use-get-person";
import { Person } from "../../types";
import { ConfirmationModal, ConfirmationModalContent } from "./confirmation-modal";

export function Example() {
  /**
   * Local State
   */
  const [personToBeDeleted, setPersonToBeDeleted] = useState<Person | undefined>();

  /**
   * Hooks
   */
  const { person } = useGetPerson();

  /**
   * Derived State
   */
  const isConfirmDeleteModalOpen = personToBeDeleted !== undefined;

  /**
   * Callbacks
   */

  const onPersonDeleteClicked = (person: Person) => {
    setPersonToBeDeleted(person);
  };

  const onPersonDeleteConfirmed = () => {
    // Here we would process person deletion.
    setPersonToBeDeleted(undefined);
  };

  const onPersonDeleteCancelled = () => {
    setPersonToBeDeleted(undefined);
  }

  return <>
    { person ? <PersonCard person={person} onDeleteClicked={onPersonDeleteClicked} />  : <></>}
    <ConfirmationModal
      isOpen={isConfirmDeleteModalOpen}
      title={<div>Confirm Person <b>Deletion</b></div>}
      acceptButtonText='Delete'
      cancelButtonText='Cancel'
      onConfirm={onPersonDeleteConfirmed}
      onCancel={onPersonDeleteCancelled}
      >
        <ConfirmationModalContent>
          Are you sure you want to delete <b>{personToBeDeleted?.name}</b>?
        </ConfirmationModalContent>
      </ConfirmationModal>
  </>
}