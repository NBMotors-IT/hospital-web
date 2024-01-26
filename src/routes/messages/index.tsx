import { Create } from '@mui/icons-material';
import { Box, Button, Card } from '@mui/joy';
import { Link } from 'react-router-dom';

import Breadcrumb from '../../components/common/Breadcrumb';
import MessagePreview from '../../components/messages/MessagePreview';
import { Message } from '../../types/message';
import { useMessages } from '../../hooks/message';
import MessagePreviewSkeleton from '../../components/messages/MessagePreviewSkeleton';

function MessagesIndexPage() {
  const { data, error, isLoading } = useMessages();

  if (isLoading) {
    return (
      <>
        <Breadcrumb current='Messages' />

        <Card>
          <Box>
            <Button disabled variant='soft' startDecorator={<Create />}>New message</Button>
          </Box>

          <Box display='flex' flexDirection='column' gap={1}>
            <MessagePreviewSkeleton count={10} />
          </Box>
        </Card>
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

  const messages = data as Message[];

  return (
    <>
      <Breadcrumb current='Messages' />

      <Card>
        <Box>
          <Button component={Link} to={'/messages/new'} variant='soft' startDecorator={<Create />}>New message</Button>
        </Box>

        <Box display='flex' flexDirection='column' gap={1}>
          {messages.map((message) => (
            <MessagePreview key={message.id} message={message} />
          ))}
        </Box>
      </Card>
    </>
  );
}

export default MessagesIndexPage;
