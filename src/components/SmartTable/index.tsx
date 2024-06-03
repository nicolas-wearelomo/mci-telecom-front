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
    <>
      <div className={`overflow-x-auto mr-5`}>
        <div className="flex">
          {columns.orderColumns.map((el: any, index: any) => {
            console.log(`${columns.orderColumns.length === index - 1}`);
            return (
              <div
                className={`min-w-[${el.width}px] ${index / 2 === 0 ? "bg-[#C3F2FE]" : "bg-[#E7FAFF]"}  ${
                  index === 0 && "rounded-tl-xl"
                }  ${columns.orderColumns.length === index - 1 && "rounded-tl-xl"} text-center py-2`}
                key={index}
              >
                {el.name.replaceAll("_", " ")}
              </div>
            );
          })}
        </div>
        {/* <div className={`bg-[#C3F2FE] py-5 px-2 rounded-tl-[16px] rounded-tr-[16px] col-span-11`}>{title}</div> */}
        {/* {columns.map((column, index) => (
          <div key={index}>
            <div className="py-2 px-2 bg-[#F2F2F2]">
              <span className="cursor-pointer" onClick={() => orderFunction(column.key)}>
                {column.label} {columnSelected === column.key && <KeyboardArrowDownIcon />}
              </span>
            </div>
            {orderRows.map((row, rowIndex) => {
              return (
                <div key={rowIndex} className={`${rowIndex % 2 === 1 && "bg-blue-50"} p-2 text-gray-500`}>
                  {row[column.key]}
                </div>
              );
            })}
          </div>
        ))} */}
      </div>
      <BasicModal />
    </>
  );
}
