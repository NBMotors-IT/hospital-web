import { Sick } from '@mui/icons-material';
import { Box, Typography } from '@mui/joy';

interface Props {
  message: string
}

function ErrorDisplay({ message }: Props) {
  return (
    <Box display='flex' flexDirection='column' width='100%' mt={6} alignItems='center' justifyContent='center'>
      <Sick color='warning' sx={{ fontSize: '80px' }} />
      <Typography level='h2' textAlign='center'>{message}</Typography>
    </Box>
  );
}

export default ErrorDisplay;
