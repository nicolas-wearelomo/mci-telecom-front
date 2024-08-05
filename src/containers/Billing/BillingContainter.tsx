"use client";
import BillingFilters from "@/components/Billing/BillingFilters";
import { RootState } from "@/redux/types";
import useGetBillings from "@/services/billing/useGetBillings";
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

  let subTotal = 0;
  let discounts = 0;

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
              {data.map((sim: any, index: any) => {
                const totalNeto = sim.total_value + sim.sms_total + sim.voice_total;
                // Incrementa el subtotal
                subTotal += totalNeto;
                discounts += sim?.discount?.dc_data || 0;
                return (
                  <div className="flex py-1 text-[#777777] px-2" key={index}>
                    <div className="w-[20%]">{sim.plan_name}</div>
                    <div className="w-[20%]">{sim.commercial_group}</div>
                    <div className="w-[15%]">$ {sim.total_value}</div>
                    <div className="w-[15%]">$ {sim.total_overConsumption}</div>
                    <div className="w-[10%]">$ {sim.sms_total}</div>
                    <div className="w-[10%]">$ {sim.voice_total.toFixed(0)}</div>
                    <div className="w-[10%]">$ {totalNeto.toFixed(0)}</div>
                  </div>
                );
              })}
              <div className="flex px-2 font-bold gap-7">
                <div className="w-[90%] flex justify-end">Sub Total </div>
                <div className="w-[10%]">$ {subTotal.toFixed(0)}</div>
              </div>
              <div className="flex px-2 font-bold gap-7">
                <div className="w-[90%] flex justify-end">Total descuentos datos</div>
                <div className="w-[10%]">- $ {discounts.toFixed(0)}</div>
              </div>
              <div className="flex px-2 font-bold gap-7">
                <div className="w-[90%] flex justify-end">Total Neto</div>
                <div className="w-[10%]">$ {(subTotal - discounts).toFixed(0)}</div>
              </div>
              <div className="flex px-2 font-bold gap-7">
                <div className="w-[90%] flex justify-end">Iva 19%</div>
                <div className="w-[10%]">$ {((subTotal - discounts) * 0.19).toFixed(0)}</div>
              </div>
              <div className="flex px-2 font-bold gap-7">
                <div className="w-[90%] flex justify-end">Total</div>
                <div className="w-[10%]">$ {((subTotal - discounts) * 0.19 + (subTotal - discounts)).toFixed(0)}</div>
              </div>
            </div>
          </div>
          <div>
            {data?.map((el: any, index: any) => (
              <div className="mb-20" key={index}>
                <p className="text-[#24A2CE] font-bold mb-5">{el.plan_name}</p>
                <p className="font-bold mb-2">Resumen del plan</p>
                <div className="grid grid-cols-2 gap-20">
                  <div>
                    <div className="flex justify-between">
                      <p>N° de SIMs</p>
                      <p>{el.sims.length}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Nº de SIMs activas en el periodo</p>
                      <p>{el.sims_active}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Nº de MB Contratados en el periodo</p>
                      <p>{el.mb_plan * el.sims_active} MB</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Nº de MB consumidos en el periodo</p>
                      <p>{el.consumption_data.toFixed(2)} MB</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Nº minutos en el periodo</p>
                      <p>{el.consumption_voice.toFixed(2)} MIN</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <p>Nº de SMS enviados</p>
                      <p>{el.consumption_sms} SMS</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Valor Cargo Fijo</p>
                      <p>{el.value_plan}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Valor SMS</p>
                      <p>$ {el.value_sms}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Valor MB Exceso</p>
                      <p>$ {el.value_data_extra}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Valor llamada por minuto</p>
                      <p>$ {el.value_voice}</p>
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
                    {el.sims.map((sim: any, index: any) => (
                      <div className="flex px-2 py-1 text-[#777777]" key={index}>
                        <div className="w-full">{sim.sim_icc}</div>
                        <div className="w-full">{sim.status}</div>
                        <div className="w-full">{sim.monthly_data}</div>
                        <div className="w-full">{sim.monthly_sms}</div>
                        <div className="w-full">{sim.monthly_voice}</div>
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
