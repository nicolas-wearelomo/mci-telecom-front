"use client";
import BillingFilters from "@/components/Billing/BillingFilters";
import CustomTable from "@/components/CustomTable";
import SmartMovistarFilters from "@/components/Sims/SmartMovistar/SmartMovistarFilters";
import SmartMovistarTable from "@/components/Sims/SmartMovistar/SmartMovistartable";
import SmartTable from "@/components/SmartTable";
import useSmartMovistarColumn from "@/components/SmartTable/columns/useSmartMovistarColumns";
import { ModelTable } from "@/models/modelTable";
import { RootState } from "@/redux/types";
import useGetBillings from "@/services/billing/useGetBillings";
import useGetAllMovistarSims from "@/services/sims/movistar/useGetAllMovistarSims";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BillingContainter = () => {
  const [month, setMonth] = useState<string>("04");
  const [year, setYear] = useState<string>("2024");
  const [provider, setProvider] = useState<string>("Sims Smart Movistar Locales");
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { callback, data, loading } = useGetBillings({ company: currentUser?.company });

  useEffect(() => {
    callback({ month: month, year: year, provider: provider });
  }, [callback]);

  console.log(data);

  interface HomeTable {
    id: number;
    number: number;
    user: string;
    sucess: string;
    date: string;
  }

  const homeTableData: ModelTable<HomeTable> = {
    columns: [
      { header: "Plan", field: "plan_name" },
      { header: "Grupo de Suscripción", field: "commercial_group" },
      { header: "Cargo fijo Mensual", field: "total_value" },
      { header: "Exceso de Tráfico", field: "sent_by" },
      { header: "Cargo por SMS", field: "sms_total" },
      { header: "Cargo por Voz", field: "sent_by" },
      { header: "Total Neto", field: "sent_by" },
    ],
    rows: data || [],
  };

  const detail: ModelTable<HomeTable> = {
    columns: [
      { header: "Plan", field: "plan_name" },
      { header: "Grupo de Suscripción", field: "commercial_group" },
      { header: "Cargo fijo Mensual", field: "total_value" },
      { header: "Exceso de Tráfico", field: "sent_by" },
      { header: "Cargo por SMS", field: "sms_total" },
      { header: "Cargo por Voz", field: "sent_by" },
      { header: "Total Neto", field: "sent_by" },
    ],
    rows: data || [],
  };

  return (
    <div className="container">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <BillingFilters
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            callback={callback}
            setProvider={setProvider}
            provider={provider}
          />
          <div className="mt-5 mb-10">
            <div>
              <div className="flex bg-[#C3F2FE] rounded-t-xl py-2 px-2">
                <div className=" text-[#24A2CE] font-bold w-[20%]">Plan</div>
                <div className=" text-[#24A2CE] font-bold w-[20%]">Grupo de Suscripción</div>
                <div className=" text-[#24A2CE] font-bold w-[15%]">Cargo fijo Mensual</div>
                <div className=" text-[#24A2CE] font-bold w-[15%]">Exceso de Tráfico</div>
                <div className=" text-[#24A2CE] font-bold w-[10%]">Cargo por SMS</div>
                <div className=" text-[#24A2CE] font-bold w-[10%]">Cargo por Voz</div>
                <div className=" text-[#24A2CE] font-bold w-[10%]">Total Neto</div>
              </div>
              {data.map((sim: any) => (
                <div className="flex py-1 text-[#777777] px-2">
                  <div className="w-[20%]">{sim.plan_name}</div>
                  <div className="w-[20%]">{sim.commercial_group}</div>
                  <div className="w-[15%]">{sim.total_value}</div>
                  <div className="w-[15%]">0</div>
                  <div className="w-[10%]">{sim.sms_total}</div>
                  <div className="w-[10%]">{sim.voice_total.toFixed(2)}</div>
                  <div className="w-[10%]">{(sim.total_value + sim.sms_total + sim.voice_total).toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {data?.map((el: any) => (
              <div className="mb-20">
                <p className="text-[#24A2CE] font-bold mb-5">{el.data_plan}</p>
                <p className="font-bold mb-2">Resumen del plan</p>
                <div className="grid grid-cols-2 gap-20">
                  <div>
                    <div className="flex justify-between">
                      <p>N° de SIMs</p>
                      <p>{el.total_sims}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Nº de SIMs activas en el periodo</p>
                      <p>{el.active_sims}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Nº de MB Contratados en el periodo</p>
                      <p>{el.data_total}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Nº de MB consumidos en el periodo</p>
                      <p>{el.consumption_monthly_data_val.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Nº minutos en el periodo</p>
                      <p>{el.consumption_monthly_voice_val.toFixed(2)}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <p>Nº de SMS enviados</p>
                      <p>{el.consumption_monthly_sms_val}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Valor Cargo Fijo</p>
                      <p>{el.value_plan}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Valor SMS</p>
                      <p>{el.sms_value}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Valor SMS</p>
                      <p>{el.mb_extra_value}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Valor llamada por minuto</p>
                      <p>{el.voice_value}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-bold my-2">Detalle</p>
                  <div>
                    <div className="flex bg-[#C3F2FE] rounded-t-xl p-2">
                      <div className="w-full text-[#24A2CE] font-bold">ICC</div>
                      <div className="w-full text-[#24A2CE] font-bold">Estado SIM</div>
                      <div className="w-full text-[#24A2CE] font-bold">Datos Consumidos</div>
                      <div className="w-full text-[#24A2CE] font-bold">SMS Consumidos</div>
                      <div className="w-full text-[#24A2CE] font-bold">Minutos Consumidos</div>
                    </div>
                    {el.sims.map((sim: any) => (
                      <div className="flex px-2 py-1 text-[#777777]">
                        <div className="w-full">{sim.summary_icc}</div>
                        <div className="w-full">{sim.status}</div>
                        <div className="w-full">{sim.consumption_monthly_data_val}</div>
                        <div className="w-full">{sim.consumption_monthly_sms_val}</div>
                        <div className="w-full">{(sim.consumption_monthly_voice_val / 60).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BillingContainter;
