import { Box, Button, Card, FormControl, Input, Typography, useTheme, Snackbar } from '@mui/joy';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function IndexPage() {
  const theme = useTheme();
  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' width='100%'>
      <Card variant='plain'
        sx={{
          display: 'flex',
          borderTop: '6px black solid',
          borderTopColor: theme.palette.primary[500],
          // width: 400,
          p: 3,
          gap: 2,
          flexDirection: 'column',
          boxShadow: 'md'
        }}
      >
        <Box display='flex' justifyContent='center'>
          <img style={{ width: '50%', marginTop: '-35%', boxShadow: theme.shadow.md, borderRadius: '36px' }} src={logo} />
        </Box>

        <Box my={2}>
          <Typography textAlign='center' level='h2'>Hospital</Typography>
          <Typography textAlign='center' level='title-md'>Emergency Room Module</Typography>
        </Box>

        <FormControl>
          <Input variant='soft' name='username' type='text' placeholder='Username' value='dryournamehere123' readOnly />
        </FormControl>

        <FormControl>
          <Input variant='soft' name='password' type='password' placeholder='Password' value='admin123' readOnly />
        </FormControl>

        {/* No accounts for now */}
        <Button size='lg' component={Link} to='/dashboard'>Login</Button>

        <Box display='flex' flexDirection='column' alignItems='center'>
          <Button variant='plain' size='sm' onClick={() => setAlertOpen(true)}>Forgot password?</Button>
        </Box>
      </Card>

      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={alertOpen}
        variant='solid'
        color='danger'
        onClose={() => setAlertOpen(false)}
      >
        Bit sad, innit?
      </Snackbar>
    </Box>
  );
}

export default IndexPage;