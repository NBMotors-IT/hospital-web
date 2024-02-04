import { Box, Button, Card, FormControl, FormLabel, Input, Snackbar, Tooltip, Typography, useTheme } from '@mui/joy';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import DarkModeToggle from '../components/common/DarkModeToggle';

function IndexPage() {
  const theme = useTheme();
  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' width='100%'>
      <Tooltip arrow title='Toggle dark mode'>
        <DarkModeToggle sx={{ position: 'absolute', top: 12, left: 12 }} />
      </Tooltip>
      
      <Card variant='plain'
        sx={{
          display: 'flex',
          borderTop: '6px black solid',
          borderTopColor: theme.palette.primary[500],
          minWidth: 350,
          p: 3,
          gap: 2,
          flexDirection: 'column',
          boxShadow: 'sm'
        }}
      >
        <Box display='flex' justifyContent='center'>
          <img style={{ width: '50%', marginTop: '-35%', boxShadow: theme.shadow.md, borderRadius: '30%' }} src={logo} />
        </Box>

        <Box my={2}>
          <Typography textAlign='center' level='h2'>Hospital</Typography>
          <Typography textAlign='center' level='title-md'>Emergency Room Module</Typography>
        </Box>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input name='username' type='text' placeholder='Username' value='dryournamehere123' readOnly />
        </FormControl>

        <FormControl>
        <FormLabel>Password</FormLabel>
          <Input name='password' type='password' placeholder='Password' value='admin123' readOnly />
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
