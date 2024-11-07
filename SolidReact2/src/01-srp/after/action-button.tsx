import { Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

type ActionButtonProps = {
  isDelete?: boolean;
  text?: string;
};

export function ActionButton({
  isDelete,
  text,
}: ActionButtonProps) {
  if (isDelete) {
    return (
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" color='error' />
      </IconButton>
    )
  }

  return <Button variant="contained">{text}</Button>
}
