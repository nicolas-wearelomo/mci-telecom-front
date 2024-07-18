"use client";
import useReportsColumn from "@/components/Reports/useReportsColumns";
import ConsumptionFilters from "@/components/Sims/Consumption/ConsumptionFilters";
import ConsumptionTable from "@/components/Sims/Consumption/ConsumptionTable";
import useConsumptionColumn from "@/components/Sims/Consumption/useConsumptionColumns";
import { RootState } from "@/redux/types";
import useGetGeneralReports from "@/services/reports/useGetGeneralReport";
import useGetSimsConsumptions from "@/services/sims/useGetSimsConsumptions";
import { CircularProgress } from "@mui/material";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Label,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Rectangle,
} from "recharts";

const ReportContainer = () => {
  const [month, setMonth] = useState<string>("06");
  const [year, setYear] = useState<string>("2024");
  const [dataToRender, setDataToRender] = useState([]);
  const { currentUser } = useSelector((state: RootState) => state.auth);

  const { callback, data, loading } = useGetGeneralReports();
  const columns = useReportsColumn();
  useEffect(() => {
    callback({
      month,
      year,
      company: currentUser?.company,
    });
  }, [callback]);

  useEffect(() => {
    if (data.length) {
      const parsedData = data.map((el: any) => ({
        ...el,
        cantidad_sims_activas: `${el.cantidad_sims_activas}`,
        mb_plan: `${el.mb_plan * el.cantidad_sims_activas} MB`,
        consumption_daily_data_val: `${el.consumption_daily_data_val.toFixed(2)} MB`,
        consumption_daily_sms_val: `${el.consumption_daily_sms_val} SMS`,
        consumption_daily_voice_val: `${el.consumption_daily_voice_val.toFixed(2)} MIN`,
        mb_disponibles: `${(el.mb_plan * el.cantidad_sims_activas - el.consumption_daily_data_val).toFixed(2)} MB`,
        mb_sobreconsumo: `0 MB`,
        consumo: `${
          el.cantidad_sims_activas === 0
            ? 0
            : ((el.consumption_daily_data_val * 100) / (el.mb_plan * el.cantidad_sims_activas)).toFixed(2)
        } %`,
      }));
      setDataToRender(parsedData);
    }
  }, [data]);

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

  const graph3 = [
    { name: "0", MB: data?.history?.data[0] },
    { name: "1", MB: data?.history?.data[1] },
    { name: "2", MB: data?.history?.data[2] },
    { name: "3", MB: data?.history?.data[3] },
    { name: "4", MB: data?.history?.data[4] },
    { name: "5", MB: data?.history?.data[5] },
    { name: "6", MB: data?.history?.data[6] },
    { name: "7", MB: data?.history?.data[7] },
    { name: "8", MB: data?.history?.data[8] },
    { name: "9", MB: data?.history?.data[9] },
    { name: "10", MB: data?.history?.data[10] },
    { name: "11", MB: data?.history?.data[11] },
  ];
  const graph4 = [
    { name: "0", sms: data?.history?.sms[0] },
    { name: "1", sms: data?.history?.sms[1] },
    { name: "2", sms: data?.history?.sms[2] },
    { name: "3", sms: data?.history?.sms[3] },
    { name: "4", sms: data?.history?.sms[4] },
    { name: "5", sms: data?.history?.sms[5] },
    { name: "6", sms: data?.history?.sms[6] },
    { name: "7", sms: data?.history?.sms[7] },
    { name: "8", sms: data?.history?.sms[8] },
    { name: "9", sms: data?.history?.sms[9] },
    { name: "10", sms: data?.history?.sms[10] },
    { name: "11", sms: data?.history?.sms[11] },
  ];

  const COLORS = ["#f05c5c", "#24A2CE", "#82ca9d", "#ffbb28"];

  console.log(data);

  return (
    <div className="containerSmart">
      <h2 className="text-[#24A2CE] text-3xl mb-5">Detalle planes contratados</h2>
      <ConsumptionFilters
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        callback={callback}
        company={currentUser?.company}
      />
      {!loading ? (
        <>
          <ConsumptionTable columns={columns} rows={dataToRender} />
          {/* <div className="mt-10 flex w-full justify-around">
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
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={graph3}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="MB" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={graph4}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sms" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
              </BarChart>
            </ResponsiveContainer>
          </div> */}
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default ReportContainer;
