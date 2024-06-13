"use client";
import RangeFilters from "@/components/Sims/Filters/RangeFilters";
import useGetSimsDatails from "@/services/sims/useGetSimsDatails";
import dayjs, { Dayjs } from "dayjs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DataGraphic from "./Charts/DataGraphic";

const SimsDetailContainer = () => {
  const pathName = usePathname();
  const serial_number = pathName.split("/").pop() || null;
  const [from, setFrom] = useState<Dayjs | null>(dayjs());
  const [to, setTo] = useState<Dayjs | null>(dayjs());
  const { callback, data, loading } = useGetSimsDatails();

  useEffect(() => {
    if (serial_number) {
      callback({ serial_number, from, to });
    }
  }, [callback]);

  return (
    <div>
      <RangeFilters
        setFrom={setFrom}
        setTo={setTo}
        from={from}
        to={to}
        callback={({ from, to }) => callback({ serial_number, from, to })}
      />
      <div className="mt-10 h-[calc(85vh-35px)] overflow-auto">
        <div className="mt-2">
          <h3 className="mb-10">Consumo de datos</h3>
          <DataGraphic data={data} dataKey={"consumption_daily_data_val"} />
        </div>
        <div className="mt-10">
          <h3 className="mb-10">Consumo de SMS</h3>
          <DataGraphic data={data} dataKey={"consumption_daily_sms_val"} />
        </div>
        <div className="mt-10">
          <h3 className="mb-10">Ciclo de vida</h3>
        </div>
      </div>
    </div>
  );
};

export default SimsDetailContainer;
