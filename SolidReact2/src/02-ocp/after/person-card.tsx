import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Person } from '../../types';

type PersonCardProps = {
  person: Person;
  onDeleteClicked: (person: Person) => void;
}

export function PersonCard({
  person,
  onDeleteClicked,
}: PersonCardProps) {

  function handleDelete() {
    onDeleteClicked(person);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/345/140"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {person.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Company: {person.company.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Website: {person.website}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small" onClick={handleDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
}