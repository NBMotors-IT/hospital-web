import { Box, Button, FormControl, Input, Sheet, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';

function IndexPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Sheet
        sx={{
          display: 'flex',
          // width: 400,
          px: 3,
          py: 3,
          gap: 2,
          flexDirection: 'column',
          borderRadius: 'sm',
          boxShadow: 'md'
        }}
      >
        <div>
          <Typography textAlign='center' level='h2'>Hospital</Typography>
          <Typography textAlign='center' level='title-md'>Emergency Room Module</Typography>
        </div>

        <FormControl>
          <Input variant='soft' name='username' type='text' placeholder='Username' />
        </FormControl>

        <FormControl>
          <Input variant='soft' name='password' type='password' placeholder='Password' />
        </FormControl>

        {/* No accounts for now */}
        <Button component={Link} to='/dashboard'>Login</Button>
      </Sheet>
    </Box>
  );
}

export default IndexPage;