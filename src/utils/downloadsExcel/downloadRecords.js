import * as XLSX from "xlsx";

const downloadExcel = ({ data, title }) => {
  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, title);

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${title}.xlsx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default downloadExcel;
