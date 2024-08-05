"use client";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

interface CustomTableOrderProps {
  columns: any;
  rows: any[];
}

export default function ConsumptionTable({ columns, rows }: CustomTableOrderProps) {
  interface FiltersProps {
    key: string;
    value: string;
  }

  const [orderRows, setOrderRows] = useState<any[]>(rows);
  const [orderRowsPagination, setOrderRowsPagination] = useState<any[]>([]);
  const [filterValue, setFilterValue] = useState<FiltersProps>({ key: "", value: "" });

  const [page, setPage] = useState(1);
  const rowsPerPage = 25;

  useEffect(() => {
    setOrderRows(rows);
  }, [rows]);

  useEffect(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setOrderRowsPagination(orderRows.slice(startIndex, endIndex));
  }, [orderRows, page]);

  useEffect(() => {
    if (filterValue.key && filterValue.value) {
      const filtered = rows.filter((el: any) => {
        return el[filterValue.key]?.toLowerCase().includes(filterValue.value.toLowerCase());
      });
      setOrderRows(filtered);
    } else {
      setOrderRows(rows);
    }
    setPage(1);
  }, [filterValue, rows]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className="w-full">
      <div className={`max-h-[70vh] overflow-auto`}>
        <div className="inline-flex">
          {columns.orderColumns.map((columnName: any, index: any) => (
            <div className="inline-flex h-[40px] items-center bg-[#C3F2FE]" key={index}>
              {columns[columnName.name].map((subColumnName: any, subIndex: any) => (
                <div style={{ minWidth: subColumnName.width, paddingLeft: "10px" }} key={subIndex}>
                  {subColumnName?.label || "S/D"}
                </div>
              ))}
            </div>
          ))}
        </div>
        {orderRowsPagination.map((row: any, rowIndex: any) => (
          <div
            className={`inline-flex text-[#333333] ${
              rowIndex % 2 ? "bg-[#F8F9FA]" : "bg-[#FFFFFF]"
            } border-b-solid border-b-[1px] border-[#cdcdcd]`}
            key={rowIndex}
          >
            {columns.orderColumns.map((columnName: any, colIndex: any) =>
              columns[columnName.name].map((subColumnName: any, subIndex: any) => (
                <div
                  style={{
                    minWidth: subColumnName.width,
                    paddingTop: "8px",
                    paddingLeft: "10px",
                    paddingBottom: "8px",
                  }}
                  key={subIndex}
                >
                  {row[subColumnName.key] || "S/D"}
                </div>
              ))
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Pagination
          count={Math.ceil(orderRows.length / rowsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
          sx={{
            "& .css-19micn4-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#24A2CE",
            },
            "& .css-19micn4-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover": {
              backgroundColor: "#24A2CE",
            },
          }}
        />
      </div>
    </div>
  );
}
