import { Employee } from '../types/employee';
import useFetch from './useFetch';

export function useEmployee(id: string) {
  const { data, error, isLoading } = useFetch<Employee>(`/employees/${id}`);

  return { data, error, isLoading };
}

export function useEmployees() {
  const { data, error, isLoading } = useFetch<Employee[]>('/employees');

  return { data, error, isLoading };
}
