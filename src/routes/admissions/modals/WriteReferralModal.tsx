import { Box, Button, FormControl, FormLabel, Option, Select, Textarea } from '@mui/joy';
import BaseModal from '../../../components/common/modal/BaseModal';

interface Props {
  open: boolean;
  handleClose: () => void;
}

function WriteReferralModal({ open, handleClose }: Props) {
  return (
    <BaseModal title='Write a Referral' open={open} handleClose={handleClose} showCloseButton>
      <Box display='flex' flexDirection='column' gap={2}>
        <FormControl>
          <FormLabel>Referral type</FormLabel>
          <Select name='type' placeholder='Select type...'>
            <Option value='todo'>TODO</Option>
            <Option value='todotodo'>TODO TODO</Option>
            <Option value='todotodotodo'>TODO TODO TODO</Option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Additional information</FormLabel>
          <Textarea name='additionalInformation' minRows={3} maxRows={6}/>
        </FormControl>

        <Box display='flex' justifyContent='flex-end' gap={1}>
          <Button color='success' sx={{ minWidth: '6em' }} onClick={handleClose}>Write</Button>
          <Button color='neutral' sx={{ minWidth: '6em' }} onClick={handleClose}>Cancel</Button>
        </Box>
      </Box>
    </BaseModal>
  );
}

export default WriteReferralModal;