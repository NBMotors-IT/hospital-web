import { DialogContent, DialogTitle, Modal, ModalClose, ModalDialog } from '@mui/joy';
import { Transition } from 'react-transition-group';

interface Props {
  title?: string;
  delay?: number;
  showCloseButton?: boolean;
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

function TransitionModal({ title, delay = 200, showCloseButton = false, open, handleClose, children }: Props) {
  return (
    <Transition in={open} timeout={delay}>
      {(state: string) => (
        <Modal
          keepMounted
          open={!['exited', 'exiting'].includes(state)}
          onClose={() => handleClose()}
          slotProps={{
            backdrop: {
              sx: {
                opacity: 0,
                backdropFilter: 'none',
                transition: `opacity ${delay}ms, backdrop-filter ${delay}ms`,
                ...{
                  entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                  entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                }[state],
              },
            },
          }}
          sx={{
            visibility: state === 'exited' ? 'hidden' : 'visible',
          }}
        >
          <ModalDialog variant='plain'
            sx={{
              opacity: 0,
              transition: `opacity ${delay}ms`,
              ...{
                entering: { opacity: 1 },
                entered: { opacity: 1 },
              }[state],
            }}
          >
            {showCloseButton && (<ModalClose />)}
            {title && (<DialogTitle>{title}</DialogTitle>)}
            <DialogContent>
              {children}
            </DialogContent>
          </ModalDialog>
        </Modal>
      )}
    </Transition>
  );
}

export default TransitionModal;