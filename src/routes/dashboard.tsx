import { Favorite, Hotel, HourglassBottom } from '@mui/icons-material';
import { Card, Grid, Typography } from '@mui/joy';

import AdmissionDischargeChart from '../components/dashboard/AdmissionDischargeChart';
import BedOccupancyChart from '../components/dashboard/BedOccupancyChart';
import CounterCard from '../components/dashboard/CounterCard';

function DashboardPage() {
  return (
    <>
      <Typography color='neutral' level='h2' sx={{ mb: 2 }}>Hello, Dr Yourname Here</Typography>
      <Grid container spacing={2}>
        <Grid xs={12} md={3}>
          <CounterCard color='success' value={8} label='discharged'>
            <Favorite sx={{ fontSize: 32 }} />
          </CounterCard>
        </Grid>
        <Grid xs={12} md={3}>
          <CounterCard color='primary' value={12} label='admitted'>
            <Hotel sx={{ fontSize: 32 }} />
          </CounterCard>
        </Grid>
        <Grid xs={12} md={3}>
          <CounterCard color='warning' value={3} label='waiting (total)'>
            <HourglassBottom sx={{ fontSize: 32 }} />
          </CounterCard>
        </Grid>
        <Grid xs={12} md={3}>
          <CounterCard color='warning' value={1} label='waiting (your admissions)'>
            <HourglassBottom sx={{ fontSize: 32 }} />
          </CounterCard>
        </Grid>

        <Grid xs={12} md={9}>
          <Card variant='plain' sx={{ height: { md: 460 }, maxHeight: { xs: 300, md: 460 }, pb: 6, boxShadow: 'sm' }}>
            <Typography level='title-md'>Admissions statistics</Typography>

            <AdmissionDischargeChart />
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <Card variant='plain' sx={{ height: { md: 460 }, maxHeight: { xs: 300, md: 460 }, pb: 12, boxShadow: 'sm' }}>
            <Typography level='title-md'>Bed occupancy</Typography>

            <BedOccupancyChart />

            <Typography level='title-md' textAlign='center'>Total beds: 55</Typography>
          </Card>
        </Grid>

        {/* <Grid xs={12} md={12}>
          <Card variant='plain' sx={{ minHeight: 200, boxShadow: 'sm' }}>
            Some Stuff
          </Card>
        </Grid> */}
      </Grid>
    </>
  );
}

export default DashboardPage;
