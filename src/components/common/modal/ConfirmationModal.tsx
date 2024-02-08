import { Box, Button } from '@mui/joy';
import BaseModal from './BaseModal';

interface Props {
  open: boolean;
  title: string;
  text: string;
  yesText?: string,
  noText?: string,
  handleClose: () => void;
  handleYes: () => void;
  handleNo: () => void;
}

function ConfirmationModal({ open, title, yesText = 'Yes', noText = 'No', text, handleClose, handleYes, handleNo }: Props) {
  return (
    <BaseModal title={title} open={open} handleClose={handleClose} showCloseButton>
      <Box display='flex' flexDirection='column' gap={2}>
        {text}
        <Box display='flex' justifyContent='flex-end' gap={1}>
          <Button color='success' sx={{ minWidth: '6em' }} onClick={handleYes}>{yesText}</Button>
          <Button color='neutral' sx={{ minWidth: '6em' }} onClick={handleNo}>{noText}</Button>
        </Box>
      </Box>
    </BaseModal>
  );
}

export default ConfirmationModal;