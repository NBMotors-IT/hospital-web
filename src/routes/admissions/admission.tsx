import { Box, Button, Card, Divider, FormControl, FormLabel, Grid, Input, Textarea, Typography } from '@mui/joy';
import { useParams } from 'react-router-dom';

import DocumentsTable from '../../components/admission/DocumentsTable';
import PatientInfo from '../../components/admission/PatientInfo';
import PrescriptionsTable from '../../components/admission/PrescriptionsTable';
import PrevAdmissionsTable from '../../components/admission/PrevAdmissionsTable';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Admission } from '../../types/admission';
import { AdmissionStatus } from '../../types/admissionStatus';
import { Employee } from '../../types/employee';
import { Sex } from '../../types/sex';
import { BloodType } from '../../types/bloodType';

const linksMap = new Map<string, string>([
  ['/admissions', 'Admissions']
]);

const doctor: Employee = {
  id: '0',
  name: 'Doctor',
  surname: 'McDoctorface',
  office: 'A123',
  specialisation: 'Surgeon',
  role: 'Medical Director',
  department: 'Surgery'
};

const admission: Admission = { 
  id: '0',
  employee: doctor,
  patient: {
    id: '0',
    name: 'John',
    surname: 'Smith',
    sex: Sex.Male,
    dateOfBirth: new Date('1990-12-01'),
    address: '42 Street',
    postCode: '01-234',
    PESEL: '12345678900',
    bloodType: BloodType.ABRhPlus,
    weight: 70,
    height: 180,
    nationality: 'polish',
    phoneNumber: '123456789',
    allergies: 'None',
    emergencyContact: '987654321',
    email: 'john.smith@mail.example'
  },
  status: AdmissionStatus.Admitted,
  admissionDate: new Date(),
  diagnosis: 'Lorem ipsum...',
  historyOfIllness: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
};

function AdmissionPage() {
  const params = useParams();

  return (
    <>
      <Breadcrumb links={linksMap} current={`Admission #${params.admissionId}`} />

      <Grid container spacing={2}>
        {/* Main grid */}
        <Grid xs={12} md={10}>
          <Grid container columns={12} spacing={2}> {/* Need to set columns explicitly for some reason */}
            <Grid xs={12} md={6}>
              <Card variant='plain' sx={{ width: '100%', height: { md: 330 }, boxShadow: 'sm' }}>
                <PatientInfo patient={admission.patient} status={admission.status} />
              </Card>
            </Grid>

            <Grid xs={12} md={6}>
              <Card variant='plain' sx={{ minHeight: { xs: 0, md: 330 }, boxShadow: 'sm' }}>
                <FormControl>
                  <FormLabel>Diagnosis</FormLabel>
                  <Input defaultValue='Some diagnosis here...' value={admission.diagnosis} />
                </FormControl>
                <FormControl>
                  <FormLabel>History</FormLabel>
                  <Textarea minRows={5} maxRows={5} defaultValue='Some notes about the patient here...' value={admission.historyOfIllness} />
                </FormControl>
                <Button size='lg'>Save</Button>
              </Card>
            </Grid>

            {/* Next row */}

            <Grid xs={12} md={6}>
              <Grid container columns={12} spacing={2}>
                <Grid xs={12} md={12}>
                  <Card variant='plain' sx={{ minHeight: { xs: 0, md: 200 }, boxShadow: 'sm' }}>
                    <Typography level='title-md'>Previous admissions</Typography>

                    <PrevAdmissionsTable />
                  </Card>
                </Grid>

                <Grid xs={12} md={12}>
                  <Card variant='plain' sx={{ minHeight: { xs: 0, md: 200 }, boxShadow: 'sm' }}>
                    <Typography level='title-md'>Prescriptions</Typography>

                    <PrescriptionsTable />
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={12} md={6}>
              <Card variant='plain' sx={{ boxShadow: 'sm' }}>
                <Typography level='title-md'>Documents</Typography>

                <DocumentsTable />
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Sidebar grid */}
        <Grid xs={12} md={2}>
          <Card variant='plain' sx={{ minHeight: { xs: 0, md: '100%' }, boxShadow: 'sm', justifyContent: 'space-between' }}>
            <Box display='flex' flexDirection='column' gap={1}>
              <Button variant='soft'>Write a prescription</Button>
              <Button variant='soft'>Write a referral</Button>
              <Divider />
              <Button variant='soft'>Add documents</Button>
            </Box>
            <Box display='flex' flexDirection='column' gap={1}>
              <Divider />
              <Button color='success'>Discharge</Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default AdmissionPage;
