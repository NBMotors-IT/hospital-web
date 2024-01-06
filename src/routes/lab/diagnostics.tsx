import { Box, Typography } from '@mui/joy';
import Breadcrumb from '../../components/common/Breadcrumb';

const linksMap = new Map<string, string>([
  ['/lab', 'Lab']
]);

function AIDiagnosticsPage() {
  return (
    <>
      <Breadcrumb links={linksMap} current='AI Diagnostics' />

      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap={4}>
        <Typography level='title-lg' textAlign='center'>TODO</Typography>
        <img style={{ alignSelf: 'center' }} src='https://i.imgur.com/jxGyuDx.jpeg' />
      </Box>
    </>
  );
}

export default AIDiagnosticsPage;