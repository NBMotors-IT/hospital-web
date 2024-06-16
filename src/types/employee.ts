import { Admission } from './admission';

export const DEPARMENTS = [
  'Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics', 'Oncology', 'Dermatology', 'Emergency Medicine', 'Gynecology', 'ENT', 'Urology'
];

export interface Employee {
  id: string,
  name: string,
  surname: string,
  office: string,
  specialisation: string,
  department: string,
  dateOfBirth?: Date,
  pwzNumber?: string,
  phoneNumber?: string,
  email?: string,
  address?: string,
  postcode?: string
  admissions?: Admission[]
}
