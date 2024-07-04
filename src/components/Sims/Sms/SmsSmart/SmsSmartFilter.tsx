"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import { SvgArrowRigth } from "@/utils/svgList";
import dayjs, { Dayjs } from "dayjs";

interface RangeFiltersProps {
  setFrom: (value: Dayjs | null) => void;
  from: Dayjs | null;
  setTo: (value: Dayjs | null) => void;
  to: Dayjs | null;
  callback: (params: { from: Dayjs | null; to: Dayjs | null }) => void;
}

const SmsSmartFilter = ({ setFrom, from, setTo, to, callback }: RangeFiltersProps) => {
  const handleCallback = () => {
    callback({ from, to });
  };
  return (
    <div className="flex gap-2">
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
          ":hover": { bgcolor: "#1454a4" },
        }}
        endIcon={<SvgArrowRigth fill="#24A2CE" />}
      >
        CONSULTAR
      </Button>
    </div>
  );
};

export default SmsSmartFilter;
