import { Bloodtype, Height, Scale } from '@mui/icons-material';
import { Box, Chip, FormControl, FormLabel, Input } from '@mui/joy';

import PersonInfo from '../common/PersonInfo';
import PatientAvatar from './PatientAvatar';
import PatientStatusChip from './PatientStatusChip';

function PatientInfo() {
  return (
    <PersonInfo firstName='John' lastName='Smith'>
      <PersonInfo.Avatar>
        <PatientAvatar status='admitted' />
      </PersonInfo.Avatar>

      <PersonInfo.Chips>
        <PatientStatusChip status='admitted' />
        <Box display='flex' gap={1}>
          <Chip variant='soft' color='danger' startDecorator={<Bloodtype />}>B-</Chip>
          <Chip variant='soft' startDecorator={<Scale />}>82 kg</Chip>
          <Chip variant='soft' startDecorator={<Height />}>180 cm</Chip>
        </Box>
      </PersonInfo.Chips>

      <PersonInfo.Info>
        <FormControl>
          <FormLabel>Sex</FormLabel>
          <Input readOnly variant='soft' value='Male' />
        </FormControl>

        <FormControl>
          <FormLabel>Street</FormLabel>
          <Input readOnly variant='soft' value='4242 Some St' />
        </FormControl>

        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input readOnly variant='soft' value='Brooklyn, NY, 11209' />
        </FormControl>

        <FormControl>
          <FormLabel>Birthday</FormLabel>
          <Input readOnly variant='soft' value='1990-04-20' />
        </FormControl>
      </PersonInfo.Info>
    </PersonInfo>
  );
}

export default PatientInfo;
