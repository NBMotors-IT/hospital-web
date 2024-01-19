import { Admission } from './admission';

export interface Referral {
  id: string,
  admission: Admission,
  date: Date,
  referralType: string,
  additionalInformation: string
}