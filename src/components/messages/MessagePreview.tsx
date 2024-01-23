import { Avatar, Badge, Box, Typography, useTheme } from '@mui/joy';
import { useMediaQuery } from '@mui/material';

import { Message } from '../../types/message';
import { shortTimeFormat, truncateString } from '../../utils';
import LinkCard from '../common/LinkCard';

interface Props {
  message: Message
}

function MessagePreview({ message }: Props) {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  const messageLengthLimit = isMd ? (isLg ? 200 : 100) : (isSm ? 80 : 30);

  return (
    <LinkCard to={`/messages/${message.id}`}>
      <Box display='flex' alignItems='center' gap={3}>
        <Badge invisible={message.read}>
          <Avatar sx={{ width: 64, height: 64 }} />
        </Badge>
        <Box display='flex' flexDirection='column' gap={0.3}>
          <Typography fontWeight='600'>{message.from.name} {message.from.surname}</Typography>
          <Typography level={message.read ? 'body-sm' : 'title-sm'}>{message.title}</Typography>
          <Typography level='body-sm'>{truncateString(message.text, messageLengthLimit)}</Typography>
        </Box>
      </Box>

      <Box position='absolute' right={12} top={12}>
        <Typography level='body-sm'>{shortTimeFormat(message.sentDate)}</Typography>
      </Box>
    </LinkCard>
  );
}

export default MessagePreview;
