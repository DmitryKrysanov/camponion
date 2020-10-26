export interface IParticipantInfo {
  label: string;
  value: string;
}

export interface IParticipant {
  firstName: string;
  lastName: string;
  info: IParticipantInfo[];
}

export interface IEvent {
  title: string;
  description?: string;
  startDate: any;
  endDate: any;
  costEstimation: number;
  meetupLocation?: any;
  eventLocation?: any;
  _id?: string;
  participants?: IParticipant[];
}
