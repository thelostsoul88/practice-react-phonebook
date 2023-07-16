import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';

import { selectFilter } from 'redux/contacts/selectors';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Stack,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import { ThirdButton } from 'components/SecondaryButton';

const btnDelete = {
  outline: 'none',
  fontSize: 16,
  px: 2,
  '&:hover': {
    backgroundColor: 'accent.main',
    color: 'primary.main',
    border: '1px solid transparent',
  },
};

const tableCell = {
  fontSize: 20,
  fontWeight: 600,
  color: 'primary.main',
};
const tableCellRow = {
  fontSize: 16,
  color: 'primary.main',
};

export const ContactsList = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ minWidth: 650 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="caption table">
            <TableHead>
              <TableRow sx={tableCell}>
                <TableCell align="center" sx={tableCell}>
                  NAME
                </TableCell>
                <TableCell align="center" sx={tableCell}>
                  NUMBER
                </TableCell>
                <TableCell align="center" sx={tableCell}>
                  OPTIONS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleContacts.map(({ name, number, _id }) => (
                <TableRow key={_id}>
                  <TableCell align="left" sx={tableCellRow}>
                    {name}
                  </TableCell>
                  <TableCell align="center" sx={tableCellRow}>
                    {number}
                  </TableCell>
                  <TableCell align="center" sx={tableCellRow}>
                    <Stack direction="row" spacing={2}>
                      <Button
                        startIcon={<DeleteIcon />}
                        variant="outlined"
                        size="sm"
                        color="error"
                        sx={btnDelete}
                        disabled={isLoading}
                        onClick={() => deleteContact(_id)}
                      >
                        Delete
                      </Button>
                      <Link to={`${_id}`} state={{ from: { name, number, _id } }}>
                        <ThirdButton>Update</ThirdButton>
                      </Link>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
