import { Box, Card, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import { shortTimeFormat } from '../../utils';
import { Admission } from '../../types/admission';
import PatientAvatar from './PatientAvatar';

interface Props {
  admission: Admission
}

function AdmissionPreview({ admission }: Props) {
  return (
    <Card variant='soft' component={Link} to={`/admissions/${admission.id}`}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        p: 1,
        backgroundColor: 'background.surface',
        ':hover': {
          backgroundColor: 'background.level2'
        },
        textDecoration: 'none'
      }}
    >
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
    </Card>
  );
}

export default AdmissionPreview;