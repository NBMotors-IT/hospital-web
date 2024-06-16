import { Search } from '@mui/icons-material';
import { Box, Button, Input, Table } from '@mui/joy';
import { useState } from 'react';
import { usePrescriptionsForPatient } from '../../hooks/prescription';
import { Patient } from '../../types/patient';
import LoadingIndicator from '../common/LoadingIndicator';
import ErrorDisplay from '../common/ErrorDisplay';
import { Prescription } from '../../types/prescription';

interface Props {
  patient: Patient
}

function PrescriptionsTable({ patient }: Props) {
  const { data, error, isLoading } = usePrescriptionsForPatient(patient.id);
  const [filter, setFilter] = useState('');

  if (isLoading) {
    return (
      <LoadingIndicator />
    );
  }

  if (error) {
    return (
      <ErrorDisplay message='Could not load prescriptions' />
    );
  }

  const prescriptions = data as Prescription[];

  const filterFn = (p: Prescription) => {
    if (filter.length === 0) return true;

    return (new Date(p.prescriptionStartDate).toLocaleDateString().includes(filter)
      || new Date(p.prescriptionEndDate).toLocaleDateString().includes(filter)
      || p.id.includes(filter)
      || p.medicineName.toLowerCase().includes(filter.toLowerCase()));
  };

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
            {prescriptions
              .filter((element) => filterFn(element))
              .sort((a, b) => new Date(b.prescriptionStartDate!).getTime() - new Date(a.prescriptionStartDate!).getTime())
              .map((prescription) => (
              <tr key={prescription.id}>
                <td>{prescription.id}</td>
                <td>{new Date(prescription.prescriptionStartDate).toLocaleDateString()}</td>
                <td>{prescription.medicineName}</td>
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
