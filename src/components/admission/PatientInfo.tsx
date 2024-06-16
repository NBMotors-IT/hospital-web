import { Bloodtype, Height, Scale } from '@mui/icons-material';
import { Box, Chip, FormControl, FormLabel, Input } from '@mui/joy';

import PersonInfo from '../common/PersonInfo';
import { AdmissionStatus } from '../../types/admissionStatus';
import { Patient } from '../../types/patient';
import { BloodTypeUtil } from '../../types/bloodType';
import { SexUtil } from '../../types/sex';
import PatientAvatar from './PatientAvatar';
import PatientStatusChip from './PatientStatusChip';

interface Props {
  patient: Patient,
  status: AdmissionStatus
}

function PatientInfo({ patient, status }: Props) {
  return (
    <PersonInfo firstName={patient.name} lastName={patient.surname}>
      <PersonInfo.Avatar>
        <PatientAvatar status={status} />
      </PersonInfo.Avatar>

      <PersonInfo.Chips>
        <PatientStatusChip status={status} />
        <Box display='flex' gap={1}>
          <Chip variant='soft' color='danger' startDecorator={<Bloodtype />}>{BloodTypeUtil.toString(patient.bloodType!)}</Chip>
          <Chip variant='soft' startDecorator={<Scale />}>{patient.weight} kg</Chip>
          <Chip variant='soft' startDecorator={<Height />}>{patient.height} cm</Chip>
        </Box>
      </PersonInfo.Chips>

      <PersonInfo.Info>
        <FormControl>
          <FormLabel>Sex</FormLabel>
          <Input readOnly variant='soft' value={SexUtil.toString(patient.sex)} />
        </FormControl>

        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input readOnly variant='soft' value={`${patient.address} ${patient.postCode}`} />
        </FormControl>

        <FormControl>
          <FormLabel>PESEL</FormLabel>
          <Input readOnly variant='soft' value={patient.pesel} />
        </FormControl>

        <FormControl>
          <FormLabel>Date Of Birth</FormLabel>
          <Input readOnly variant='soft' value={new Date(patient.dateOfBirth!).toLocaleDateString()} />
        </FormControl>

        <FormControl>
          <FormLabel>Allergies</FormLabel>
          <Input readOnly variant='soft' value={patient.allergies} />
        </FormControl>

        <FormControl>
          <FormLabel>Nationality</FormLabel>
          <Input readOnly variant='soft' value={patient.nationality} />
        </FormControl>

        <FormControl>
          <FormLabel>Phone number</FormLabel>
          <Input readOnly variant='soft' value={patient.phoneNumber} />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input readOnly variant='soft' value={patient.email} />
        </FormControl>

        <FormControl>
          <FormLabel>Emergency Contact</FormLabel>
          <Input readOnly variant='soft' value={patient.emergencyContact} />
        </FormControl>
      </PersonInfo.Info>
    </PersonInfo>
  );
}

export default PatientInfo;
