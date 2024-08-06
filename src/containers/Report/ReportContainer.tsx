"use client";
import StackedBar from "@/components/Reports/StackedBar";
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
  const [graph1, setGraph1] = useState<any>([]);
  const [graph2, setGraph2] = useState<any>([]);
  const [graph3, setGraph3] = useState<any>([]);
  const [graph4, setGraph4] = useState<any>([]);
  const [billings, setBillings] = useState<any>([]);
  // const [graph5, setGraph5] = useState<any>([]);
  // const [graph6, setGraph6] = useState<any>([]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const { currentUser } = useSelector((state: RootState) => state.auth);

  const { callback, data, loading } = useGetGeneralReports();
  const columns = useReportsColumn();

  useEffect(() => {
    callback({
      month,
      year,
      company: currentUser?.company,
    });
  }, [callback, month, year, currentUser]);

  useEffect(() => {
    if (data?.data?.length) {
      const parsedData = data.data.map((el: any) => ({
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

  useEffect(() => {
    if (data?.acumulado) {
      setGraph1([
        {
          name: "Desactivado",
          value: (data.acumulado[0]?.cantidad_sims || 0) - (data.acumulado[0]?.cantidad_sims_activas || 0),
        },
        { name: "Activado", value: data.acumulado[0]?.cantidad_sims_activas || 0 },
      ]);
      setGraph2([
        {
          name: "Desactivado",
          value: (data.acumulado[1]?.cantidad_sims || 0) - (data.acumulado[1]?.cantidad_sims_activas || 0),
        },
        { name: "Activado", value: data.acumulado[1]?.cantidad_sims_activas || 0 },
      ]);
      setGraph3([
        {
          name: "Desactivado",
          value: (data.acumulado[2]?.cantidad_sims || 0) - (data.acumulado[2]?.cantidad_sims_activas || 0),
        },
        { name: "Activado", value: data.acumulado[2]?.cantidad_sims_activas || 0 },
      ]);
      setGraph4([
        {
          name: "Desactivado",
          value: (data.acumulado[3]?.cantidad_sims || 0) - (data.acumulado[3]?.cantidad_sims_activas || 0),
        },
        { name: "Activado", value: data.acumulado[3]?.cantidad_sims_activas || 0 },
      ]);

      // setGraph5(data.history?.data.map((value: number, index: number) => ({ name: `${index}`, MB: value })) || []);
      // setGraph6(data.history?.sms.map((value: number, index: number) => ({ name: `${index}`, sms: value })) || []);
    }
    if (data?.billings) {
      let parseBillings = data.billings.map((el: any) => ({
        date: el.date,
        Datos: el.consumption_data.toFixed(0),
        SMS: el.consumption_sms.toFixed(0),
        Voz: el.consumption_voice.toFixed(0),
      }));
      setBillings(parseBillings);
    }
  }, [data]);

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
          <div className="mt-10 flex w-full justify-around">
            <div>
              <div className="flex flex-col justify-center">
                <div className="text-center font-bold text-xl">Movistar Locales</div>
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
                      {graph1.map((entry: any, index: any) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                      <Label
                        value={`Total: ${data.acumulado[0]?.cantidad_sims || 0}`}
                        position="center"
                        style={{ textAnchor: "middle", fontSize: "16px", fontWeight: "bold" }}
                      />
                    </Pie>
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                  </PieChart>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-center font-bold text-xl">Movistar Globales</div>
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
                      {graph2.map((entry: any, index: any) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                      <Label
                        value={`Total: ${data.acumulado[1]?.cantidad_sims || 0}`}
                        position="center"
                        style={{ textAnchor: "middle", fontSize: "16px", fontWeight: "bold" }}
                      />
                    </Pie>
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                  </PieChart>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-center">
                <div className="text-center font-bold text-xl">Entel</div>
                <div>
                  <PieChart width={400} height={250}>
                    <Pie
                      data={graph3}
                      cx="40%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {graph2.map((entry: any, index: any) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                      <Label
                        value={`Total: ${data.acumulado[2]?.cantidad_sims || 0}`}
                        position="center"
                        style={{ textAnchor: "middle", fontSize: "16px", fontWeight: "bold" }}
                      />
                    </Pie>
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                  </PieChart>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-center font-bold text-xl">Tele2</div>
                <div>
                  <PieChart width={400} height={250}>
                    <Pie
                      data={graph4}
                      cx="40%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {graph2.map((entry: any, index: any) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                      <Label
                        value={`Total: ${data.acumulado[3]?.cantidad_sims || 0}`}
                        position="center"
                        style={{ textAnchor: "middle", fontSize: "16px", fontWeight: "bold" }}
                      />
                    </Pie>
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                  </PieChart>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[500px]">
            <StackedBar data={billings} />
          </div>
          {/* <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={graph5}
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
                data={graph6}
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
