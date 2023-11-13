import { Box, Button, Card, Divider, FormControl, FormLabel, Grid, Input, Sheet, Table, Textarea, Typography } from '@mui/joy';
import { useParams } from 'react-router-dom';
import DocumentsTable from '../components/admission/DocumentsTable';
import PatientInfo from '../components/admission/PatientInfo';

interface Admission {
  id: string,
  date: string,
  doctor: string
}

const previousAdmissions: Admission[] = [
  { id: '6457', date: '2023-02-12', doctor: 'John Smith' },
  { id: '3256', date: '2023-01-01', doctor: 'John Smith' },
  { id: '1111', date: '2022-12-31', doctor: 'John Smith' },
  { id: '0101', date: '2021-04-11', doctor: 'John Smith' },
  { id: '0000', date: '2020-09-22', doctor: 'John Smith' }
];

function AdmissionPage() {
  const params = useParams();

  return (
    <>
      <Typography color='neutral' level='h1' sx={{ mb: 3 }}>Admission #{params.admissionId}</Typography>
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
                    <Sheet sx={{ height: 180, overflow: 'auto' }}>
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
                          {previousAdmissions.map((admission) => (
                            <tr key={admission.id}>
                              <td>{admission.id}</td>
                              <td>{admission.date}</td>
                              <td>{admission.doctor}</td>
                              <td><Button variant='plain'>View</Button></td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Sheet>
                  </Card>
                </Grid>

                <Grid xs={12} md={12}>
                  <Card variant='plain' sx={{ minHeight: { xs: 0, md: 200 }, boxShadow: 'sm' }}>
                    <Typography level='title-md'>Prescriptions</Typography>
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
