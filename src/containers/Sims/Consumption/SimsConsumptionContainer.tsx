"use client";
import ConsumptionFilters from "@/components/Sims/Consumption/ConsumptionFilters";
import useConsumptionColumn from "@/components/Sims/Consumption/useConsumptionColumns";
import SmartTable from "@/components/SmartTable";
import useGetSimsConsumptions from "@/services/sims/useGetSimsConsumptions";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Label } from "recharts";

const SimsConsumptionContainer = () => {
  const [month, setMonth] = useState<string>("06");
  const [year, setYear] = useState<string>("2024");
  const { callback, data, loading } = useGetSimsConsumptions();
  const columns = useConsumptionColumn();

  useEffect(() => {
    callback({ month, year });
  }, [callback, month, year]);

  const graph1 = [
    { name: "Desactivado", value: data?.status?.local.inactive_local },
    { name: "Activado", value: data?.status?.local.active_local },
    { name: "Lista para activación", value: data?.status?.local.activation_ready_local },
    { name: "Test", value: data?.status?.local.test_local },
  ];
  const graph2 = [
    { name: "Desactivado", value: data?.status?.global.inactive_global },
    { name: "Activado", value: data?.status?.global.active_global },
    { name: "Lista para activación", value: data?.status?.global.activation_ready_global },
    { name: "Test", value: data?.status?.global.test_global },
  ];

  const COLORS = ["#f05c5c", "#24A2CE", "#82ca9d", "#ffbb28"];

  console.log(data);
  return (
    <div className="containerSmart">
      <h2 className="text-[#24A2CE] text-3xl mb-5">Detalle planes contratados</h2>
      <ConsumptionFilters month={month} setMonth={setMonth} year={year} setYear={setYear} callback={callback} />
      {!loading ? (
        <>
          <SmartTable columns={columns} rows={data?.data} />
          <div className="mt-10 flex w-full justify-around">
            <div className="flex flex-col items-center">
              <div>Distribución SIMs locales</div>
              <div>
                <PieChart width={400} height={250}>
                  <Pie
                    data={graph1}
                    cx="40%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {graph1.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <Label
                      value={`Total: ${data?.status?.local.total_local}`}
                      position="center"
                      style={{ textAnchor: "middle", fontSize: "16px", fontWeight: "bold" }}
                    />
                  </Pie>
                  <Legend layout="vertical" verticalAlign="middle" align="right" />
                </PieChart>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>Distribución SIMs globales</div>
              <div>
                <PieChart width={400} height={250}>
                  <Pie
                    data={graph2}
                    cx="40%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {graph2.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <Label
                      value={`Total: ${data?.status?.global.total_global}`}
                      position="center"
                      style={{ textAnchor: "middle", fontSize: "16px", fontWeight: "bold" }}
                    />
                  </Pie>
                  <Legend layout="vertical" verticalAlign="middle" align="right" />
                </PieChart>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default SimsConsumptionContainer;
