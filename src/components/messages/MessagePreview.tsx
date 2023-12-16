import { Avatar, Badge, Box, Card, Typography, useTheme } from "@mui/joy";
import { Message } from "../../types/message";
import { Link } from "react-router-dom";
import { shortTimeFormat, truncateString } from "../../utils";
import { useMediaQuery } from "@mui/material";

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
    <Card key={message.id} variant='soft' component={Link} to={`/messages/${message.id}`}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        p: 1,
        backgroundColor: 'background.surface',
        ':hover': {
          backgroundColor: 'background.level2'
        },
        textDecoration: 'none'
      }}
    >
      <Box display='flex' alignItems='center' gap={3}>
        <Badge invisible={message.read}>
          <Avatar sx={{ width: 64, height: 64 }} />
        </Badge>
        <Box display='flex' flexDirection='column' gap={0.3}>
          <Typography fontWeight='600'>{message.from}</Typography>
          <Typography level={message.read ? 'body-sm' : 'title-sm'}>{message.title}</Typography>
          <Typography level='body-sm'>{truncateString(message.text, messageLengthLimit)}</Typography>
        </Box>
      </Box>

      <Box>
        <Typography level='body-sm'>{shortTimeFormat(message.sentDate)}</Typography>
      </Box>
    </Card>
  )
}

export default MessagePreview;