import { Delete, Reply } from '@mui/icons-material';
import { Avatar, Box, Button, Card, Typography } from '@mui/joy';
import { Link, useParams } from 'react-router-dom';

import Breadcrumb from '../../components/common/Breadcrumb';
import { Message } from '../../types/message';
import { useMessage } from '../../hooks/message';

const linksMap = new Map<string, string>([
  ['/messages', 'Messages']
]);

function MessagePage() {
  const params = useParams();
  const { data, error, isLoading } = useMessage(params.messageId as string);

  if (isLoading) {
    return (
      <>
        TODO: Loading animation here...
      </>
    );
  }

  if (error) {
    return (
      <>
        TODO: Error message here...
      </>
    );
  }

  const message = data as Message;

  return (
    <>
      <Breadcrumb links={linksMap} current={message.title} />

      <Card>
        <Box display='flex' gap={1}>
          {/* TODO: Pass recipient (and message?) */}
          <Button component={Link} to={'/messages/new'} variant='soft' startDecorator={<Reply />}>Reply</Button>

          <Button component={Link} to={'/messages/'} variant='soft' startDecorator={<Delete />}>Delete</Button>
        </Box>

        <Box display='flex' alignItems='center' gap={3}>
          <Avatar sx={{ width: 64, height: 64 }} />
          <Box display='flex' flexDirection='column' gap={0.3}>
            <Typography fontWeight='600'>{message.from.name} {message.from.surname}</Typography>
            <Typography level='body-sm'>{message.sentDate.toLocaleString()}</Typography>
          </Box>
        </Box>

        <Box display='flex' flexDirection='column' gap={1}>
          <Typography level='title-lg'>{message.title}</Typography>
          <Typography level='body-md'>
            {message.text}
          </Typography>
        </Box>
      </Card>
    </>
  );
}

export default MessagePage;
