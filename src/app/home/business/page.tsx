"use client";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Link from "next/link";

export default function Page() {
  const data = [
    { name: "Group A", value: 25 },
    { name: "Group B", value: 25 },
    { name: "Group C", value: 37 },
    { name: "Group D", value: 13 },
  ];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx: any;
    cy: any;
    midAngle: any;
    innerRadius: any;
    outerRadius: any;
    percent: any;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
      <div className="border-solid border-2 border-[#d6d6d6] rounded-[32px] py-5 mr-5">
        <div className="grid grid-cols-3 ">
          <div className=" flex justify-center">
            <div className="relative z-20 w-[320px]">
              <PieChart width={320} height={320}>
                <Pie
                  data={data}
                  cx={155}
                  cy={155}
                  innerRadius={100}
                  outerRadius={160}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                  label={renderCustomizedLabel}
                  labelLine={false}
                >
                  <Cell key={`data1`} fill={"#ffbc4c"} />
                  <Cell key={`data2`} fill={"#f05c5c"} />
                  <Cell key={`data3`} fill={"#28a4cc"} />
                  <Cell key={`data4`} fill={"#28041c"} />
                </Pie>
              </PieChart>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-gray-500">
                  <div className="text-2xl">Total de SIMs</div>
                  <div className="text-4xl text-center font-bold">8.171</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[320px] flex gap-40 col-span-2">
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center">
                <FiberManualRecordIcon sx={{ color: "#ffbc4c", width: 25, marginRight: 2 }} />
                <div>
                  <p className="text-xl">Activada</p>
                  <p className="text-sm">Cantidad de SIMS: 100</p>
                  <p className="text-sm">Porcentaje: 25%</p>
                </div>
              </div>
              <div className="flex items-center">
                <FiberManualRecordIcon sx={{ color: "#f05c5c", width: 25, marginRight: 2 }} />
                <div>
                  <p className="text-xl">Inactiva nueva</p>
                  <p className="text-sm">Cantidad de SIMS: 100</p>
                  <p className="text-sm">Porcentaje: 25%</p>
                </div>
              </div>
              <div className="flex items-center">
                <FiberManualRecordIcon sx={{ color: "#28041c", width: 25, marginRight: 2 }} />
                <div>
                  <p className="text-xl">Desactivada</p>
                  <p className="text-sm">Cantidad de SIMS: 100</p>
                  <p className="text-sm">Porcentaje: 13%</p>
                </div>
              </div>
              <div className="flex items-center">
                <FiberManualRecordIcon sx={{ color: "#28a4cc", width: 25, marginRight: 2 }} />
                <div>
                  <p className="text-xl">Inactiva</p>
                  <p className="text-sm">Cantidad de SIMS: 100</p>
                  <p className="text-sm">Porcentaje: 37%</p>
                </div>
              </div>
            </div>
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center">
                <FiberManualRecordIcon sx={{ color: "#808285", width: 25, marginRight: 2 }} />
                <div>
                  <p className="text-xl">Suspendida</p>
                  <p className="text-sm">Cantidad de SIMS: 0</p>
                  <p className="text-sm">Porcentaje: 0%</p>
                </div>
              </div>
              <div className="flex items-center">
                <FiberManualRecordIcon sx={{ color: "#8bd4e8", width: 25, marginRight: 2 }} />
                <div>
                  <p className="text-xl">Lista para activación</p>
                  <p className="text-sm">Cantidad de SIMS: 0</p>
                  <p className="text-sm">Porcentaje: 0%</p>
                </div>
              </div>
              <div className="flex items-center">
                <FiberManualRecordIcon sx={{ color: "#a89700", width: 25, marginRight: 2 }} />
                <div>
                  <p className="text-xl">Test</p>
                  <p className="text-sm">Cantidad de SIMS: 0</p>
                  <p className="text-sm">Porcentaje: 0%</p>
                </div>
              </div>

              <div>{/* <FiberManualRecordIcon sx={{ color: "#f05c5c", width: 25, marginRight: 2 }} /> */}</div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-[50px] justify-around">
          <div className="bg-[#c8e4f4] p-5">
            <p>Periodo Últimos 30 días:</p>
            <p>$3.143</p>
          </div>
          <div className="bg-[#c8e4f4] p-5">
            <p>Monto facturado:</p>
            <p>$3.143</p>
          </div>
          <div className="bg-[#c8e4f4] p-5">
            <p>Próxima facturación:</p>
            <p>01/09/2023</p>
          </div>
          <div className="bg-[#c8e4f4] p-5">
            <p>Valor promedio SIM:</p>
            <p>$1.010</p>
          </div>
        </div>
      </div>
    </div>
  );
}
