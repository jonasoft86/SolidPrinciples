import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { usePersons } from "./use-persons";
import { ActionButton } from "./action-button";

export function PersonsList() {
  const { persons, isLoading } = usePersons();

  return <>
    {
      isLoading ?
        <CircularProgress /> :
        (<TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {persons.map((person) => (
                <TableRow
                  key={person.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {person.name}
                  </TableCell>
                  <TableCell>
                    {person.username}
                  </TableCell>
                  <TableCell>
                    {person.email}
                  </TableCell>
                  <TableCell>
                    {person.company.name}
                  </TableCell>
                  <TableCell>
                    {person.address.street}, {person.address.city}
                  </TableCell>
                  <TableCell>
                    {person.phone}
                  </TableCell>
                  <TableCell>
                    {person.website}
                  </TableCell>
                  <TableCell>
                    <ActionButton text='Edit' />
                  </TableCell>
                  <TableCell>
                    <ActionButton isDelete={true} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>)
    }
  </>
}
