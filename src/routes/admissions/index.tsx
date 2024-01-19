import { Box, Card } from '@mui/joy';

import AdmissionPreview from '../../components/admission/AdmissionPreview';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Admission } from '../../types/admission';
import { useAdmissions } from '../../hooks/admission';

function AdmissionsIndexPage() {
  const { data, error, isLoading } = useAdmissions();

  if (isLoading) {
    return (
      <>
        TODO: Loading animation here...
      </>
    );
  }

  if (error) {
    return (
      <>
        TODO: Error message here...
      </>
    );
  }

  const admissions = data as Admission[];

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
