import { Search } from '@mui/icons-material';
import { Box, Button, Input, Table } from '@mui/joy';
import { useState } from 'react';

interface Prescription {
  id: string,
  date: Date,
  medicine: string
}

const previousPrescriptions: Prescription[] = [
  { id: 'xddd', date: new Date('2023-02-12T12:00'), medicine: 'Xanax' },
  { id: 'xdde', date: new Date('2023-01-01T12:00'), medicine: 'Lorazepam' },
  { id: 'xdee', date: new Date('2022-12-31T12:00'), medicine: 'Concerta' },
  { id: 'xdxd', date: new Date('2021-04-11T12:00'), medicine: 'Citalopram' },
  { id: 'xdxx', date: new Date('2020-09-22T12:00'), medicine: 'Zoloft' },
  { id: 'xddx', date: new Date('2020-09-22T12:00'), medicine: 'Celexa' },
  { id: 'xxxd', date: new Date('2020-09-22T12:00'), medicine: 'Prozac' },
  { id: 'dddx', date: new Date('2020-09-22T12:00'), medicine: 'Wellbutrin' }
];

function PrescriptionsTable() {
  const [filter, setFilter] = useState('');

  const filterFn = (p: Prescription) => {
    // TODO: Rewrite when/if we change date type?
    if (filter.length == 0) return true;

    return (p.date.toLocaleDateString().includes(filter)
      || p.id.includes(filter)
      || p.medicine.toLowerCase().includes(filter.toLowerCase()));
  }

  return (
    <>
      <Input startDecorator={<Search />} value={filter} onChange={e => setFilter(e.target.value)} />

      <Box overflow='auto' height='180px'>
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
                <td>{prescription.date.toLocaleDateString()}</td>
                <td>{prescription.medicine}</td>
                <td><Button variant='plain'>View</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </>
  );
}

export default PrescriptionsTable;
