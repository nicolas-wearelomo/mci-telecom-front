"use client";
import { useEffect, useState } from "react";
import { CustomTableOrderProps } from "./models";
import BasicModal from "../BasicModal";
import { TextField } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SmartTable({ columns, rows }: CustomTableOrderProps) {
  interface FiltersProps {
    key: string;
    value: string;
  }

  const [columnSelected, setColumnSelected] = useState<string>("");
  const [orderRows, setOrderRows] = useState<any[]>(rows);
  const [filterValue, setFilterValue] = useState<FiltersProps>({ key: "", value: "" });
  const [open, setOpen] = useState<boolean>(true);
  const [rowData, setRowData] = useState({});

  useEffect(() => {
    setOrderRows(rows);
  }, [rows]);

  const orderFunction = (key: string) => {
    setColumnSelected(key);
    setOrderRows(
      rows.slice().sort((a, b) => {
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

  const handleChangeFilters = (e: any, subColumnName: string) => {
    setFilterValue({ key: subColumnName, value: e.target.value });
  };

  useEffect(() => {
    if (filterValue.key && filterValue.value) {
      const filtered = rows.filter((el: any) => {
        return el[filterValue.key]?.toLowerCase().includes(filterValue.value.toLowerCase());
      });
      console.log(filtered);
      setOrderRows(filtered);
    } else {
      setOrderRows(rows);
    }
  }, [filterValue, rows]);

  const handleModalOpen = (data: any) => {
    setOpen(true);
    setRowData(data);
  };

  return (
    <div className="w-[95%]">
      <div className={`max-h-[70vh] overflow-auto`}>
        <div className="flex">
          {columns.orderColumns.map((el: any, index: any) => (
            <div
              className={`${index % 2 === 0 ? "bg-[#C3F2FE]" : "bg-[#E7FAFF]"} ${index === 0 && "rounded-tl-xl"} ${
                columns.orderColumns.length === index - 1 && "rounded-tl-xl"
              } text-center py-2`}
              style={{ minWidth: el.width }}
              key={index}
            >
              {el.name.replaceAll("_", " ")}
            </div>
          ))}
        </div>
        <div className="flex">
          {columns.orderColumns.map((columnName: any, index: any) => (
            <div className="flex h-[80px] items-center bg-[#F2F2F2]" key={index}>
              {columns[columnName.name].map((subColumnName: any, subIndex: any) => (
                <div style={{ minWidth: subColumnName.width, paddingLeft: "10px" }} key={subIndex}>
                  {subColumnName?.label || "S/D"}
                  <div className="">
                    <TextField
                      size="small"
                      className="w-[80%]"
                      value={filterValue.key === subColumnName.key ? filterValue.value : ""}
                      onChange={(e) => handleChangeFilters(e, subColumnName.key)}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {orderRows.map((row: any, rowIndex: any) => (
          <div className="flex text-[#333333]" key={rowIndex}>
            <SettingsIcon
              sx={{ marginTop: "16px", padding: "2px" }}
              className="cursor-pointer"
              onClick={() => handleModalOpen(row)}
            />
            {columns.orderColumns.map((columnName: any, colIndex: any) =>
              columns[columnName.name].map((subColumnName: any, subIndex: any) => (
                <div style={{ minWidth: subColumnName.width, paddingTop: "16px", paddingLeft: "10px" }} key={subIndex}>
                  {row[subColumnName.key] || "S/D"}
                </div>
              ))
            )}
          </div>
        ))}
      </div>
      <BasicModal setOpen={setOpen} open={open} data={rowData} />
    </div>
  );
}
