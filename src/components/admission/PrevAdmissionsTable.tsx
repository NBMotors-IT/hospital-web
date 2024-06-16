import { Box, Button, Table } from '@mui/joy';
import { Link } from 'react-router-dom';
import { Admission } from '../../types/admission';
import { useAdmissionsForPatient } from '../../hooks/admission';
import LoadingIndicator from '../common/LoadingIndicator';
import ErrorDisplay from '../common/ErrorDisplay';

interface Props {
  currentAdmission: Admission
}

function PrevAdmissionsTable({ currentAdmission }: Props) {
  const { data, error, isLoading } = useAdmissionsForPatient(currentAdmission.patient.id);

  if (isLoading) {
    return (
      <LoadingIndicator />
    );
  }

  if (error) {
    return (
      <ErrorDisplay message='Could not load previous admissions' />
    );
  }

  const admissions = (data as Admission[]).filter((a) => a.id !== currentAdmission.id);

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
            {admissions.sort((a, b) => new Date(b.admissionDate!).getTime() - new Date(a.admissionDate!).getTime()).map((admission) => (
              <tr key={admission.id}>
                <td>{admission.id}</td>
                <td>{new Date(admission.admissionDate).toLocaleDateString()}</td>
                <td>{admission.employee.name} {admission.employee.surname}</td>
                <td><Button component={Link} to={`/admissions/${admission.id}`} variant='plain'>View</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </>
  );
}

export default PrevAdmissionsTable;
