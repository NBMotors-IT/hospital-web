import { Lock, Troubleshoot } from '@mui/icons-material';
import { Grid } from '@mui/joy';
import Breadcrumb from '../../components/common/Breadcrumb';
import LabModuleCard from '../../components/lab/LabModuleCard';

function LabPage() {
  return (
    <>
      <Breadcrumb current='Lab' />

      <Grid container spacing={2} sx={{ mx: { md: 0, lg: 32 } }}>
        <Grid xs={12} md={4}>
          <LabModuleCard to='/lab/diagnostics' text='AI Diagnostics'>
            <Troubleshoot sx={{ fontSize: '100px' }} />
          </LabModuleCard>
        </Grid>

        {Array.from({ length: 5 }).map((_, i) => (
          <Grid xs={12} md={4} key={i}>
            <LabModuleCard to='/lab' text='Purchase Season Pass to access this module!'>
              <Lock sx={{ fontSize: '100px' }} />
            </LabModuleCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default LabPage;