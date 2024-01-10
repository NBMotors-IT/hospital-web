import { Avatar, Box, Card, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import { Employee } from '../../types/employee';

interface Props {
  employee: Employee
}

function StaffPreview({ employee }: Props) {
  return (
    <Card variant='soft' component={Link} to={`/staff/${employee.id}`}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 1,
        backgroundColor: 'background.surface',
        ':hover': {
          backgroundColor: 'background.level2'
        },
        textDecoration: 'none'
      }}
    >
      <Box display='flex' alignItems='center' gap={3}>
        <Avatar sx={{ width: 64, height: 64 }} />
        <Box display='flex' flexDirection='column' gap={0.3}>
          <Typography fontWeight='600'>{employee.name} {employee.surname}</Typography>
          <Typography level='body-sm'>{employee.role} of {employee.specialisation}</Typography>
        </Box>
      </Box>

      <Box>
        <Typography level='body-sm'>{employee.office}</Typography>
      </Box>
    </Card>
  );
}

export default StaffPreview;
