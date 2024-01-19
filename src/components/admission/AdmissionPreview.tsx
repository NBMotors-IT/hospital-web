import { Box, Typography } from '@mui/joy';

import { Admission } from '../../types/admission';
import { shortTimeFormat } from '../../utils';
import LinkCard from '../common/LinkCard';
import { AdmissionStatusUtil } from '../../types/admissionStatus';
import PatientAvatar from './PatientAvatar';

interface Props {
  admission: Admission
}

function AdmissionPreview({ admission }: Props) {
  return (
    <LinkCard to={`/admissions/${admission.id}`}>
      <Box display='flex' alignItems='center' gap={3}>
        <PatientAvatar status={admission.status} size={64} />
        <Box display='flex' flexDirection='column' gap={0.3}>
          <Typography fontWeight='600'>{admission.patient.name} {admission.patient.surname}</Typography>
          <Typography level='body-sm'>{AdmissionStatusUtil.toString(admission.status)}</Typography>
        </Box>
      </Box>

      <Box>
        <Typography level='body-sm'>{shortTimeFormat(admission.admissionDate)}</Typography>
      </Box>
    </LinkCard>
  );
}

export default AdmissionPreview;
