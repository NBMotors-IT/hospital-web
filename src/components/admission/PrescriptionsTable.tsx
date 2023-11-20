import { Search } from '@mui/icons-material';
import { Button, Input, Sheet, Table } from '@mui/joy';
import { useState } from 'react';

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
  const [filter, setFilter] = useState('');

  const filterFn = (p: Prescription) => {
    // TODO: Rewrite when/if we change date type?
    if (filter.length == 0) return true;

    return (p.date.includes(filter)
      || p.id.includes(filter)
      || p.medicine.toLowerCase().includes(filter.toLowerCase()));
  }

  return (
    <>
      <Input startDecorator={<Search />} value={filter} onChange={e => setFilter(e.target.value)} />

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
            {previousPrescriptions.filter(filterFn).map((prescription) => (
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
