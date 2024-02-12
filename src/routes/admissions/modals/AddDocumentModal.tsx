import { Box, Button } from '@mui/joy';
import { useState } from 'react';
import BaseModal from '../../../components/common/modal/BaseModal';

interface Props {
  open: boolean;
  handleClose: () => void;
}

function AddDocumentModal({ open, handleClose }: Props) {
  const [uploading, setUploading] = useState(false);

  const handleSubmit = () => {
    // Fake file upload
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      handleClose();
    }, 2000);
  };

  return (
    <BaseModal title='Add Documents' open={open} handleClose={handleClose} showCloseButton>
      <Box display='flex' flexDirection='column' gap={2}>
        Select one or more files to upload
        <input type='file' accept='image/*,.pdf' multiple disabled={uploading} />
        <Box display='flex' justifyContent='flex-end' gap={1}>
          <Button color='success' sx={{ minWidth: '6em' }} loading={uploading} onClick={handleSubmit}>Upload</Button>
          <Button color='neutral' sx={{ minWidth: '6em' }} disabled={uploading} onClick={handleClose}>Cancel</Button>
        </Box>
      </Box>
    </BaseModal>
  );
}

export default AddDocumentModal;