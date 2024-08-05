"use client";
import { useEffect, useState } from "react";
import { CustomTableOrderProps } from "./models";
import BasicModal from "../BasicModal";
import SettingsIcon from "@mui/icons-material/Settings";
import Pagination from "@mui/material/Pagination";
import AliasModal from "./modals/AliasModal";

export default function SmartTable({
  columns,
  rows,
  step1 = false,
  step2 = false,
  step3 = false,
  settings = true,
  renderMap = false,
}: CustomTableOrderProps) {
  interface FiltersProps {
    key: string;
    value: string;
  }

  const [orderRows, setOrderRows] = useState<any[]>(rows);
  const [orderRowsPagination, setOrderRowsPagination] = useState<any[]>([]);
  const [filterValue, setFilterValue] = useState<FiltersProps>({ key: "", value: "" });
  const [open, setOpen] = useState<boolean>(false);
  const [openAlias, setOpenAlias] = useState<boolean>(false);
  const [rowData, setRowData] = useState({});
  const [page, setPage] = useState(1);
  const rowsPerPage = 25;
  const [aliasChange, setAliasChange] = useState<any>();

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

  useEffect(() => {
    if (aliasChange) {
      let aliasFilter = orderRows.filter((el) => {
        return el.id !== aliasChange.id;
      });

      aliasFilter.push({ ...aliasChange, status: aliasChange.status === "ACTIVE" ? "Activado" : "Desactivado" });

      aliasFilter.sort((a, b) => a.id - b.id);

      setOrderRows(aliasFilter);
    }
  }, [aliasChange]);

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
        {/* Header Row */}
        <div style={{ display: "flex", backgroundColor: "#C3F2FE" }}>
          {columns?.orderColumns?.map((el: any, index: any) => (
            <div
              style={{
                minWidth: el.width,
                textAlign: "center",
                padding: "8px",
                backgroundColor: index % 2 === 0 ? "#C3F2FE" : "#E7FAFF",
              }}
              key={index}
            >
              {el.name.replaceAll("_", " ")}
            </div>
          ))}
        </div>

        {/* Data Rows */}
        {orderRowsPagination.map((row: any, rowIndex: any) => (
          <div
            style={{
              display: "inline-flex",
              backgroundColor: rowIndex % 2 ? "#F8F9FA" : "#FFFFFF",
              borderBottom: "1px solid #cdcdcd",
              alignItems: "center",
            }}
            key={rowIndex} // Ensure unique keys for each row
          >
            {settings && (
              <div
                style={{
                  padding: "8px",
                  cursor: "pointer",
                }}
                onClick={() => handleModalOpen(row)}
              >
                <SettingsIcon />
              </div>
            )}
            {columns.orderColumns.map((columnName: any) =>
              columns[columnName.name].map((subColumnName: any, subIndex: any) => (
                <div
                  style={{
                    minWidth: subColumnName.width,
                    padding: "8px",
                    paddingLeft: settings ? "10px" : "0px",
                  }}
                  key={subColumnName.key || subIndex}
                >
                  {subColumnName.key === "alias_sim" ? (
                    <span onClick={() => handleAliasModalOpen(row)} style={{ color: "#24A2CE", cursor: "pointer" }}>
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

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Pagination
          count={Math.ceil(orderRows.length / rowsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
          sx={{
            "& .Mui-selected": {
              backgroundColor: "#24A2CE",
            },
            "& .Mui-selected:hover": {
              backgroundColor: "#24A2CE",
            },
          }}
        />
      </div>

      {/* Modals */}
      <BasicModal
        setOpen={setOpen}
        open={open}
        data={rowData}
        step1={step1}
        step2={step2}
        step3={step3}
        renderMap={renderMap}
      />
      <AliasModal setOpen={setOpenAlias} open={openAlias} data={rowData} setAliasChange={setAliasChange} />
    </div>
  );
}
