import { Admission } from '../types/admission';
import { AdmissionStatus } from '../types/admissionStatus';
import { BloodType } from '../types/bloodType';
import { Employee } from '../types/employee';
import { Patient } from '../types/patient';
import { Sex } from '../types/sex';

const doctor: Employee = {
  id: '0',
  name: 'Doctor',
  surname: 'McDoctorface',
  office: 'A123',
  specialisation: 'Surgeon',
  role: 'Medical Director',
  department: 'Surgery'
};

const patient0: Patient = {
  id: '0',
  name: 'John',
  surname: 'Smith',
  sex: Sex.Male,
  dateOfBirth: new Date('1990-12-01'),
  address: '42 Street',
  postCode: '01-234',
  PESEL: '12345678900',
  bloodType: BloodType.ABRhPlus,
  weight: 70,
  height: 180,
  nationality: 'polish',
  phoneNumber: '123456789',
  allergies: 'None',
  emergencyContact: '987654321',
  email: 'john.smith@mail.example'
};

const patient1: Patient = {
  id: '1',
  name: 'Jane',
  surname: 'Doe',
  sex: Sex.Female,
  dateOfBirth: new Date('1991-12-01'),
  address: '12 Street',
  postCode: '01-234',
  PESEL: '12345678900',
  bloodType: BloodType.BRhMinus,
  weight: 60,
  height: 170,
  nationality: 'polish',
  phoneNumber: '123456789',
  allergies: 'None',
  emergencyContact: '987654321',
  email: 'jane.doe@mail.example'
};

const patient2: Patient = {
  id: '2',
  name: 'James',
  surname: 'Smith',
  sex: Sex.Female,
  dateOfBirth: new Date('1989-12-01'),
  address: '1 Street',
  postCode: '01-234',
  PESEL: '12345678900',
  bloodType: BloodType.BRhMinus,
  weight: 99,
  height: 179,
  nationality: 'polish',
  phoneNumber: '123456789',
  allergies: 'None',
  emergencyContact: '987654321',
  email: 'james.smith@mail.example'
};

const diagnosis = 'Lorem ipsum...';
const history = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

const admissions: Admission[] = [
  { id: '0', employee: doctor, patient: patient0, status: AdmissionStatus.Admitted, admissionDate: new Date(), diagnosis: diagnosis, historyOfIllness: history },
  { id: '1', employee: doctor, patient: patient1, status: AdmissionStatus.Waiting, admissionDate: new Date(Date.now() - 1 * (60 * 60 * 1000)), diagnosis: diagnosis, historyOfIllness: history },
  { id: '2', employee: doctor, patient: patient2, status: AdmissionStatus.Discharged, admissionDate: new Date(Date.now() - 2 * (60 * 60 * 1000)), diagnosis: diagnosis, historyOfIllness: history }
];

export function useAdmission(id: string) {
  // TODO: Fetching from backend
  const data = admissions.find(a => a.id == id);
  const error = undefined;
  const isLoading = false;

  return { data, error, isLoading };
}

export function useAdmissions() {
  // TODO: Fetching from backend
  const data = admissions;
  const error = undefined;
  const isLoading = false;

  return { data, error, isLoading };
}
