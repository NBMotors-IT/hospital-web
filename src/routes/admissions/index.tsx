import { Box, Card } from '@mui/joy';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Admission } from '../../types/admission';
import AdmissionPreview from '../../components/admission/AdmissionPreview';

const admissions: Admission[] = [
  { id: '0', name: 'John Doe', status: 'admitted', datetime: new Date() },
  { id: '1', name: 'Jane Doe', status: 'waiting', datetime: new Date(Date.now() - 1 * (60 * 60 * 1000)) },
  { id: '2', name: 'James Smith', status: 'discharged', datetime: new Date(Date.now() - 2 * (60 * 60 * 1000)) }
];

function AdmissionsIndexPage() {
  return (
    <>
      <Breadcrumb current='Admissions' />

      <Card>
        <Box display='flex' flexDirection='column' gap={1}>
          {admissions.map((admission) => (
            <AdmissionPreview key={admission.id} admission={admission} />
          ))}
        </Box>
      </Card>
    </>
  );
}

export default AdmissionsIndexPage;
