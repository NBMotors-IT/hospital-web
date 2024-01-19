import { Employee } from './employee';

export interface Message {
  id: string,
  from: Employee,
  to: Employee,
  title: string,
  text: string,
  sentDate: Date,
  read: boolean
}
