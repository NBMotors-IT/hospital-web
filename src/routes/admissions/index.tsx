import { Box, Card } from '@mui/joy';

import AdmissionPreview from '../../components/admission/AdmissionPreview';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Admission } from '../../types/admission';
import { useAdmissions } from '../../hooks/admission';
import AdmissionPreviewSkeleton from '../../components/admission/AdmissionPreviewSkeleton';
import ErrorDisplay from '../../components/common/ErrorDisplay';

function AdmissionsIndexPage() {
  const { data, error, isLoading } = useAdmissions();

  if (isLoading) {
    return (
      <>
        <Breadcrumb current='Admissions' />

        <Card>
          <Box display='flex' flexDirection='column' gap={1}>
            <AdmissionPreviewSkeleton count={10} />
          </Box>
        </Card>
      </>
    );
  }

  if (error) {
    return (
      <ErrorDisplay message='Could not load admissions' />
    );
  }

  const admissions = data as Admission[];

  return (
    <>
      <Breadcrumb current='Admissions' />

      <Card>
        <Box display='flex' flexDirection='column' gap={1}>
          {admissions.sort((a, b) => new Date(b.admissionDate!).getTime() - new Date(a.admissionDate!).getTime()).map((admission) => (
            <AdmissionPreview key={admission.id} admission={admission} />
          ))}
        </Box>
      </Card>
    </>
  );
}

export default AdmissionsIndexPage;
