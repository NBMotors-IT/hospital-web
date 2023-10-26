import { Box, Button, FormControl, Input, Sheet, Typography } from '@mui/joy';

function IndexPage() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}>
      <Sheet sx={{
        display: 'flex',
        // width: 400,
        px: 3,
        py: 3,
        gap: 2,
        flexDirection: 'column',
        borderRadius: 'sm',
        boxShadow: 'md'
      }}>
        <Typography level='h2'>Sacred Heart Hospital</Typography>

        <FormControl>
          <Input variant='soft' name="username" type="text" placeholder="Username" />
        </FormControl>

        <FormControl>
          <Input variant='soft' name="password" type="password" placeholder="Password" />
        </FormControl>

        <Button>Login</Button>
      </Sheet>
    </Box>
  );
}

export default IndexPage;