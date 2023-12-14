import { Avatar, Box, Button, Card, IconButton, Table, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import { truncateString } from '../utils';
import { Create, Delete, Visibility } from '@mui/icons-material';

interface Message {
  id: string,
  from: string,
  title: string,
  text: string,
  sent: Date
}

const messages: Message[] = [
  { id: '4', from: 'Doctor McDoctorface', title: 'Please reply', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, diam eget commodo aliquam, dolor tortor interdum metus, eu iaculis ligula nisl non massa. Nulla ut pretium turpis. Morbi ultrices urna sit amet mi volutpat vestibulum. Proin quis enim mauris. Praesent finibus dictum mattis.', sent: new Date('2023-02-13T09:00') },
  { id: '3', from: 'Doctor McDoctorface', title: 'Hellooooo', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, diam eget commodo aliquam, dolor tortor interdum metus, eu iaculis ligula nisl non massa. Nulla ut pretium turpis. Morbi ultrices urna sit amet mi volutpat vestibulum. Proin quis enim mauris. Praesent finibus dictum mattis.', sent: new Date('2023-02-13T08:00') },
  { id: '2', from: 'Doctor McDoctorface', title: 'Hello again', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, diam eget commodo aliquam, dolor tortor interdum metus, eu iaculis ligula nisl non massa. Nulla ut pretium turpis. Morbi ultrices urna sit amet mi volutpat vestibulum. Proin quis enim mauris. Praesent finibus dictum mattis.', sent: new Date('2023-02-13T07:00') },
  { id: '1', from: 'Doctor McDoctorface', title: 'Hello', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, diam eget commodo aliquam, dolor tortor interdum metus, eu iaculis ligula nisl non massa. Nulla ut pretium turpis. Morbi ultrices urna sit amet mi volutpat vestibulum. Proin quis enim mauris. Praesent finibus dictum mattis.', sent: new Date('2023-02-13T06:00') },
  { id: '0', from: 'Administrator', title: 'Account activation', text: 'Hello, your account has been activated!', sent: new Date('2023-02-12T12:00') }
]

function MessagesPage() {
  return (
    <>
      <Typography color='neutral' level='h1' sx={{ mb: 2 }}>Messages</Typography>
      <Card>
        <Box><Button component={Link} to={'/messages/new'} variant='soft' startDecorator={<Create />}>New message</Button></Box>

        <Table sx={{
          '& tr > *:last-child': { textAlign: 'right', width: '20%' },
          '& tr > *:nth-child(2)': { width: '50%' },
          '& tr > *': { py: 2 }
        }}>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id} style={{ borderRadius: '50%' }}>
                <td>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1, md: 2 },
                    flexDirection: { xs: 'column', md: 'row' }
                  }}>
                    <Avatar sx={{ width: 32, height: 32 }} />
                    <Typography fontWeight='600' textAlign='center'>{message.from}</Typography>
                  </Box>
                </td>
                <td>
                  <Typography>
                    <Typography level='title-sm'>{message.title}</Typography>
                    <Typography level='body-sm'> - {truncateString(message.text, 50)}</Typography>
                  </Typography>
                </td>
                <td>
                  <IconButton component={Link} to={`/messages/${message.id}`} variant='plain'><Visibility /></IconButton>
                  <IconButton component={Link} to={'/'} variant='plain'><Delete /></IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
}

export default MessagesPage;
