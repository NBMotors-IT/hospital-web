import { Box, Typography } from '@mui/joy';
import { shortTimeFormat } from '../../utils';
import { Admission } from '../../types/admission';
import LinkCard from '../common/LinkCard';
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
          <Typography fontWeight='600'>{admission.name}</Typography>
          <Typography level='body-sm'>{admission.status.charAt(0).toUpperCase() + admission.status.slice(1)}</Typography>
        </Box>
      </Box>

      <Box>
        <Typography level='body-sm'>{shortTimeFormat(admission.datetime)}</Typography>
      </Box>
    </LinkCard>
  );
}

export default AdmissionPreview;
