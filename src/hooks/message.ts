import { Employee } from '../types/employee';
import { Message } from '../types/message';
import { useFakeFetch } from './fakeFetcher';

const recipient: Employee = { id: '1', name: 'John', surname: 'Cutter', office: 'A21', specialisation: 'Surgeon', role: 'Doctor', department: 'Surgery' };
const doctor: Employee = { id: '0', name: 'Doctor', surname: 'McDoctorface', office: 'A123', specialisation: 'Surgeon', role: 'Medical Director', department: 'Surgery' };
const administrator: Employee = { id: '42', name: 'Administrator', surname: '', office: '', specialisation: '', role: '', department: '' };
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, diam eget commodo aliquam, dolor tortor interdum metus, eu iaculis ligula nisl non massa. Nulla ut pretium turpis. Morbi ultrices urna sit amet mi volutpat vestibulum. Proin quis enim mauris. Praesent finibus dictum mattis.';

const messages: Message[] = [
  { id: '4', from: doctor, to: recipient, title: 'Please reply', text: lorem, sentDate: new Date(), read: false },
  { id: '3', from: doctor, to: recipient, title: 'Hellooooo', text: lorem, sentDate: new Date('2023-02-12T08:00'), read: false },
  { id: '2', from: doctor, to: recipient, title: 'Hello again', text: lorem, sentDate: new Date('2023-02-11T07:00'), read: false },
  { id: '1', from: doctor, to: recipient, title: 'Hello', text: lorem, sentDate: new Date('2023-02-10T06:00'), read: false },
  { id: '0', from: administrator, to: recipient, title: 'Account activation', text: 'Hello, your account has been activated!', sentDate: new Date('2023-01-01T12:00'), read: true }
];

export function useMessage(id: string) {
  // TODO: Fetching from backend
  const { data, error, isLoading } = useFakeFetch<Message>(messages.find(m => m.id == id));

  return { data, error, isLoading };
}

export function useMessages() {
  // TODO: Fetching from backend
  const { data, error, isLoading } = useFakeFetch<Message[]>(messages);

  return { data, error, isLoading };
}
