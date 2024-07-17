"use client";
import CustomTable from "@/components/CustomTable";
import SmsSmartFilter from "@/components/Sims/Sms/SmsSmart/SmsSmartFilter";
import { ModelTable } from "@/models/modelTable";
import useGetSmsSmart from "@/services/sms/useGetSmsSmart";
import { Button, CircularProgress } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import Link from "next/link";
import { useEffect, useState } from "react";

const SmartSmsContainer = () => {
  const { callback, data, loading } = useGetSmsSmart();
  const [from, setFrom] = useState<Dayjs | null>(dayjs());
  const [to, setTo] = useState<Dayjs | null>(dayjs());
  const [sent_by, setSent_by] = useState(null);

  useEffect(() => {
    callback({ from, to });
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
      { header: "Mensaje", field: "text_sent" },
      { header: "Enviado a", field: "sim_icc" },
      { header: "Enviado el", field: "sent_on" },
      { header: "Enviado por", field: "sent_by" },
    ],
    rows: data,
  };

  return (
    <div className="container">
      <div className="flex justify-between">
        <h3 className="mb-5">Envío de SMS</h3>
        <div>
          <Link
            href={"/sms-smart/new-sms"}
            className="mr-10 border-2 border-solid border-[#0E2E4F] rounded-md bg-[#0E2E4F] text-white py-2 px-5"
          >
            + NUEVO SMS
          </Link>
        </div>
      </div>
      <SmsSmartFilter
        setFrom={setFrom}
        setTo={setTo}
        from={from}
        to={to}
        callback={({ from, to }) => callback({ from, to })}
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

export default SmartSmsContainer;
