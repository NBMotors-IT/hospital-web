import { Card, Grid, Typography } from '@mui/joy';

function DashboardPage() {
  return (
    <>
      <Typography color='neutral' level='h1' sx={{ mb: 2 }}>Hello, Dr Yournamehere</Typography>
      <Grid container spacing={2}>
        <Grid xs={12} md={3}>
          <Card variant='solid' color='success' sx={{ minHeight: 150, boxShadow: 'sm' }}>
            Some Stuff
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <Card variant='solid' color='primary' sx={{ minHeight: 150, boxShadow: 'sm' }}>
            Some Stuff
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <Card variant='solid' color='warning' sx={{ minHeight: 150, boxShadow: 'sm' }}>
            Some Stuff
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <Card variant='solid' color='neutral' sx={{ minHeight: 150, boxShadow: 'sm' }}>
            Some Stuff
          </Card>
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