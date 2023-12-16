import { Box, Button, Table } from '@mui/joy';

interface Admission {
  id: string,
  date: Date,
  doctor: string
}

const previousAdmissions: Admission[] = [
  { id: '6457', date: new Date('2023-02-12T12:00'), doctor: 'John Smith' },
  { id: '3256', date: new Date('2023-01-01T12:00'), doctor: 'John Smith' },
  { id: '1111', date: new Date('2022-12-31T12:00'), doctor: 'John Smith' },
  { id: '0101', date: new Date('2021-04-11T12:00'), doctor: 'John Smith' },
  { id: '0000', date: new Date('2020-09-22T12:00'), doctor: 'John Smith' }
];

function PrevAdmissionsTable() {
  return (
    <>
      <Box overflow='auto' height='180px'>
        <Table stickyHeader size='sm' sx={{ '& tr > *:last-child': { textAlign: 'right' } }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Doctor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {previousAdmissions.map((admission) => (
              <tr key={admission.id}>
                <td>{admission.id}</td>
                <td>{admission.date.toLocaleDateString()}</td>
                <td>{admission.doctor}</td>
                <td><Button variant='plain'>View</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </>
  );
}

export default PrevAdmissionsTable;
