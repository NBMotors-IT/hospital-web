import { Prescription } from '../types/prescription';
import useFetch from './useFetch';

export function usePrescription(id: string) {
  const { data, error, isLoading } = useFetch<Prescription>(`/prescriptions/${id}`);

  return { data, error, isLoading };
}

export function usePrescriptionsForPatient(patientId: string) {
  const { data, error, isLoading } = useFetch<Prescription[]>(`/prescriptions/patient/${patientId}`);

  return { data, error, isLoading };
}
