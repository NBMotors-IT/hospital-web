import { Avatar, Box, Button, Card, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import { Delete, Reply } from '@mui/icons-material';
import { Message } from '../../types/message';

const message: Message = {
  id: '1',
  from: 'Doctor McDoctorface',
  title: 'Hello',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, diam eget commodo aliquam, dolor tortor interdum metus, eu iaculis ligula nisl non massa. Nulla ut pretium turpis. Morbi ultrices urna sit amet mi volutpat vestibulum. Proin quis enim mauris. Praesent finibus dictum mattis.',
  sentDate: new Date('2023-02-10T06:00'),
  read: false
};

function MessagePage() {
  return (
    <>
      <Typography color='neutral' level='h1' sx={{ mb: 2 }}>Messages</Typography>
      <Card>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {/* TODO: Pass recipient (and message?) */}
          <Button component={Link} to={'/messages/new'} variant='soft' startDecorator={<Reply />}>Reply</Button>

          <Button component={Link} to={'/messages/'} variant='soft' startDecorator={<Delete />}>Delete</Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          <Avatar sx={{ width: 64, height: 64 }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.3 }}>
            <Typography fontWeight='600'>{message.from}</Typography>
            <Typography level='body-sm'>{message.sentDate.toLocaleString()}</Typography>
          </Box>
        </Box>

        <Box>
          <Typography level='body-md'>
            {message.text}
          </Typography>
        </Box>
      </Card>
    </>
  );
}

export default MessagePage;
