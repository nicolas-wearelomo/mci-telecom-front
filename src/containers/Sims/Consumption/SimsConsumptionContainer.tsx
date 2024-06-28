"use client";
import ConsumptionFilters from "@/components/Sims/Consumption/ConsumptionFilters";
import useConsumptionColumn from "@/components/Sims/Consumption/useConsumptionColumns";
import SmartTable from "@/components/SmartTable";
import useGetSimsConsumptions from "@/services/sims/useGetSimsConsumptions";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const SimsConsumptionContainer = () => {
  const [month, setMonth] = useState<string>("06");
  const [year, setYear] = useState<string>("2024");
  const { callback, data, loading } = useGetSimsConsumptions();
  const columns = useConsumptionColumn();

  useEffect(() => {
    callback({ month, year });
  }, [callback, month, year]);

  const graph1 = [
    { name: "Group A", value: data[0]?.total_sims },
    { name: "Group B", value: 1500 },
  ];
  const graph2 = [
    { name: "Group A", value: data[2]?.total_sims },
    { name: "Group B", value: 1500 },
  ];

  return (
    <div className="pr-5 overflow-auto max-h-[800px]">
      <h2 className="text-[#24A2CE] text-3xl mb-5">Detalle planes contratados</h2>
      <ConsumptionFilters month={month} setMonth={setMonth} year={year} setYear={setYear} callback={callback} />

      <>
        <SmartTable columns={columns} rows={data} />
        <div className="mt-10 flex w-full">
          <div className="flex w-full justify-around">
            <div>
              <div>Distribución SIMs locales</div>
              <div className="relative w-[250px] h-[250px]">
                <PieChart width={250} height={250}>
                  <Pie
                    data={graph1}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {graph1.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? "#f05c5c" : "#24A2CE"} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-gray-500 text-sm font-bold">Total SIMS 58</div>
                </div>
              </div>
            </div>
            <div>
              <div>Distribución SIMs globales</div>
              <div className="relative w-[250px] h-[250px]">
                <PieChart width={250} height={250}>
                  <Pie
                    data={graph2}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {graph1.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? "#f05c5c" : "#24A2CE"} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-gray-500 text-sm font-bold">Total SIMS 1238</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default SimsConsumptionContainer;
