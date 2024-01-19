import { Admission } from './admission';

export interface Employee {
  id: string,
  name: string,
  surname: string,
  office: string,
  specialisation: string,
  role: string,
  department: string,
  dateOfBirth?: Date,
  pwzNumber?: string,
  phoneNumber?: string,
  email?: string,
  address?: string,
  postcode?: string
  admissions?: Admission[]
}
