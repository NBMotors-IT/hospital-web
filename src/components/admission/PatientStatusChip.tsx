import { Chip } from '@mui/joy';

import { AdmissionStatus } from '../../types/admissionStatus';
import { admissionColorFromStatus } from '../../utils';

interface Props {
  size?: 'sm' | 'md' | 'lg',
  status: AdmissionStatus
}

function PatientStatusChip({ size = 'lg', status } : Props) {
  const { element, color } = admissionColorFromStatus(status);

  return <Chip variant='solid' color={color} size={size} startDecorator={element}>{status.charAt(0).toUpperCase() + status.slice(1)}</Chip>;
}

export default PatientStatusChip;
