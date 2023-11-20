import { Button, Sheet, Table } from '@mui/joy';

interface Admission {
  id: string,
  date: string,
  doctor: string
}

const previousAdmissions: Admission[] = [
  { id: '6457', date: '2023-02-12', doctor: 'John Smith' },
  { id: '3256', date: '2023-01-01', doctor: 'John Smith' },
  { id: '1111', date: '2022-12-31', doctor: 'John Smith' },
  { id: '0101', date: '2021-04-11', doctor: 'John Smith' },
  { id: '0000', date: '2020-09-22', doctor: 'John Smith' }
];

function PrevAdmissionsTable() {
  return (
    <>
      <Sheet sx={{ height: 180, overflow: 'auto' }}>
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
                <td>{admission.date}</td>
                <td>{admission.doctor}</td>
                <td><Button variant='plain'>View</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </>
  );
}

export default PrevAdmissionsTable;
