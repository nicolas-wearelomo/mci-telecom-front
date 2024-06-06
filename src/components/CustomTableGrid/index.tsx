"use client";
import { useState } from "react";
import { CustomTableGridProps } from "./models";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BasicModal from "../BasicModal";

export default function CustomTableGrid({ columns, rows, cols }: CustomTableGridProps) {
  const [open, setOpen] = useState<boolean>(true);
  const [columnSelected, setColumnSelected] = useState<string>("");
  const [orderRows, setOrderRows] = useState<any[]>(rows);
  const [templateRows, setTemplateRows] = useState<string>("grid-cols-8");

  const orderFunction = (key: string) => {
    setColumnSelected(key);
    setOrderRows(
      rows.sort(function (a, b) {
        if (a[key] > b[key]) {
          return 1;
        }
        if (a[key] < b[key]) {
          return -1;
        }
        return 0;
      })
    );
  };

  return (
    <div className={`max-w-[calc(100vw-170px)] overflow-auto pr-5`}>
      <div className={`grid grid-cols-${cols} min-w-[1600px]`}>
        <div className="bg-[#C3F2FE] py-5 px-2 rounded-tl-[16px]">Opciones</div>
        <div className={`col-span-6 bg-[#E7FAFF] py-5 px-2`}>SIMs</div>
        <div className="bg-[#C3F2FE] py-5 px-2 rounded-tr-[16px]">Estado GPRS</div>
        {columns.map((column, index) => (
          <div key={index}>
            <div className={`py-2 px-2 bg-[#F2F2F2] min-w-[200px]`}>
              <span className="cursor-pointer" onClick={() => orderFunction(column.key)}>
                {column.label} {columnSelected === column.key && <KeyboardArrowDownIcon />}
              </span>
            </div>
            {orderRows.map((row, rowIndex) => (
              <div key={rowIndex} className={`${rowIndex % 2 === 1 && "bg-blue-50"} p-2`}>
                {row[column.key]}
              </div>
            ))}
          </div>
        ))}
      </div>
      <BasicModal setOpen={setOpen} open={open} data={{}} />
    </div>
  );
}
