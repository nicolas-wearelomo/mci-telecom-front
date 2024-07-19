"use client";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import { SvgArrowRigth } from "@/utils/svgList";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

interface RangeFiltersProps {
  setFrom: (value: Dayjs | null) => void;
  from: Dayjs | null;
  setIcc: (icc: string) => void;
  icc: string;
  setTo: (value: Dayjs | null) => void;
  to: Dayjs | null;
  callback: (params: { from: Dayjs | null; to: Dayjs | null; icc?: string }) => void;
  downloadFunction: () => void;
}

export default function RecordsFilter({
  setFrom,
  from,
  setTo,
  to,
  callback,
  setIcc,
  icc,
  downloadFunction,
}: RangeFiltersProps) {
  const handleCallback = () => {
    callback({ from, to, icc });
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-5">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Desde"
            format="DD-MM-YYYY"
            value={from}
            onChange={(newValue) => setFrom(newValue)}
            slotProps={{ textField: { size: "small", sx: { width: "180px" } } }}
          />
          <DatePicker
            label="Hasta"
            format="DD-MM-YYYY"
            value={to}
            onChange={(newValue) => setTo(newValue)}
            slotProps={{ textField: { size: "small", sx: { width: "180px" } } }}
          />
        </LocalizationProvider>
        <TextField label="Buscar por ICC" size="small" value={icc} onChange={(e) => setIcc(e.target.value)} />
        <Button
          onClick={handleCallback}
          variant="outlined"
          sx={{
            borderRadius: "8px",
            fontWeight: "bold",
            border: "2px solid #1454a4",
            color: "#FFFFFF",
            bgcolor: "#1454a4",
            ":hover": { bgcolor: "#1454a4" },
          }}
          endIcon={<SvgArrowRigth fill="#24A2CE" />}
        >
          CONSULTAR
        </Button>
      </div>
      <div>
        <Button
          variant="outlined"
          onClick={downloadFunction}
          sx={{
            borderRadius: "8px",
            fontWeight: "bold",
            border: "2px solid #1454a4",
            color: "#FFFFFF",
            bgcolor: "#1454a4",
            ":hover": {
              bgcolor: "#1454a4",
              border: "2px solid #1454a4",
            },
          }}
          endIcon={<DownloadIcon fill="#24A2CE" />}
        >
          Descargar Registros
        </Button>
      </div>
    </div>
  );
}
