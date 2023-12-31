import { Favorite, Hotel, HourglassBottom, QuestionMark } from '@mui/icons-material';
import { Card, Grid, Typography } from '@mui/joy';
import CounterCard from '../components/dashboard/CounterCard';

function DashboardPage() {
  return (
    <>
      <Typography color='neutral' level='h1' sx={{ mb: 2 }}>Hello, Dr Yournamehere</Typography>
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
          <CounterCard color='warning' value={3} label='waiting'>
            <HourglassBottom sx={{ fontSize: 32 }} />
          </CounterCard>
        </Grid>
        <Grid xs={12} md={3}>
          <CounterCard color='neutral' value={42} label='placeholder'>
            <QuestionMark sx={{ fontSize: 32 }} />
          </CounterCard>
        </Grid>

        <Grid xs={12} md={8}>
          <Card variant='plain' sx={{ minHeight: 450, boxShadow: 'sm' }}>
            Some Stuff
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card variant='plain' sx={{ minHeight: 450, boxShadow: 'sm' }}>
            Some Stuff
          </Card>
        </Grid>

        <Grid xs={12} md={12}>
          <Card variant='plain' sx={{ minHeight: 200, boxShadow: 'sm' }}>
            Some Stuff
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardPage;