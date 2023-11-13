import { Bloodtype, Height, Hotel, Scale } from '@mui/icons-material';
import { Avatar, Badge, Box, Chip, Divider, FormControl, FormLabel, Input, Typography } from '@mui/joy';

function PatientInfo() {
  return (
    <>
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' my={3} mx={2}>
        <Badge
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeInset='15%'
          color='primary'
          badgeContent={<Hotel />} /* HourglassBottom + warning = waiting, Favorite + success = discharged */
        >
          <Avatar sx={{ width: 80, height: 80 }} />
        </Badge>
        <Typography level='title-lg' my={2}>John Smith</Typography>

        <Box display='flex' flexDirection='column' alignItems='center' gap={1}>
          <Chip variant='solid' color='primary' size='lg' startDecorator={<Hotel />}>Admitted</Chip>
          <Box display='flex' gap={1}>
            <Chip variant='soft' color='danger' startDecorator={<Bloodtype />}>B-</Chip>
            <Chip variant='soft' startDecorator={<Scale />}>82 kg</Chip>
            <Chip variant='soft' startDecorator={<Height />}>180 cm</Chip>
          </Box>
        </Box>
      </Box>

      <Divider orientation='vertical' sx={{ display: { xs: 'none', md: 'block' } }} />
      <Divider orientation='horizontal' sx={{ display: { xs: 'block', md: 'none' } }} />

      <Box display='flex' flexDirection='column' overflow='auto' flexGrow={1} gap={2}>
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
      </Box>
    </>
  );
}

export default PatientInfo;
