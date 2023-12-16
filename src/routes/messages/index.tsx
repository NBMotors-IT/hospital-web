import { Box, Button, Card, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import { Create } from '@mui/icons-material';
import { Message } from '../../types/message';
import MessagePreview from '../../components/messages/MessagePreview';

const messages: Message[] = [
  { id: '4', from: 'Doctor McDoctorface', title: 'Please reply', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, diam eget commodo aliquam, dolor tortor interdum metus, eu iaculis ligula nisl non massa. Nulla ut pretium turpis. Morbi ultrices urna sit amet mi volutpat vestibulum. Proin quis enim mauris. Praesent finibus dictum mattis.', sentDate: new Date(), read: false },
  { id: '3', from: 'Doctor McDoctorface', title: 'Hellooooo', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, diam eget commodo aliquam, dolor tortor interdum metus, eu iaculis ligula nisl non massa. Nulla ut pretium turpis. Morbi ultrices urna sit amet mi volutpat vestibulum. Proin quis enim mauris. Praesent finibus dictum mattis.', sentDate: new Date('2023-02-12T08:00'), read: false },
  { id: '2', from: 'Doctor McDoctorface', title: 'Hello again', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, diam eget commodo aliquam, dolor tortor interdum metus, eu iaculis ligula nisl non massa. Nulla ut pretium turpis. Morbi ultrices urna sit amet mi volutpat vestibulum. Proin quis enim mauris. Praesent finibus dictum mattis.', sentDate: new Date('2023-02-11T07:00'), read: false },
  { id: '1', from: 'Doctor McDoctorface', title: 'Hello', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, diam eget commodo aliquam, dolor tortor interdum metus, eu iaculis ligula nisl non massa. Nulla ut pretium turpis. Morbi ultrices urna sit amet mi volutpat vestibulum. Proin quis enim mauris. Praesent finibus dictum mattis.', sentDate: new Date('2023-02-10T06:00'), read: false },
  { id: '0', from: 'Administrator', title: 'Account activation', text: 'Hello, your account has been activated!', sentDate: new Date('2023-01-01T12:00'), read: true }
]

function MessagesIndexPage() {
  return (
    <>
      <Typography color='neutral' level='h1' sx={{ mb: 2 }}>Messages</Typography>
      <Card>
        <Box><Button component={Link} to={'/messages/new'} variant='soft' startDecorator={<Create />}>New message</Button></Box>

        <Box display='flex' flexDirection='column' gap={1}>
          {messages.map((message) => (
            <MessagePreview message={message} />
          ))}
        </Box>
      </Card>
    </>
  );
}

export default MessagesIndexPage;
