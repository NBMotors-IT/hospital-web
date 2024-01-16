import { Avatar, Box, Typography } from '@mui/joy';
import { Employee } from '../../types/employee';
import LinkCard from '../common/LinkCard';

interface Props {
  employee: Employee
}

function EmployeePreview({ employee }: Props) {
  return (
    <LinkCard alignItems='center' to={`/employees/${employee.id}`}>
      <Box display='flex' alignItems='center' gap={3}>
        <Avatar sx={{ width: 64, height: 64 }} />
        <Box display='flex' flexDirection='column' gap={0.3}>
          <Typography fontWeight='600'>{employee.name} {employee.surname}</Typography>
          <Typography level='body-sm'>{employee.role} - {employee.specialisation}</Typography>
        </Box>
      </Box>

      <Box>
        <Typography level='body-sm'>{employee.office}</Typography>
      </Box>
    </LinkCard>
  );
}

export default EmployeePreview;
