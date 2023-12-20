import { Box, Button, Card, FormControl, Input, Textarea } from '@mui/joy';
import { Link } from 'react-router-dom';
import { Send } from '@mui/icons-material';
import Breadcrumb from '../../components/common/Breadcrumb';

const linksMap = new Map<string, string>([
  ['/messages', 'Messages']
]);

function MessageCreatePage() {
  return (
    <>
      <Breadcrumb links={linksMap} current='New' />

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
