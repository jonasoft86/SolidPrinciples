import { Typography } from '@mui/material';
import { PersonsList } from './after';

export function SingleResponsibilityPrinciple() {
  return <>
    <Typography variant="h2" component="h1" gutterBottom>
      Single Responsibility Principle
    </Typography>
    <PersonsList />
  </>
}