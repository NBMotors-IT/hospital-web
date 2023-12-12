import { Box, Button, Card, Table, Typography } from '@mui/joy';
import PatientAvatar from '../components/admission/PatientAvatar';
import { AdmissionStatus } from '../types/admissionStatus';
import { Link } from 'react-router-dom';

interface Admission {
  id: string,
  name: string,
  status: AdmissionStatus,
  datetime: Date,
}

const admissions: Admission[] = [
  { id: '0', name: 'John Doe', status: 'admitted', datetime: new Date('2023-02-12T12:00') },
  { id: '1', name: 'Jane Doe', status: 'waiting', datetime: new Date('2023-02-12T13:12') },
  { id: '2', name: 'James Smith', status: 'discharged', datetime: new Date('2023-02-12T15:22') }
]

function MyAdmissionsPage() {
  return (
    <>
      <Typography color='neutral' level='h1' sx={{ mb: 2 }}>My Admissions</Typography>
      <Card>
        <Table sx={{ 
          '& tr > *:last-child': { textAlign: 'right' },
          '& tr > *:nth-child(2)': { width: '10%' },
          '& tr > *': { py: 2 }
        }}>
          <tbody>
            {admissions.map((admission) => (
              <tr key={admission.id}>
                <td>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1, md: 4 },
                    flexDirection: { xs: 'column', md: 'row' }
                  }}>
                    <PatientAvatar status={admission.status} size={48} />
                    <Typography fontWeight='600' textAlign='center'>{admission.name}</Typography>
                  </Box>
                </td>
                <td>{admission.datetime.toLocaleTimeString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit' })}</td>
                <td><Button component={Link} to={`/admission/${admission.id}`} variant='plain'>View</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
}

export default MyAdmissionsPage;
