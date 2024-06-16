import { Box, Button, Card, Divider, FormControl, FormLabel, Grid, Input, Textarea, Typography } from '@mui/joy';
import { useParams } from 'react-router-dom';

import { useState } from 'react';
import DocumentsTable from '../../components/admission/DocumentsTable';
import PatientInfo from '../../components/admission/PatientInfo';
import PrescriptionsTable from '../../components/admission/PrescriptionsTable';
import PrevAdmissionsTable from '../../components/admission/PrevAdmissionsTable';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Admission } from '../../types/admission';
import { useAdmission } from '../../hooks/admission';
import { AdmissionStatus } from '../../types/admissionStatus';
import LoadingIndicator from '../../components/common/LoadingIndicator';
import ErrorDisplay from '../../components/common/ErrorDisplay';
import ConfirmationModal from '../../components/common/modal/ConfirmationModal';
import AddDocumentModal from './modals/AddDocumentModal';
import WritePrescriptionModal from './modals/WritePrescriptionModal';
import WriteReferralModal from './modals/WriteReferralModal';

const linksMap = new Map<string, string>([
  ['/admissions', 'Admissions']
]);

function AdmissionPage() {
  const params = useParams();
  const { data, error, isLoading } = useAdmission(params.admissionId as string);

  // Modals states
  const [writePrescriptionModalOpen, setWritePrescriptionModalOpen] = useState(false);
  const [writeReferralModalOpen, setWriteReferralModalOpen] = useState(false);
  const [addDocumentModalOpen, setAddDocumentModalOpen] = useState(false);
  const [dischargeModalOpen, setDischargeModalOpen] = useState(false);

  if (isLoading) {
    return (
      <LoadingIndicator />
    );
  }

  if (error) {
    return (
      <ErrorDisplay message='Could not load admission' />
    );
  }

  const admission = data as Admission;

  return (
    <>
      {/* Modals */}
      <WritePrescriptionModal
        open={writePrescriptionModalOpen}
        handleClose={() => setWritePrescriptionModalOpen(false)}
      />
      <WriteReferralModal
        open={writeReferralModalOpen}
        handleClose={() => setWriteReferralModalOpen(false)}
      />
      <AddDocumentModal
        open={addDocumentModalOpen}
        handleClose={() => setAddDocumentModalOpen(false)}
      />
      <ConfirmationModal
        title='Confirm Patient Discharge'
        text={`Are you sure you want to discharge patient ${admission.patient.name} ${admission.patient.surname}?`}
        yesText='Discharge'
        noText='Cancel'
        open={dischargeModalOpen}
        handleClose={() => setDischargeModalOpen(false)}
        handleYes={() => setDischargeModalOpen(false)} // TODO: Implement discharge, move into DischargeModal component?
        handleNo={() => setDischargeModalOpen(false)}
      />
      {/* End of Modals */}

      <Breadcrumb links={linksMap} current={`Admission #${params.admissionId}`} />

      <Grid container spacing={2}>
        {/* Main grid */}
        <Grid xs={12} md={10}>
          <Grid container columns={12} spacing={2}> {/* Need to set columns explicitly for some reason */}
            <Grid xs={12} md={6}>
              <Card sx={{ width: '100%', height: { md: 470 } }}>
                <PatientInfo patient={admission.patient} status={admission.status} />
              </Card>
            </Grid>

            <Grid xs={12} md={6}>
              <Card sx={{ minHeight: { xs: 0, md: 330 } }}>
                <FormControl>
                  <FormLabel>Admitted on</FormLabel>
                  <Input readOnly variant='soft' value={new Date(admission.admissionDate!).toLocaleString()} />
                </FormControl>

                <FormControl>
                  <FormLabel>Discharged on</FormLabel>
                  <Input readOnly variant='soft' value={admission.dischargeDate ? new Date(admission.dischargeDate!).toLocaleString() : 'N/A'} />
                </FormControl>

                <FormControl>
                  <FormLabel>Diagnosis</FormLabel>
                  <Input readOnly={admission.status == AdmissionStatus.Discharged} defaultValue={admission.diagnosis} />
                </FormControl>

                <FormControl>
                  <FormLabel>History</FormLabel>
                  <Textarea readOnly={admission.status == AdmissionStatus.Discharged} minRows={5} maxRows={5} defaultValue={admission.historyOfIllness} />
                </FormControl>

                <Button size='lg' disabled={admission.status == AdmissionStatus.Discharged}>Save</Button>
              </Card>
            </Grid>

            {/* Next row */}

            <Grid xs={12} md={6}>
              <Grid container columns={12} spacing={2}>
                <Grid xs={12} md={12}>
                  <Card sx={{ minHeight: { xs: 0, md: 200 } }}>
                    <Typography level='title-md'>Previous admissions</Typography>

                    <PrevAdmissionsTable currentAdmission={admission} />
                  </Card>
                </Grid>

                <Grid xs={12} md={12}>
                  <Card sx={{ minHeight: { xs: 0, md: 200 } }}>
                    <Typography level='title-md'>Prescriptions</Typography>

                    <PrescriptionsTable patient={admission.patient} />
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={12} md={6}>
              <Card>
                <Typography level='title-md'>Documents</Typography>

                <DocumentsTable />
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Sidebar grid */}
        <Grid xs={12} md={2}>
          <Card sx={{ position: 'sticky', top: { xs: 80, xl: 16 }, minHeight: { xs: 0, md: '70vh', xl: '90vh' }, justifyContent: 'space-between' }}>
            <Box display='flex' flexDirection='column' gap={1}>
              <Button variant='soft' disabled={admission.status == AdmissionStatus.Discharged} onClick={() => setWritePrescriptionModalOpen(true)}>Write a prescription</Button>
              <Button variant='soft' disabled={admission.status == AdmissionStatus.Discharged} onClick={() => setWriteReferralModalOpen(true)}>Write a referral</Button>
              <Divider />
              <Button variant='soft' disabled={admission.status == AdmissionStatus.Discharged} onClick={() => setAddDocumentModalOpen(true)}>Add documents</Button>
            </Box>
            <Box display='flex' flexDirection='column' gap={1}>
              <Divider />
              <Button color='success' disabled={admission.status == AdmissionStatus.Discharged} onClick={() => setDischargeModalOpen(true)}>Discharge</Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default AdmissionPage;
