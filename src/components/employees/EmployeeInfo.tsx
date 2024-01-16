import { SensorDoor } from '@mui/icons-material';
import { Avatar, Box, Chip, FormControl, FormLabel, Input } from '@mui/joy';

import { Employee } from '../../types/employee';
import PersonInfo from '../common/PersonInfo';

interface Props {
  employee: Employee
}

function EmployeeInfo({ employee }: Props) {
  return (
    <PersonInfo firstName={employee.name} lastName={employee.surname}>
      <PersonInfo.Avatar>
        <Avatar sx={{ width: 80, height: 80 }} />
      </PersonInfo.Avatar>

      <PersonInfo.Chips>
        <Chip variant='soft' startDecorator={<SensorDoor />}>{employee.office}</Chip>
        <Box display='flex' gap={1}>
          <Chip variant='soft'>{employee.role}</Chip>
          <Chip variant='soft'>{employee.specialisation}</Chip>
        </Box>
      </PersonInfo.Chips>

      <PersonInfo.Info>
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input readOnly variant='soft' value={employee.phone} />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input readOnly variant='soft' value={employee.email} />
        </FormControl>

        <FormControl>
          <FormLabel>PZW</FormLabel>
          <Input readOnly variant='soft' value={employee.pzw} />
        </FormControl>

        <FormControl>
          <FormLabel>Department</FormLabel>
          <Input readOnly variant='soft' value={employee.department} />
        </FormControl>

        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input readOnly variant='soft' value={employee.address} />
        </FormControl>

        <FormControl>
          <FormLabel>Postcode</FormLabel>
          <Input readOnly variant='soft' value={employee.postcode} />
        </FormControl>

        <FormControl>
          <FormLabel>Birthday</FormLabel>
          <Input readOnly variant='soft' value={employee.dateOfBirth?.toLocaleDateString()} />
        </FormControl>
      </PersonInfo.Info>
    </PersonInfo>
  );
}

export default EmployeeInfo;
