"use client";
import { useEffect, useState } from "react";
import { CustomTableOrderProps } from "./models";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BasicModal from "../BasicModal";

export default function SmartTable({ columns, rows }: CustomTableOrderProps) {
  const [columnSelected, setColumnSelected] = useState<string>("");
  const [orderRows, setOrderRows] = useState<any[]>(rows);

  useEffect(() => {
    setOrderRows(rows);
  }, [rows]);

  const orderFunction = (key: string) => {
    setColumnSelected(key);
    setOrderRows(
      rows.sort(function (a: any, b: any) {
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
    <div className=" w-[95%]">
      <div className={`max-h-[70vh] overflow-auto`}>
        <div className="flex">
          {columns.orderColumns.map((el: any, index: any) => {
            return (
              <>
                <div
                  className={`${index % 2 === 0 ? "bg-[#C3F2FE]" : "bg-[#E7FAFF]"}  ${
                    index === 0 && "rounded-tl-xl"
                  }  ${columns.orderColumns.length === index - 1 && "rounded-tl-xl"} text-center py-2`}
                  style={{ minWidth: el.width }}
                  key={index}
                >
                  {el.name.replaceAll("_", " ")}
                </div>
              </>
            );
          })}
        </div>
        <div className="flex">
          {columns.orderColumns.map((columnName: any) => {
            return (
              <div className="flex">
                {columns[columnName.name].map((subColumnName: any) => {
                  console.log(subColumnName.width);
                  return <div style={{ minWidth: subColumnName.width }}>{subColumnName?.label || "S/D"}</div>;
                })}
              </div>
            );
          })}
        </div>
        {rows.map((row: any) => {
          return (
            <div className="flex">
              {columns.orderColumns.map((columnName: any) => {
                return columns[columnName.name].map((subColumnName: any) => {
                  return <div style={{ minWidth: subColumnName.width }}>{row[subColumnName.key] || "S/D"}</div>;
                });
              })}
            </div>
          );
        })}
      </div>
      <BasicModal />
    </div>
  );
}
