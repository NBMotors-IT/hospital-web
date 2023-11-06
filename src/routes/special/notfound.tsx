import { Sick } from '@mui/icons-material';
import { Box, Typography } from '@mui/joy';

function NotFoundPage() {
  return (
    <Box display='flex' flexDirection='column' width='100%' alignItems='center' justifyContent='center'>
      <Sick color='warning' sx={{ fontSize: '80px' }} />
      <Typography level='h2' textAlign='center'>Page Not Found</Typography>
    </Box>
  );
}

export default NotFoundPage;
