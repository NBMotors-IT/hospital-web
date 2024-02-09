import { Box, Button } from '@mui/joy';
import BaseModal from '../../../components/common/modal/BaseModal';

interface Props {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
}

function AddDocumentModal({ open, handleClose, handleSubmit }: Props) {
  return (
    <BaseModal title='Add documents' open={open} handleClose={handleClose} showCloseButton>
      <Box display='flex' flexDirection='column' gap={2}>
        Select one or more files to upload
        <input type='file' accept='image/*,.pdf' multiple />
        <Box display='flex' justifyContent='flex-end' gap={1}>
          <Button color='success' sx={{ minWidth: '6em' }} onClick={handleSubmit}>Upload</Button>
          <Button color='neutral' sx={{ minWidth: '6em' }} onClick={handleClose}>Cancel</Button>
        </Box>
      </Box>
    </BaseModal>
  );
}

export default AddDocumentModal;