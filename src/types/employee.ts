export interface Employee {
  id: string,
  name: string,
  surname: string,
  office: string,
  specialisation: string,
  role: string,
  department: string,
  dateOfBirth?: Date,
  pzw?: string,
  phone?: string,
  email?: string,
  address?: string,
  postcode?: string
}
