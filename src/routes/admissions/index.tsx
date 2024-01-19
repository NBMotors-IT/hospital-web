import { Box, Card } from '@mui/joy';

import AdmissionPreview from '../../components/admission/AdmissionPreview';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Admission } from '../../types/admission';
import { AdmissionStatus } from '../../types/admissionStatus';
import { Employee } from '../../types/employee';
import { Sex } from '../../types/sex';

const doctor: Employee = {
  id: '0',
  name: 'Doctor',
  surname: 'McDoctorface',
  office: 'A123',
  specialisation: 'Surgeon',
  role: 'Medical Director',
  department: 'Surgery'
};

const admissions: Admission[] = [
  { id: '0', employee: doctor, patient: { id: '0', name: 'John', surname: 'Smith', sex: Sex.Male }, status: AdmissionStatus.Admitted, admissionDate: new Date() },
  { id: '1', employee: doctor, patient: { id: '1', name: 'Jane', surname: 'Doe', sex: Sex.Female }, status: AdmissionStatus.Waiting, admissionDate: new Date(Date.now() - 1 * (60 * 60 * 1000)) },
  { id: '2', employee: doctor, patient: { id: '2', name: 'James', surname: 'Smith', sex: Sex.Male }, status: AdmissionStatus.Discharged, admissionDate: new Date(Date.now() - 2 * (60 * 60 * 1000)) }
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
