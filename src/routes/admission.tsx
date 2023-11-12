// TODO: Move most cards to their own components
import { Avatar, Badge, Box, Button, Card, Chip, Divider, FormControl, FormLabel, Grid, Input, Sheet, Table, Textarea, Typography } from '@mui/joy';
import { useParams } from 'react-router-dom';
import DocumentsTable from '../components/DocumentsTable';
import { Bloodtype, Favorite, Height, Hotel, HourglassBottom, Scale } from '@mui/icons-material';

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
            <Grid xs={12} md={6} lg={6} sm={6} xl={6}>
              <Card variant='plain' sx={{ width: '100%', minHeight: { xs: 0, md: 300 }, flexDirection: { xs: 'column', md: 'row' }, boxShadow: 'sm' }}>
                <Box display='flex' flexDirection='column' alignItems='center' my={3} mx={6}>
                  <Badge
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeInset='15%'
                    color='primary'
                    badgeContent={<Hotel />} /* HourglassBottom + warning = waiting, Favorite + success = discharged */
                  >
                    <Avatar sx={{ width: 80, height: 80 }} />
                  </Badge>
                  <Typography level='title-lg' my={2}>John Smith</Typography>

                  <Box display='flex' flexDirection='column' alignItems='center' gap={1}>
                    <Chip variant='solid' color='primary' size='lg' startDecorator={<Hotel />}>Admitted</Chip>
                    <Box display='flex' gap={1}>
                      <Chip variant='soft' color='danger' startDecorator={<Bloodtype />}>B-</Chip>
                      <Chip variant='soft' startDecorator={<Scale />}>82 kg</Chip>
                      <Chip variant='soft' startDecorator={<Height />}>180 cm</Chip>
                    </Box>
                  </Box>
                </Box>

                <Divider orientation='vertical' sx={{ display: { xs: 'none', md: 'block' }}} />
                <Divider orientation='horizontal' sx={{ display: { xs: 'block', md: 'none' }}} />

                <Box display='flex' flexDirection='column' flexGrow={1} gap={2}>
                  <FormControl>
                    <FormLabel>Sex</FormLabel>
                    <Input readOnly variant='soft' value='Male' />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Street</FormLabel>
                    <Input readOnly variant='soft' value='4242 Some St' />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input readOnly variant='soft' value='Brooklyn, NY, 11209' />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Birthday</FormLabel>
                    <Input readOnly variant='soft' value='1990-04-20' />
                  </FormControl>
                </Box>
              </Card>
            </Grid>

            <Grid xs={12} md={6}>
              <Card variant='plain' sx={{ minHeight: { xs: 0, md: 330 }, boxShadow: 'sm' }}>
                <Typography level='title-md'>History</Typography>
                <Textarea minRows={8} maxRows={8} defaultValue='Some notes about the patient here...' />
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