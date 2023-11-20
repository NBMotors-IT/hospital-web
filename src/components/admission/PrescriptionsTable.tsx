import { Search } from '@mui/icons-material';
import { Button, Input, Sheet, Table } from '@mui/joy';

interface Prescription {
  id: string,
  date: string,
  medicine: string
}

const previousPrescriptions: Prescription[] = [
  { id: 'xddd', date: '2023-02-12', medicine: 'Xanax' },
  { id: 'xddd', date: '2023-01-01', medicine: 'Lorazepam' },
  { id: 'xddd', date: '2022-12-31', medicine: 'Concerta' },
  { id: 'xddd', date: '2021-04-11', medicine: 'Citalopram' },
  { id: 'xddd', date: '2020-09-22', medicine: 'Zoloft' },
  { id: 'xddd', date: '2020-09-22', medicine: 'Celexa' },
  { id: 'xddd', date: '2020-09-22', medicine: 'Prozac' },
  { id: 'xddd', date: '2020-09-22', medicine: 'Wellbutrin' }
];

function PrescriptionsTable() {
  return (
    <>
      <Input startDecorator={<Search />} />

      <Sheet sx={{ height: 180, overflow: 'auto' }}>
        <Table stickyHeader size='sm' sx={{ '& tr > *:last-child': { textAlign: 'right' } }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Medicine</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {previousPrescriptions.map((prescription) => (
              <tr key={prescription.id}>
                <td>{prescription.id}</td>
                <td>{prescription.date}</td>
                <td>{prescription.medicine}</td>
                <td><Button variant='plain'>View</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </>
  );
}

export default PrescriptionsTable;
