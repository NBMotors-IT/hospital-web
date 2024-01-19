import { Chip } from '@mui/joy';

import { AdmissionStatus, AdmissionStatusUtil } from '../../types/admissionStatus';

interface Props {
  size?: 'sm' | 'md' | 'lg',
  status: AdmissionStatus
}

function PatientStatusChip({ size = 'lg', status } : Props) {
  const { element, color } = AdmissionStatusUtil.toIconAndColor(status);

  return <Chip variant='solid' color={color} size={size} startDecorator={element}>{AdmissionStatusUtil.toString(status)}</Chip>;
}

export default PatientStatusChip;
