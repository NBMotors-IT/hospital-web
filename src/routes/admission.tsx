import { Box, Button, Card, Divider, FormControl, FormLabel, Grid, Input, Textarea, Typography } from '@mui/joy';
import { useParams } from 'react-router-dom';
import DocumentsTable from '../components/admission/DocumentsTable';
import PatientInfo from '../components/admission/PatientInfo';
import PrescriptionsTable from '../components/admission/PrescriptionsTable';
import PrevAdmissionsTable from '../components/admission/PrevAdmissionsTable';
import Breadcrumb from '../components/common/Breadcrumb';

const linksMap = new Map<string, string>([
  ['/myadmissions', 'Admissions']
]);

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
              <Card variant='plain' sx={{ width: '100%', height: { md: 330 }, flexDirection: { xs: 'column', md: 'row' }, boxShadow: 'sm' }}>
                <PatientInfo /> {/* TODO: Pass patient info props */}
              </Card>
            </Grid>

            <Grid xs={12} md={6}>
              <Card variant='plain' sx={{ minHeight: { xs: 0, md: 330 }, boxShadow: 'sm' }}>
                <FormControl>
                  <FormLabel>Diagnosis</FormLabel>
                  <Input defaultValue='Some diagnosis here...' />
                </FormControl>
                <FormControl>
                  <FormLabel>History</FormLabel>
                  <Textarea minRows={5} maxRows={5} defaultValue='Some notes about the patient here...' />
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
