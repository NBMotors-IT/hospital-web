import { Delete, Reply } from '@mui/icons-material';
import { Avatar, Box, Button, Card, Typography } from '@mui/joy';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useState } from 'react';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Message } from '../../types/message';
import { useMessage } from '../../hooks/message';
import LoadingIndicator from '../../components/common/LoadingIndicator';
import ErrorDisplay from '../../components/common/ErrorDisplay';
import ConfirmationModal from '../../components/common/modal/ConfirmationModal';

const linksMap = new Map<string, string>([
  ['/messages', 'Messages']
]);

function MessagePage() {
  const params = useParams();
  const { data, error, isLoading } = useMessage(params.messageId as string);
  const navigate = useNavigate();

  const [confirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false);

  if (isLoading) {
    return (
      <LoadingIndicator />
    );
  }

  if (error) {
    return (
      <ErrorDisplay message='Could not load message' />
    );
  }

  const message = data as Message;

  return (
    <>
      {/* Modals */}
      <ConfirmationModal
        title='Confirm Message Delete'
        text={'Are you sure you want to delete this message?'}
        yesText='Delete'
        noText='Cancel'
        open={confirmDeleteModalOpen}
        handleClose={() => setConfirmDeleteModalOpen(false)}
        handleYes={() => {
          setConfirmDeleteModalOpen(false);
          navigate('/messages');
        }}
        handleNo={() => setConfirmDeleteModalOpen(false)}
      />
      {/* End of Modals */}
      <Breadcrumb links={linksMap} current={message.title} />

      <Card>
        <Box display='flex' gap={1}>
          {/* TODO: Pass recipient (and message?) */}
          <Button component={Link} to={'/messages/new'} variant='soft' startDecorator={<Reply />}>Reply</Button>

          <Button variant='soft' startDecorator={<Delete />} onClick={() => setConfirmDeleteModalOpen(true)}>Delete</Button>
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
