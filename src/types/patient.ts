import { Admission } from './admission';
import { BloodType } from './bloodType';
import { Prescription } from './prescription';
import { Sex } from './sex';

export interface Patient {
  id: string,
  name: string,
  surname: string,
  sex: Sex,
  dateOfBirth?: Date,
  address?: string,
  postcode?: string,
  pesel?: string,
  bloodType?: BloodType,
  weight?: number,
  height?: number,
  nationality?: string,
  phoneNumber?: string,
  allergies?: string,
  emergencyContact?: string,
  email?: string,
  admissions?: Admission[],
  prescriptions?: Prescription[]
}
