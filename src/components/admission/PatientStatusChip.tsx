import { Favorite, Hotel, HourglassBottom } from '@mui/icons-material';
import { Chip, ColorPaletteProp } from '@mui/joy';
import { AdmissionStatus } from '../../types/admissionStatus';

interface Props {
  size?: 'sm' | 'md' | 'lg',
  status: AdmissionStatus
}

function PatientStatusChip({ size = 'lg', status } : Props) {
  // TODO: Helper function for mapping status to color/decorator? (also used in PatientAvatar)
  let startDecorator: React.ReactNode;
  let color: ColorPaletteProp;

  switch (status) {
    case 'admitted':
      startDecorator = <Hotel />;
      color = 'primary';
      break;
    case 'waiting':
      startDecorator = <HourglassBottom />;
      color = 'warning';
      break;
    case 'discharged':
      startDecorator = <Favorite />;
      color = 'success';
      break;
  }

  return <Chip variant='solid' color={color} size={size} startDecorator={startDecorator}>{status.charAt(0).toUpperCase() + status.slice(1)}</Chip>;
}

export default PatientStatusChip;