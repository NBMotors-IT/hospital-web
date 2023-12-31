export interface Message {
  id: string,
  from: string,
  title: string,
  text: string,
  sentDate: Date,
  read: boolean
}