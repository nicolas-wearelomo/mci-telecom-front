// "use client";
// import HomeContainer from "@/containers/Home/HomeContainer";

// export default function Home() {
// return <HomeContainer />;

"use client";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SelectButton from "@/components/SelectButton";
import Link from "next/link";

export default function Page() {
  const data = [
    { name: "Group A", value: 500 },
    { name: "Group B", value: 500 },
  ];

  const cofiguration = [
    { value: "movistar", label: "loremimpsumloremimpsumloremimp..." },
    { value: "entel", label: "loremimpsumloremimpsumloremimp..." },
  ];

  return (
    <div className="overflow-y-auto h-[85vh]">
      <div className="p-5 flex justify-around border-solid border-2 border-[#d6d6d6] rounded-[32px] mb-7 mr-5">
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/pooles">
          Pooles
        </Link>
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/operation">
          Operacion
        </Link>
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/business">
          Negocio
        </Link>
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/business">
          INFORMACIÓN
        </Link>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-5 h-full pr-5">
          <div className="flex flex-col h-full gap-5 ">
            <div className=" min-h-[220px] flex flex-col justify-between p-5 border-solid border-2 border-[#d6d6d6] rounded-[32px]">
              <h3 className="text-xl ">Resumen del estado de los pooles de datos</h3>
              <div className="text-[#ffbc4c] font-bold">
                <span className="text-4xl pr-3">23</span>
                <span className="text-xl">Pooles en total</span>
              </div>
              <div className="text-gray-500 font-bold">
                <span className="text-4xl pr-3">3</span>
                <span className="text-xl">Grupos de riesgo de exceso</span>
              </div>
              <div className="text-gray-300 font-bold">
                <span className="text-4xl pr-3">0</span>
                <span className="text-xl">Grupos con exceso</span>
              </div>
            </div>
            <div className=" min-h-[440px] bg-white p-5 flex flex-col justify-between border-solid border-2 border-[#d6d6d6] rounded-[32px]">
              <h3 className=" text-lg">Relación de grupos con pooles de datos según su estado actual</h3>
              <div className="grid grid-cols-4 h-[60%]">
                <div className="bg-gray-300 h-full w-[30px] rounded-full m-auto flex items-end justify-center">
                  <div className="h-[50%] flex items-end bg-[#28a4cc] rounded-full w-full justify-center text-white text-xs font-bold pb-2">
                    50%
                  </div>
                </div>
                <div className="bg-gray-300 h-full w-[30px] rounded-full m-auto flex items-end justify-center">
                  <div className="h-[70%] flex items-end bg-[#f05c5c] rounded-full w-full justify-center text-white text-xs font-bold pb-2">
                    70%
                  </div>
                </div>
                <div className="bg-gray-300 h-full w-[30px] rounded-full m-auto flex items-end justify-center">
                  <div className="h-[30%] flex items-end bg-[#ffbc4c] rounded-full w-full justify-center text-white text-xs font-bold pb-2">
                    30%
                  </div>
                </div>
                <div className="bg-gray-300 h-full w-[30px] rounded-full m-auto flex items-end justify-center">
                  <div className="h-[80%] flex items-end bg-[#28041c] rounded-full w-full justify-center text-white text-xs font-bold pb-2">
                    80%
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-10 mt-3">
                <div>Inicio</div>
                <div>Dia 25</div>
              </div>
              <p className="text-center">Escala temporal del ciclo de facturación en porcentaje</p>
            </div>
          </div>
          <div className="col-span-2 bg-white p-5 text-lg border-solid border-2 border-[#d6d6d6] rounded-[32px]">
            <h3>Detalle del pool de datos</h3>
            <div className="grid grid-cols-3">
              <div className="">
                <div className="relative z-20 w-[250px]">
                  <PieChart width={250} height={250}>
                    <Pie
                      data={data}
                      cx={120}
                      cy={120}
                      innerRadius={70}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={0}
                      dataKey="value"
                    >
                      <Cell key={`data1`} fill={"#f05c5c"} />
                      <Cell key={`data2`} fill={"rgb(209 213 219)"} />
                    </Pie>
                  </PieChart>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-gray-500 text-4xl font-bold">50%</div>
                  </div>
                </div>
                <div className="w-[250px] flex flex-col gap-2">
                  <div>
                    Estado <FiberManualRecordIcon sx={{ color: "#f05c5c", width: 15, marginRight: 2 }} />
                  </div>
                  <span className="bg-[#f05c5c] text-white py-1 text-center">En Riesgo de Exceso</span>
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-[#24A2CE] font-bold mb-5">Grupo de subscripción</p>
                <div className="w-[50%] h-16">
                  <SelectButton
                    label={"Seleccionar Grupo de Subscripción"}
                    options={cofiguration}
                    color={"secondary"}
                    fullWidth
                  />
                </div>

                <div className="flex gap-5">
                  <div className="bg-[#24A2CE] text-white px-5 py-2 rounded-[16px] mt-5">
                    <p className="text-base">Tamaño en la pool</p>
                    <p className="font-bold text-center">501 MB</p>
                  </div>
                  <div className="bg-[#24A2CE] text-white px-5 py-2 rounded-[16px] mt-5">
                    <p className="text-base">SIMs en el pool</p>
                    <p className="font-bold text-center">58 SIMs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 justify-center mt-20">
              <div className="bg-[#24A2CE] text-white px-10 py-2 rounded-[16px] mt-5">
                <p className="text-base">Consumo de bono</p>
                <p className="font-bold text-center">110,9 MB</p>
              </div>
              <div className="bg-[#24A2CE] text-white px-10 py-2 rounded-[16px] mt-5">
                <p className="text-base">Excedente traficado</p>
                <p className="font-bold text-center">0 SIMs</p>
              </div>
              <div className="bg-red-500 text-white px-10 py-2 rounded-[16px] mt-5">
                <p className="text-base">Consumo toal</p>
                <p className="font-bold text-center">110 MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
