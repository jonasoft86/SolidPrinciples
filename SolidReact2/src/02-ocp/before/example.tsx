import { useState } from "react";
import { PersonCard } from "./person-card";
import { useGetPerson } from "./use-get-person";
import { Person } from "../../types";
import { ConfirmationModal } from "./confirmation-modal";

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
  const confirmDeleteModalTitle = `Confirm Person Deletion`;
  const confirmDeleteDialogText =  personToBeDeleted ? `Are you sure you want to delete ${personToBeDeleted.name}?` : '';

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
      title={confirmDeleteModalTitle}
      text={confirmDeleteDialogText}
      acceptButtonText='Delete'
      cancelButtonText='Cancel'
      onConfirm={onPersonDeleteConfirmed}
      onCancel={onPersonDeleteCancelled}
      />
  </>
}