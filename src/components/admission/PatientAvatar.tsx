import { Favorite, Hotel, HourglassBottom } from '@mui/icons-material';
import { Avatar, Badge, ColorPaletteProp } from '@mui/joy';
import { AdmissionStatus } from '../../types/admissionStatus';
import React from 'react';

interface Props {
  status: AdmissionStatus
}

interface AvatarBadgeProps {
  status: AdmissionStatus,
  children?: React.ReactNode
}

function PatientAvatarBadge({ status, children }: AvatarBadgeProps) {
  let badgeContent: React.ReactNode;
  let color: ColorPaletteProp;

  switch (status) {
    case 'admitted':
      badgeContent = <Hotel />;
      color = 'primary';
      break;
    case 'waiting':
      badgeContent = <HourglassBottom />;
      color = 'warning';
      break;
    case 'discharged':
      badgeContent = <Favorite />;
      color = 'success';
      break;
  }

  return (
    <Badge
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeInset='15%'
      color={color}
      badgeContent={badgeContent}
    >
      {children}
    </Badge>
  );
}

function PatientAvatar({ status } : Props) {
  return (
    <PatientAvatarBadge status={status}>
      <Avatar sx={{ width: 80, height: 80 }} />
    </PatientAvatarBadge>
  );
}

export default PatientAvatar;