import { Dayjs } from "dayjs";

export interface ModelRecords {
  icc?: string | null;
  company?: string | null;
  from: Dayjs | null;
  to: Dayjs | null;
}
