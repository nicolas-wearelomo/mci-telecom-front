"use client";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Link from "next/link";
import useGetCommercialGroup from "@/services/dashboard/useGetCommercialGroup";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { MenuItem, TextField } from "@mui/material";

export default function Page() {
  const { callback, data, loading } = useGetCommercialGroup();
  const [commercialGroup, setCommercialGroup] = useState<string>("");
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const [sims, setSims] = useState<any>([]);
  const [poolSize, setPoolSize] = useState(0);
  const [poolCant, setPoolCant] = useState("");
  const [consumptionData, setConsumptionData] = useState(0);
  const [totalPool, setTotalPool] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    if (currentUser && currentUser.company) {
      callback({ company: currentUser.company });
    }
  }, [currentUser, callback]);

  useEffect(() => {
    if (data?.commercial_group?.length) {
      setTotalPool(data.commercial_group.length);
      setCommercialGroup(data.commercial_group[0]);
    }
  }, [data]);

  useEffect(() => {
    if (data?.consumptions?.length && commercialGroup) {
      const simsFiltered = data.consumpitonByCommercialGroup.find((el: any) => el.commercial_group === commercialGroup);
      if (simsFiltered) {
        setSims(simsFiltered);
        setPoolSize(simsFiltered.mb_totales);
        setPoolCant(`${simsFiltered.sim_count} SIMs`);
        setConsumptionData(simsFiltered.monthlyConsumption);
        setPorcentaje((simsFiltered.monthlyConsumption / simsFiltered.mb_totales) * 100);
      }
    }
  }, [commercialGroup, data]);

  const datas = [
    { name: "consumed", value: Math.round(consumptionData) },
    { name: "total", value: poolSize - consumptionData },
  ];

  return (
    <div className="overflow-y-auto h-[85vh]">
      <div className="p-5 flex justify-around border-solid border-2 border-[#d6d6d6] rounded-[32px] mb-7 mr-5">
        {currentUser?.client_type === 1 ? (
          <Link className="bg-[#467a15] text-white py-2 px-5 flex rounded-[16px]" href="/home/pooles">
            Pooles
          </Link>
        ) : null}
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/operation">
          Operacion
        </Link>
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/business">
          Negocio
        </Link>
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/information">
          Información
        </Link>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-5 pr-5">
          <div className="flex flex-col h-full gap-5 ">
            <div className="min-h-[220px] flex flex-col justify-between p-5 border-solid border-2 border-[#d6d6d6] rounded-[32px]">
              <h3 className="text-xl">Resumen del estado de los pooles de datos</h3>
              <div className="text-[#ffbc4c] font-bold">
                <span className="text-4xl pr-3">{totalPool}</span>
                <span className="text-xl">Pooles en total</span>
              </div>
              <div className="text-gray-500 font-bold">
                <span className="text-4xl pr-3">0</span>
                <span className="text-xl">Grupos de riesgo de exceso</span>
              </div>
              <div className="text-gray-300 font-bold">
                <span className="text-4xl pr-3">0</span>
                <span className="text-xl">Grupos con exceso</span>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-white p-5 text-lg border-solid border-2 border-[#d6d6d6] rounded-[32px]">
            <h3>Detalle del pool de datos</h3>
            <div className="grid grid-cols-3">
              <div className="">
                <div className="relative z-20 w-[250px]">
                  <PieChart width={250} height={250}>
                    <Pie
                      data={datas}
                      cx={120}
                      cy={120}
                      innerRadius={70}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={0}
                      dataKey="value"
                    >
                      <Cell key="consumed" fill="#16A34A" />
                      <Cell key="total" fill="#c1c1c1" />
                    </Pie>
                  </PieChart>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-gray-500 text-4xl font-bold">{porcentaje.toFixed(2)}%</div>
                  </div>
                </div>
                <div className="w-[250px] flex flex-col gap-2">
                  <div>
                    Estado{" "}
                    <FiberManualRecordIcon
                      sx={{
                        color: porcentaje <= 80 ? "#16A34A" : porcentaje <= 100 ? "#EAB308" : "bg-[#f05c5c]",
                        width: 15,
                        marginRight: 2,
                      }}
                    />
                  </div>
                  <span
                    className={`${
                      porcentaje <= 80 ? "bg-green-600" : porcentaje <= 100 ? "bg-yellow-500" : "bg-[#f05c5c]"
                    } text-white py-1 text-center`}
                  >
                    {porcentaje <= 80
                      ? "Sin Riesgo de Exceso"
                      : porcentaje <= 100
                      ? "En Riesgo de Exceso"
                      : "En Exceso"}
                  </span>
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-[#24A2CE] font-bold mb-5">Grupo de subscripción</p>
                <div className="w-[50%]">
                  <TextField
                    select
                    fullWidth
                    label="Grupo de subscripción"
                    value={commercialGroup}
                    onChange={(e) => setCommercialGroup(e.target.value)}
                  >
                    {data?.commercial_group?.map((el: any) => (
                      <MenuItem key={el} value={el}>
                        {el}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                <div className="flex gap-5">
                  <div className="bg-[#24A2CE] text-white px-5 py-2 rounded-[16px] mt-5">
                    <p className="text-base">Tamaño en la pool</p>
                    <p className="font-bold text-center">{poolSize} mb</p>
                  </div>
                  <div className="bg-[#24A2CE] text-white px-5 py-2 rounded-[16px] mt-5">
                    <p className="text-base">SIMs en el pool</p>
                    <p className="font-bold text-center">{poolCant}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 justify-center mt-20">
              <div className="bg-[#24A2CE] text-white px-10 py-2 rounded-[16px] mt-5">
                <p className="text-base">Consumo total</p>
                <p className="font-bold text-center">{consumptionData.toFixed(2)} MB</p>
              </div>
              <div className="bg-[#24A2CE] text-white px-10 py-2 rounded-[16px] mt-5">
                <p className="text-base">Excedente traficado</p>
                <p className="font-bold text-center">0 MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
