"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import { SvgArrowRigth } from "@/utils/svgList";
import dayjs, { Dayjs } from "dayjs";

const SmsSmartFilter = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  return (
    <div className="flex gap-2">
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Desde"
            format="DD-MM-YYYY"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Hasta"
            format="DD-MM-YYYY"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
      </div>
      <TextField select label="Enviado a" size="small" sx={{ width: "200px" }}>
        <MenuItem value={"days"}>opcion 1</MenuItem>
        <MenuItem value={"days1"}>opcion 2</MenuItem>
      </TextField>
      <TextField select label="Enviado el" size="small" sx={{ width: "200px" }}>
        <MenuItem value={"days"}>opcion 1</MenuItem>
        <MenuItem value={"days1"}>opcion 2</MenuItem>
      </TextField>
      <TextField select label="Enviado por" size="small" sx={{ width: "200px" }}>
        <MenuItem value={"days"}>opcion 1</MenuItem>
        <MenuItem value={"days1"}>opcion 2</MenuItem>
      </TextField>
      <Button
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
};

export default SmsSmartFilter;
