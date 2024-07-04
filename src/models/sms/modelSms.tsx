import { Dayjs } from "dayjs";

export interface ModelSmsSmart {
  sent_by?: number | null;
  from: Dayjs | null;
  to: Dayjs | null;
}
