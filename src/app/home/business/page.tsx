"use client";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Link from "next/link";
import { RootState } from "@/redux/types";
import { useSelector } from "react-redux";
import useGetOperationDashboard from "@/services/dashboard/useGetOperationDashboard";
import { MenuItem, TextField } from "@mui/material";
import axiosInstance from "@/utils/axiosInstance";
import dayjs from "dayjs";

export default function Page() {
  const { callback, data, loading } = useGetOperationDashboard();
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const [totalSims, setTotalSims] = useState(1);
  const [iniciativeNew, setIniciativeNew] = useState(1);
  const [readyActivation, setReadyActivation] = useState(1);
  const [test, setTest] = useState(0);
  const [desactivated, setDesactivated] = useState(0);
  const [suspended, setSuspended] = useState(0);
  const [pending, setPending] = useState(0);
  const [actived, setActived] = useState(0);
  const [serviceProvider, setServiceProvider] = useState("");
  const [total, setTotal] = useState(0);
  const [valorProm, setValorProm] = useState(0);
  const [expiredDate, setExpiredDate] = useState();

  useEffect(() => {
    if (currentUser && currentUser.company) {
      callback({ company: currentUser.company });
    }
  }, [currentUser, callback]);

  useEffect(() => {
    const handleFilters = async () => {
      if (data.length) {
        let inicitativeNewCant = 0;
        let testCant = 0;
        let readyActivationCant = 0;
        let desactivatedCant = 0;
        let suspendedCant = 0;
        let pendingCant = 0;
        let activedCant = 0;
        let simsTotal = 0;
        let filteredSims = [];
        let expired_date: any = null;
        if (serviceProvider.includes("Movistar")) {
          if (serviceProvider.includes("Locales")) {
            filteredSims = data.filter((el: any) => el.service_provider === "Movistar" && el.sim_global === "F");
          } else {
            filteredSims = data.filter((el: any) => el.service_provider === "Movistar" && el.sim_global === "T");
          }
        } else {
          filteredSims = data.filter((el: any) => el.service_provider === serviceProvider);
        }
        filteredSims.forEach((el: any) => {
          if (el.until_date) {
            if (!expired_date) {
              expired_date = dayjs(el.until_date);
            } else {
              if (expired_date > dayjs(el.until_date)) {
                expired_date = dayjs(el.until_date);
              }
            }
          }
          simsTotal += 1;
          if (el.status === "INACTIVE_NEW") {
            inicitativeNewCant += 1;
          } else if (el.status === "TEST") {
            testCant += 1;
          } else if (el.status === "ACTIVATION_READY") {
            readyActivationCant += 1;
          } else if (el.status === "DEACTIVATED") {
            desactivatedCant += 1;
          } else if (el.status === "SUSPENDED") {
            suspendedCant += 1;
          } else if (el.status === "ACTIVE") {
            activedCant += 1;
          } else {
            pendingCant += 1;
          }
        });
        if (serviceProvider) {
          let subTotal = 0;
          let discounts = 0;
          const billingsRespose = await axiosInstance.get(
            `/billing/getByCompany?month=${dayjs().month() + 1}&year=${dayjs().year()}&company=${
              currentUser.company
            }&provider=${serviceProvider}`
          );
          billingsRespose.data.forEach((sim: any) => {
            const totalNeto = sim.total_value + sim.sms_total + sim.voice_total;
            // Incrementa el subtotal
            subTotal += totalNeto;
            discounts += sim?.discount?.dc_data || 0;
            setTotal((subTotal - discounts) * 0.19 + (subTotal - discounts));
            setValorProm(((subTotal - discounts) * 0.19 + (subTotal - discounts)) / activedCant);
          });
        }
        setExpiredDate(expired_date);
        setTotalSims(simsTotal);
        setIniciativeNew(inicitativeNewCant);
        setTest(testCant);
        setReadyActivation(readyActivationCant);
        setDesactivated(desactivatedCant);
        setSuspended(suspendedCant);
        setPending(pendingCant);
        setActived(activedCant);
      }
    };
    handleFilters();
  }, [data, serviceProvider]);

  const datas = [
    { name: "Group A", value: Math.round(actived * 100) / totalSims },
    { name: "Group B", value: Math.round(test * 100) / totalSims },
    { name: "Group C", value: Math.round(readyActivation * 100) / totalSims },
    { name: "Group D", value: Math.round(desactivated * 100) / totalSims },
    { name: "Group E", value: Math.round(suspended * 100) / totalSims },
    { name: "Group F", value: Math.round(iniciativeNew * 100) / totalSims },
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
        {currentUser?.client_type === 1 ? (
          <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/pooles">
            Pooles
          </Link>
        ) : null}
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/operation">
          Operacion
        </Link>
        <Link className="bg-[#467a15] text-white py-2 px-5 flex rounded-[16px]" href="/home/business">
          Negocio
        </Link>
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/information">
          Información
        </Link>
      </div>{" "}
      <div className="border-solid border-2 border-[#d6d6d6] rounded-[32px] py-5 mr-5">
        <div className="grid grid-cols-3 ">
          <div>
            <div className="flex justify-center">
              <TextField
                select
                size="small"
                sx={{ width: "50%", marginBottom: 2 }}
                label="Seleccionar Proveedor"
                value={serviceProvider}
                onChange={(e) => setServiceProvider(e.target.value)}
              >
                <MenuItem key={"Movistar Local"} value={"Movistar Locales"}>
                  Movistar Local
                </MenuItem>
                <MenuItem key={"Movistar Global"} value={"Movistar Globales"}>
                  Movistar Global
                </MenuItem>
                <MenuItem key={"Entel"} value={"Entel"}>
                  Entel
                </MenuItem>
                <MenuItem key={"Tele2"} value={"Tele2"}>
                  Tele2
                </MenuItem>
                <MenuItem key={"Legacy"} value={1}>
                  Legacy
                </MenuItem>
              </TextField>
            </div>
            <div className=" flex justify-center">
              <div className="relative z-20 w-[320px]">
                <PieChart width={320} height={320}>
                  <Pie
                    data={datas}
                    cx={155}
                    cy={155}
                    innerRadius={100}
                    outerRadius={160}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                    // label={renderCustomizedLabel}
                    labelLine={false}
                  >
                    <Cell key={`data1`} fill={"#ffbc4c"} />
                    <Cell key={`data2`} fill={"#a89700"} />
                    <Cell key={`data3`} fill={"#8bd4e8"} />
                    <Cell key={`data4`} fill={"#28041c"} />
                    <Cell key={`data5`} fill={"#808285"} />
                    <Cell key={`data5`} fill={"#f05c5c"} />
                  </Pie>
                </PieChart>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-gray-500">
                    <div className="text-2xl">Total de SIMs</div>
                    <div className="text-4xl text-center font-bold">{totalSims}</div>
                  </div>
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
                  <p className="text-sm">Cantidad de SIMS: {actived}</p>
                  <p className="text-sm">Porcentaje: {Math.ceil((actived * 100) / totalSims) || 0} %</p>
                </div>
              </div>
              <div className="flex items-center">
                <FiberManualRecordIcon sx={{ color: "#f05c5c", width: 25, marginRight: 2 }} />
                <div>
                  <p className="text-xl">Inactiva nueva</p>
                  <p className="text-sm">Cantidad de SIMS: {iniciativeNew}</p>
                  <p className="text-sm">Porcentaje: {Math.ceil((iniciativeNew * 100) / totalSims) || 0} %</p>
                </div>
              </div>
              <div className="flex items-center">
                <FiberManualRecordIcon sx={{ color: "#28041c", width: 25, marginRight: 2 }} />
                <div>
                  <p className="text-xl">Desactivada</p>
                  <p className="text-sm">Cantidad de SIMS: {desactivated}</p>
                  <p className="text-sm">Porcentaje: {Math.ceil((desactivated * 100) / totalSims) || 0} %</p>
                </div>
              </div>
              {/* <div className="flex items-center">
                <FiberManualRecordIcon sx={{ color: "#28a4cc", width: 25, marginRight: 2 }} />
                <div>
                  <p className="text-xl">Inactiva</p>
                  <p className="text-sm">Cantidad de SIMS: 0</p>
                  <p className="text-sm">Porcentaje: 0 %</p>
                </div>
              </div> */}
            </div>
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center">
                <FiberManualRecordIcon sx={{ color: "#808285", width: 25, marginRight: 2 }} />
                <div>
                  <p className="text-xl">Suspendida</p>
                  <p className="text-sm">Cantidad de SIMS: {suspended}</p>
                  <p className="text-sm">Porcentaje: {Math.ceil((suspended * 100) / totalSims) || 0} %</p>
                </div>
              </div>
              <div className="flex items-center">
                <FiberManualRecordIcon sx={{ color: "#8bd4e8", width: 25, marginRight: 2 }} />
                <div>
                  <p className="text-xl">Lista para activación</p>
                  <p className="text-sm">Cantidad de SIMS: {readyActivation}</p>
                  <p className="text-sm">Porcentaje: {Math.ceil((readyActivation * 100) / totalSims) || 0} %</p>
                </div>
              </div>
              <div className="flex items-center">
                <FiberManualRecordIcon sx={{ color: "#a89700", width: 25, marginRight: 2 }} />
                <div>
                  <p className="text-xl">Test</p>
                  <p className="text-sm">Cantidad de SIMS: {test}</p>
                  <p className="text-sm">Porcentaje: {Math.ceil((test * 100) / totalSims) || 0} %</p>
                </div>
              </div>

              <div>{/* <FiberManualRecordIcon sx={{ color: "#f05c5c", width: 25, marginRight: 2 }} /> */}</div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-[50px] justify-around">
          {/* <div className="bg-[#c8e4f4] p-5">
            <p>Periodo Últimos 30 días:</p>
            <p>$3.143</p>
          </div> */}
          <div className="bg-[#c8e4f4] p-5">
            <p>Monto facturado:</p>
            <p>$ {total.toFixed(0)}</p>
          </div>
          <div className="bg-[#c8e4f4] p-5">
            <p>Próxima facturación:</p>
            <p>{`01/0${dayjs().month() + 2}/${dayjs().year()}`}</p>
          </div>
          <div className="bg-[#c8e4f4] p-5">
            <p>Valor promedio SIM:</p>
            <p>$ {valorProm.toFixed(0)}</p>
          </div>
          <div className="bg-[#c8e4f4] p-5">
            <p>Próximo vencimiento:</p>
            <p>{expiredDate ? dayjs(expiredDate).add(1, "day").format("DD/MM/YYYY") : "Sin Especificar"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
