import { Box, CircularProgress } from '@mui/joy';

function LoadingIndicator() {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
      <CircularProgress variant='plain' size='lg' />
    </Box>
  );
}

export default LoadingIndicator;