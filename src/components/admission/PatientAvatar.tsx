import { Avatar, Badge } from '@mui/joy';
import { AdmissionStatus } from '../../types/admissionStatus';
import React from 'react';
import { admissionColorFromStatus } from '../../utils';

interface Props {
  status: AdmissionStatus,
  size?: number
}

interface AvatarBadgeProps {
  status: AdmissionStatus,
  children?: React.ReactNode
}

function PatientAvatarBadge({ status, children }: AvatarBadgeProps) {
  const { element, color } = admissionColorFromStatus(status);

  return (
    <Badge
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeInset='15%'
      color={color}
      badgeContent={element}
    >
      {children}
    </Badge>
  );
}

function PatientAvatar({ status, size = 80 } : Props) {
  return (
    <PatientAvatarBadge status={status}>
      <Avatar sx={{ width: size, height: size }} />
    </PatientAvatarBadge>
  );
}

export default PatientAvatar;