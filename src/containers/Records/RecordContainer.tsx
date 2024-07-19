"use client";
import CustomTable from "@/components/CustomTable";
import RecordsFilters from "@/components/Records/RecordsFilter";
import useReportsColumn from "@/components/Reports/useReportsColumns";
import ConsumptionFilters from "@/components/Sims/Consumption/ConsumptionFilters";
import { ModelTable } from "@/models/modelTable";
import { RootState } from "@/redux/types";
import useGetRecords from "@/services/records/useGetRecords";
import useGetGeneralReports from "@/services/reports/useGetGeneralReport";
import { CircularProgress } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import downloadRecords from "../../utils/downloadsExcel/downloadRecords";

const RecordsContainter = () => {
  const [from, setFrom] = useState<Dayjs | null>(dayjs());
  const [to, setTo] = useState<Dayjs | null>(dayjs());
  const [icc, setIcc] = useState<string>("");
  const { currentUser } = useSelector((state: RootState) => state.auth);

  const { callback, data, loading } = useGetRecords();
  const columns = useReportsColumn();
  useEffect(() => {
    callback({
      from,
      to,
      company: currentUser?.company,
      icc,
    });
  }, [callback]);

  interface HomeTable {
    id: number;
    number: number;
    user: string;
    sucess: string;
    date: string;
  }

  const homeTableData: ModelTable<HomeTable> = {
    columns: [
      { header: "Número", field: "id" },
      { header: "Usuario", field: "user_name" },
      { header: "Suceso", field: "event_name" },
      { header: "Fecha y Hora", field: "created_on" },
    ],
    rows: data || [],
  };

  const downloadRecordsFunction = () => {
    const dataToDownload = data.map((el: any) => ({
      Numero: el.id,
      Usuario: el.user_name,
      Suceso: el.event_description,
      Fecha: dayjs(el.created_on).format("DD-MM-YYYY"),
    }));
    downloadRecords({ data: dataToDownload, title: "Registros" });
  };

  return (
    <div className="container">
      <h2 className="text-[#24A2CE] text-3xl mb-5">Detalle planes contratados</h2>
      <RecordsFilters
        setFrom={setFrom}
        from={from}
        to={to}
        setTo={setTo}
        callback={({ from, to, icc }) => callback({ icc, from, to })}
        icc={icc}
        setIcc={setIcc}
        downloadFunction={downloadRecordsFunction}
      />
      {!loading ? (
        <div className="mt-5 mb-10">
          <CustomTable dataTable={homeTableData} />
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default RecordsContainter;
