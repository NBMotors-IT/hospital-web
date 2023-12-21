import { AdmissionStatus } from './admissionStatus';

export interface Admission {
  id: string,
  name: string,
  status: AdmissionStatus,
  datetime: Date
}