import { Box, Button, Card, FormControl, Input, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';

function IndexPage() {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' width='100%'>
      <Card variant='plain'
        sx={{
          display: 'flex',
          // width: 400,
          p: 3,
          gap: 2,
          flexDirection: 'column',
          boxShadow: 'md'
        }}
      >
        <Box>
          <Typography textAlign='center' level='h2'>Hospital</Typography>
          <Typography textAlign='center' level='title-md'>Emergency Room Module</Typography>
        </Box>

        <FormControl>
          <Input variant='soft' name='username' type='text' placeholder='Username' />
        </FormControl>

        <FormControl>
          <Input variant='soft' name='password' type='password' placeholder='Password' />
        </FormControl>

        {/* No accounts for now */}
        <Button component={Link} to='/dashboard'>Login</Button>
      </Card>
    </Box>
  );
}

export default IndexPage;