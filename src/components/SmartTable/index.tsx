"use client";
import { useEffect, useState } from "react";
import { CustomTableOrderProps } from "./models";
import BasicModal from "../BasicModal";
import { TextField } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Pagination from "@mui/material/Pagination";
import AliasModal from "./modals/AliasModal";

export default function SmartTable({ columns, rows }: CustomTableOrderProps) {
  interface FiltersProps {
    key: string;
    value: string;
  }

  const [columnSelected, setColumnSelected] = useState<string>("");
  const [orderRows, setOrderRows] = useState<any[]>(rows);
  const [orderRowsPagination, setOrderRowsPagination] = useState<any[]>([]);
  const [filterValue, setFilterValue] = useState<FiltersProps>({ key: "", value: "" });
  const [open, setOpen] = useState<boolean>(false);
  const [openAlias, setOpenAlias] = useState<boolean>(false);
  const [rowData, setRowData] = useState({});
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
      setOrderRows(filtered);
    } else {
      setOrderRows(rows);
    }
    setPage(1); // Reset to first page after filter change
  }, [filterValue, rows]);

  const handleModalOpen = (data: any) => {
    setOpen(true);
    setRowData(data);
  };

  const handleAliasModalOpen = (data: any) => {
    setOpenAlias(true);
    setRowData(data);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className="w-[95%]">
      <div className={`max-h-[70vh] min-h-[70vh] overflow-auto`}>
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
        {orderRowsPagination.map((row: any, rowIndex: any) => (
          <div className="flex text-[#333333]" key={rowIndex}>
            <SettingsIcon
              sx={{ marginTop: "16px", padding: "2px" }}
              className="cursor-pointer"
              onClick={() => handleModalOpen(row)}
            />
            {columns.orderColumns.map((columnName: any, colIndex: any) =>
              columns[columnName.name].map((subColumnName: any, subIndex: any) => (
                <div style={{ minWidth: subColumnName.width, paddingTop: "16px", paddingLeft: "10px" }} key={subIndex}>
                  {subColumnName.key === "alias_sim" ? (
                    <span onClick={() => handleAliasModalOpen(row)} className="cursor-pointer text-[#24A2CE]">
                      {row[subColumnName.key] || "Sin alias"}
                    </span>
                  ) : (
                    row[subColumnName.key] || "S/D"
                  )}
                </div>
              ))
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
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
      <BasicModal setOpen={setOpen} open={open} data={rowData} />
      <AliasModal setOpen={setOpenAlias} open={openAlias} data={rowData} />
    </div>
  );
}
