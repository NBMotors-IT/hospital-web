import { Box, Button, Card, Divider, FormControl, FormLabel, Grid, Input, Textarea, Typography } from '@mui/joy';
import { useParams } from 'react-router-dom';

import DocumentsTable from '../../components/admission/DocumentsTable';
import PatientInfo from '../../components/admission/PatientInfo';
import PrescriptionsTable from '../../components/admission/PrescriptionsTable';
import PrevAdmissionsTable from '../../components/admission/PrevAdmissionsTable';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Admission } from '../../types/admission';
import { useAdmission } from '../../hooks/admission';
import { AdmissionStatus } from '../../types/admissionStatus';

const linksMap = new Map<string, string>([
  ['/admissions', 'Admissions']
]);

function AdmissionPage() {
  const params = useParams();
  const { data, error, isLoading } = useAdmission(params.admissionId as string);

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

  const admission = data as Admission;

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
                <Button size='lg' disabled={admission.status == AdmissionStatus.Discharged}>Save</Button>
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
              <Button variant='soft' disabled={admission.status == AdmissionStatus.Discharged}>Write a prescription</Button>
              <Button variant='soft' disabled={admission.status == AdmissionStatus.Discharged}>Write a referral</Button>
              <Divider />
              <Button variant='soft' disabled={admission.status == AdmissionStatus.Discharged}>Add documents</Button>
            </Box>
            <Box display='flex' flexDirection='column' gap={1}>
              <Divider />
              <Button color='success' disabled={admission.status == AdmissionStatus.Discharged}>Discharge</Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default AdmissionPage;
