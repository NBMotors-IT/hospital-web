import { AdmissionStatus } from './admissionStatus';
import { Employee } from './employee';
import { Patient } from './patient';
import { Referral } from './referral';

export interface Admission {
  id: string,
  employee: Employee,
  patient: Patient
  status: AdmissionStatus,
  admissionDate: Date,
  dischargeDate?: Date,
  diagnosis?: string,
  historyOfIllness?: string,
  referrals?: Referral[]
}
