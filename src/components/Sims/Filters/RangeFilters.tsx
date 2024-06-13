"use client";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MenuItem, TextField } from "@mui/material";
import { SvgArrowRigth } from "@/utils/svgList";
import { Button } from "@mui/material";

interface RangeFiltersProps {
  setFrom: (value: Dayjs | null) => void;
  from: Dayjs | null;
  setTo: (value: Dayjs | null) => void;
  to: Dayjs | null;
  callback: (params: { from: Dayjs | null; to: Dayjs | null }) => void;
}

export default function RangeFilters({ setFrom, from, setTo, to, callback }: RangeFiltersProps) {
  const handleCallback = () => {
    callback({ from, to });
  };

  return (
    <div className="flex gap-5">
      <TextField select label="Filtro" size="small" sx={{ width: "200px" }} defaultValue={"days"}>
        <MenuItem value={"days"}>Días</MenuItem>
      </TextField>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Desde"
          format="DD-MM-YYYY"
          value={from}
          onChange={(newValue) => setFrom(newValue)}
          slotProps={{ textField: { size: "small" } }}
        />
        <DatePicker
          label="Hasta"
          format="DD-MM-YYYY"
          value={to}
          onChange={(newValue) => setTo(newValue)}
          slotProps={{ textField: { size: "small" } }}
        />
      </LocalizationProvider>
      <Button
        onClick={handleCallback}
        variant="outlined"
        sx={{
          borderRadius: "8px",
          fontWeight: "bold",
          border: "2px solid #1454a4",
          color: "#FFFFFF",
          bgcolor: "#1454a4",
        }}
        endIcon={<SvgArrowRigth fill="#24A2CE" />}
      >
        CONSULTAR
      </Button>
    </div>
  );
}
