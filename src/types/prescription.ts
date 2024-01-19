import { Patient } from './patient';

export interface Prescription {
  id: string,
  patient: Patient,
  medicineName: string,
  dose: string,
  prescriptionStartDate: Date,
  prescriptionEndDate: Date
}