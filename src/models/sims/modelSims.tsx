import { Dayjs } from "dayjs";

export interface ModelSmartSims {
  company: string;
  service_provider: string;
}

export interface ModelLegacySim {
  company: string;
}
export interface ModelSimsDetail {
  serial_number: string | null;
  from: Dayjs | null;
  to: Dayjs | null;
}
export interface ModelSimsConsumptions {
  company?: string | null;
  month: string | null;
  year: string | null;
  provider?: string | null;
}
