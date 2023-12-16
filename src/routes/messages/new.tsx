import { Box, Button, Card, FormControl, Input, Textarea, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import { Send } from '@mui/icons-material';

function MessageCreatePage() {
  return (
    <>
      <Typography color='neutral' level='h1' sx={{ mb: 2 }}>Messages</Typography>
      <Card>
        <Box>
          <Button component={Link} to={'/messages/'} variant='soft' startDecorator={<Send />}>Send</Button>
        </Box>

        <Box display='flex' flexDirection='column' gap={2}>
          <FormControl>
            <Input variant='soft' placeholder='To' />
          </FormControl>

          <FormControl>
            <Input variant='soft' placeholder='Subject' />
          </FormControl>

          <FormControl>
            <Textarea variant='soft' minRows={10} />
          </FormControl>
        </Box>
      </Card>
    </>
  );
}

export default MessageCreatePage;
