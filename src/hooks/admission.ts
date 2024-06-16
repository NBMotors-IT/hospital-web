import { Admission } from '../types/admission';
import useFetch from './useFetch';

export function useAdmission(id: string) {
  const { data, error, isLoading } = useFetch<Admission>(`/admissions/${id}`);

  return { data, error, isLoading };
}

export function useAdmissions() {
  const { data, error, isLoading } = useFetch<Admission[]>('/admissions');

  return { data, error, isLoading };
}

export function useAdmissionsForPatient(patientId: string) {
  const { data, error, isLoading } = useFetch<Admission[]>(`/admissions/patient/${patientId}`);

  return { data, error, isLoading };
}
