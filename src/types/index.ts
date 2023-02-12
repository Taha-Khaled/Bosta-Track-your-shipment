interface TransitEvent {
  timestamp: Date;
  state: string;
}
interface CurrentStatus {
  state: string;
  code: number;
  timestamp: Date;
}
export interface IData {
  provider: string;
  Type: string;
  ScheduleDate: Date;
  CurrentStatus: CurrentStatus;
  TransitEvents: TransitEvent[];
  TrackingNumber: string;
  CreateDate: Date;
  DropOffAddress: string;
  PromisedDate: Date;
}
