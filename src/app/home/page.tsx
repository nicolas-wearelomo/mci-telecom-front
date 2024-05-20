"use client";
import Image from "next/image";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CustomTable from "@/components/CustomTable";
import { ModelTable } from "@/models/modelTable";
import Link from "next/link";

export default function Home() {
  const data = [
    {
      name: "Quectel Wireless Solutions Co Ltd/UG96",
      uv: 4000,
      fill: "#8884d8",
    },
    {
      name: "Quectel Wireless Solutions Co Ltd/Quectel UG96",
      uv: 3000,
      fill: "#ffc658",
    },
    {
      name: "Telit Communications SpA/ME910C1-WW",
      uv: 2000,
      fill: "#ff7300",
    },
    {
      name: "Desconocido/Desconocido",
      uv: 2780,
      fill: "#FF5733",
    },
    {
      name: "MeiG Smart Technology Co Ltd/SLM320-L",
      uv: 1890,
      fill: "#C70039",
    },
    {
      name: "Telit Communications SpA/Telit GE864-QUAD V2",
      uv: 2390,
      fill: "#900C3F",
    },
    {
      name: "Telit Communications SpA/Telit UE910-NAD",
      uv: 3490,
      fill: "#82ca9d",
    },
    {
      name: "Quectel Wireless Solutions Co Ltd/UC15",
      uv: 1890,
      fill: "#C4D3D2",
    },
    {
      name: "Telit Communications SpA/UE910-NAD",
      uv: 2390,
      fill: "#2173CC",
    },
    {
      name: "Gemalto M2M GmbH/Cinterion BGS3",
      uv: 3490,
      fill: "#73730C",
    },
  ];

  interface HomeTable {
    id: number;
    type: string;
    total: number;
  }

  const homeTableData: ModelTable<HomeTable> = {
    columns: [
      { header: "Tipo", field: "type" },
      { header: "Total", field: "total" },
    ],
    rows: [
      { id: 1, type: "Tráfico", total: 0 },
      { id: 2, type: "Cambio de IMEI", total: 0 },
    ],
  };

  return (
    <div className="overflow-y-auto h-[85vh]">
      <div>
        <div className="p-5 flex justify-around border-solid border-2 border-[#d6d6d6] rounded-[32px] mb-7">
          <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/pooles">
            Pooles
          </Link>
          <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/operation">
            Operacion
          </Link>
          <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/business">
            Negocio
          </Link>
          <div className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px] cursor-pointer">INFORMACIÓN</div>
        </div>
      </div>
      <div className="grid grid-cols-3 mr-5 gap-7">
        <div className=" border-solid border-2 border-[#d6d6d6] rounded-[32px] flex justify-center items-center">
          <Image src="/assets/home/map.jpg" alt="Ámerica del Sur" width={400} height={400} />
        </div>
        <div className=" col-span-2 border-solid border-2 border-[#d6d6d6] rounded-[32px] grid grid-rows-2">
          <div className="p-10 pb-0">
            <h2 className="text-[#24A2CE] text-xl font-bold ">Top 10 de fabricantes/modelos</h2>
            <p className="text-sm mb-5">Última Actualización: 27-02-2024 23:07:12</p>
            <div className="max-h-[80%] min-h-[80%] h-[80%] grid grid-cols-2 gap-5">
              <ResponsiveContainer>
                <BarChart width={200} height={200} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  {/* <XAxis dataKey="name" /> */}
                  <YAxis />
                  <Tooltip />
                  {/* <Legend /> */}
                  {/* <Bar data"#8884d8" /> */}
                  <Bar dataKey="uv" />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex flex-col justify-between">
                {data?.map((el, idx) => (
                  <div className="flex" key={idx}>
                    <FiberManualRecordIcon sx={{ color: el.fill, width: 10, marginRight: 2 }} />
                    <p style={{ color: el.fill }}>{el.name} </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-between flex-col">
            <CustomTable dataTable={homeTableData} />
          </div>
        </div>
      </div>
    </div>
  );
}
