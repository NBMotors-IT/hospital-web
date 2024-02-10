import { Box, Button, FormControl, FormLabel, Input, Option, Select } from '@mui/joy';
import BaseModal from '../../../components/common/modal/BaseModal';

interface Props {
  open: boolean;
  handleClose: () => void;
}

function WritePrescriptionModal({ open, handleClose }: Props) {
  return (
    <BaseModal title='Write a prescription' open={open} handleClose={handleClose} showCloseButton>
      <Box display='flex' flexDirection='column' gap={2}>
        <FormControl>
          <FormLabel>Drug</FormLabel>
          <Select name='drug' placeholder='Select a drug...'>
            <Option value='alprazolam'>Alprazolam</Option>
            <Option value='amitriptyline'>Amitriptyline</Option>
            <Option value='amphetamine'>Amphetamine</Option>
            <Option value='aripiprazole'>Aripiprazole</Option>
            <Option value='asenapine'>Asenapine</Option>
            <Option value='atomoxetine'>Atomoxetine</Option>
            <Option value='brexpiprazole'>Brexpiprazole</Option>
            <Option value='bupropion'>Bupropion</Option>
            <Option value='buspirone'>Buspirone</Option>
            <Option value='carbamazepine'>Carbamazepine</Option>
            <Option value='cariprazine'>Cariprazine</Option>
            <Option value='citalopram'>Citalopram</Option>
            <Option value='clonazepam'>Clonazepam</Option>
            <Option value='clozapine'>Clozapine</Option>
            <Option value='desipramine'>Desipramine</Option>
            <Option value='desvenlafaxine'>Desvenlafaxine</Option>
            <Option value='diazepam'>Diazepam</Option>
            <Option value='duloxetine'>Duloxetine</Option>
            <Option value='escitalopram'>Escitalopram</Option>
            <Option value='esketamine'>Esketamine</Option>
            <Option value='fluoxetine'>Fluoxetine</Option>
            <Option value='gabapentin'>Gabapentin</Option>
            <Option value='hydroxyzine'>Hydroxyzine</Option>
            <Option value='iloperidone'>Iloperidone</Option>
            <Option value='imipramine'>Imipramine</Option>
            <Option value='lamotrigine'>Lamotrigine</Option>
            <Option value='levomilnacipran'>Levomilnacipran</Option>
            <Option value='lisdexamfetamine'>Lisdexamfetamine</Option>
            <Option value='lithium'>Lithium</Option>
            <Option value='lorazepam'>Lorazepam</Option>
            <Option value='lurasidone'>Lurasidone</Option>
            <Option value='methylphenidate'>Methylphenidate</Option>
            <Option value='mirtazapine'>Mirtazapine</Option>
            <Option value='modafinil'>Modafinil</Option>
            <Option value='nortriptyline'>Nortriptyline</Option>
            <Option value='olanzapine'>Olanzapine</Option>
            <Option value='oxcarbazepine'>Oxcarbazepine</Option>
            <Option value='paliperidone'>Paliperidone</Option>
            <Option value='paroxetine'>Paroxetine</Option>
            <Option value='pimavanserin'>Pimavanserin</Option>
            <Option value='pregabalin'>Pregabalin</Option>
            <Option value='propranolol'>Propranolol</Option>
            <Option value='quetiapine'>Quetiapine</Option>
            <Option value='rasagiline'>Rasagiline</Option>
            <Option value='risperidone'>Risperidone</Option>
            <Option value='selegiline'>Selegiline</Option>
            <Option value='sertraline'>Sertraline</Option>
            <Option value='topiramate'>Topiramate</Option>
            <Option value='trazodone'>Trazodone</Option>
            <Option value='valproate'>Valproate</Option>
            <Option value='venlafaxine'>Venlafaxine</Option>
            <Option value='vilazodone'>Vilazodone</Option>
            <Option value='vortioxetine'>Vortioxetine</Option>
            <Option value='ziprasidone'>Ziprasidone</Option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Dosage</FormLabel>
          <Input name='dosage' type='text' />
        </FormControl>

        <FormControl>
          <FormLabel>Valid until</FormLabel>
          <Input name='until' type='text' /> {/* TODO: Date picker, maybe? */}
        </FormControl>

        <Box display='flex' justifyContent='flex-end' gap={1}>
          <Button color='success' sx={{ minWidth: '6em' }} onClick={handleClose}>Prescribe</Button>
          <Button color='neutral' sx={{ minWidth: '6em' }} onClick={handleClose}>Cancel</Button>
        </Box>
      </Box>
    </BaseModal>
  );
}

export default WritePrescriptionModal;