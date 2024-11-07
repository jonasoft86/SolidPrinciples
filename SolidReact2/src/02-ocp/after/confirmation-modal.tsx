import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PropsWithChildren, ReactNode } from 'react';

type ConfirmationModalProps = {
  isOpen: boolean;
  title: ReactNode;
  acceptButtonText: string;
  cancelButtonText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmationModal({
  isOpen,
  title,
  acceptButtonText,
  cancelButtonText,
  children,
  onConfirm,
  onCancel,
}: PropsWithChildren<ConfirmationModalProps>) {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleClose = () => {
    onCancel();
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
    >
      <DialogTitle>
        {title}
      </DialogTitle>
      {children}
      <DialogActions>
        <Button onClick={handleConfirm}>{cancelButtonText}</Button>
        <Button onClick={handleClose} autoFocus>
          {acceptButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export function ConfirmationModalContent({
  children,
}: PropsWithChildren) {
  return (
    <DialogContent>
      <DialogContentText>
        {children}
      </DialogContentText>
    </DialogContent>
  )
}