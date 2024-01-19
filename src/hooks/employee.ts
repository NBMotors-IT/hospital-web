import { Employee } from '../types/employee';

const employees: Employee[] = [
  { id: '0', name: 'Doctor', surname: 'McDoctorface', office: 'A123', specialisation: 'Surgeon', role: 'Medical Director', department: 'Surgery', dateOfBirth: new Date('1990-05-15'), pwzNumber: '1234567A', phoneNumber: '123 456 789', email: 'doctor.mcdoctorface@example.com', address: '123 Main Street', postcode: 'AB123CD' },
  { id: '1', name: 'John', surname: 'Cutter', office: 'A21', specialisation: 'Surgeon', role: 'Doctor', department: 'Surgery', dateOfBirth: new Date('1985-08-22'), pwzNumber: '1234567A', phoneNumber: '123 456 789', email: 'john.cutter@example.com', address: '456 Oak Avenue', postcode: 'CD456EF' },
  { id: '2', name: 'Michael', surname: 'Brown', office: 'B10', specialisation: 'Neurosurgeon', role: 'Medical Director', department: 'Neurology', dateOfBirth: new Date('1978-03-10'), pwzNumber: '1234567A', phoneNumber: '123 456 789', email: 'michael.brown@example.com', address: '789 Pine Street', postcode: 'EF789GH' },
  { id: '3', name: 'Peter', surname: 'Smith', office: 'B42', specialisation: 'Anesthesiologist', role: 'Doctor', department: 'Neurology', dateOfBirth: new Date('1982-11-28'), pwzNumber: '1234567A', phoneNumber: '123 456 789', email: 'peter.smith@example.com', address: '101 Cedar Road', postcode: 'GH101IJ' },
  { id: '4', name: 'Sarah', surname: 'Connor', office: 'C75', specialisation: 'Orthopedist', role: 'Medical Director', department: 'Orthopedics', dateOfBirth: new Date('1989-07-05'), pwzNumber: '1234567A', phoneNumber: '123 456 789', email: 'sarah.connor@example.com', address: '202 Birch Lane', postcode: 'IJ202KL' },
  { id: '5', name: 'Emily', surname: 'Jones', office: 'C90', specialisation: 'Orthopedic surgeon', role: 'Doctor', department: 'Orthopedics', dateOfBirth: new Date('1987-02-14'), pwzNumber: '1234567A', phoneNumber: '123 456 789', email: 'emily.jones@example.com', address: '303 Elm Street', postcode: 'KL303MN' },
  { id: '6', name: 'Olivia', surname: 'Taylor', office: 'A900', specialisation: 'Surgeon', role: 'Doctor', department: 'Surgery', dateOfBirth: new Date('1993-09-18'), pwzNumber: '1234567A', phoneNumber: '123 456 789', email: 'olivia.taylor@example.com', address: '404 Maple Avenue', postcode: 'MN404OP' }
];

export function useEmployee(id: string) {
  // TODO: Fetching from backend
  const data = employees.find(e => e.id == id);
  const error = undefined;
  const isLoading = false;

  return { data, error, isLoading };
}

export function useEmployees() {
  // TODO: Fetching from backend
  const data = employees;
  const error = undefined;
  const isLoading = false;

  return { data, error, isLoading };
}
