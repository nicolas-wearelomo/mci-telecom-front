"use client";
import { RootState } from "@/redux/types";
import useGetOperationDashboard from "@/services/dashboard/useGetOperationDashboard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

  useEffect(() => {
    if (currentUser && currentUser.company) {
      callback({ company: currentUser.company });
    }
  }, [currentUser, callback]);

  useEffect(() => {
    if (data.length) {
      let inicitativeNewCant = 0;
      let testCant = 0;
      let readyActivationCant = 0;
      let desactivatedCant = 0;
      let suspendedCant = 0;
      let pendingCant = 0;
      data.forEach((el: any) => {
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
        } else {
          pendingCant += 1;
        }
      });
      setTotalSims(data.length);
      setIniciativeNew(inicitativeNewCant);
      setTest(testCant);
      setReadyActivation(readyActivationCant);
      setDesactivated(desactivatedCant);
      setSuspended(suspendedCant);
      setPending(pendingCant);
    }
  }, [data]);

  return (
    <div className="overflow-y-auto h-[85vh]">
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
        <Link className="bg-[#24A2CE] text-white py-2 px-5 flex rounded-[16px]" href="/home/information">
          INFORMACIÓN
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-5 h-[70%] pr-5">
        <div className="p-5 border-solid border-2 border-[#d6d6d6] rounded-[32px] h-full col-span-2">
          <p className="text-2xl text-[#24A2CE] font-bold">SIMs Activas sin tráfico durante ...</p>
          <div className="grid grid-cols-3 h-full">
            <div className="flex flex-col items-center h-full justify-end pb-5">
              <div>
                <p className="text-gray-300">306 SIMs</p>
                <p className="text-gray-500 font-bold text-3xl">40%</p>
              </div>
              <div className="h-[60%] bg-[#28a4cc] w-[50px]"></div>
              <p className="text-sm text-gray-400 mt-2">Últimos 60 días</p>
            </div>
            <div className="flex flex-col items-center h-full justify-end pb-5">
              <div>
                <p className="text-gray-300">250 SIMs</p>
                <p className="text-gray-500 font-bold text-3xl">20%</p>
              </div>
              <div className="h-[30%] bg-[#f05c5c] w-[50px]"></div>
              <p className="text-sm text-gray-400 mt-2">Últimos 30 días</p>
            </div>
            <div className="flex flex-col items-center h-full justify-end pb-5">
              <div>
                <p className="text-gray-300">300 SIMs</p>
                <p className="text-gray-500 font-bold text-3xl">30%</p>
              </div>
              <div className="h-[45%] bg-[#ffbc4c] w-[50px]"></div>
              <p className="text-sm text-gray-400 mt-2">Últimos 7 días</p>
            </div>
          </div>
        </div>
        <div className="py-5 px-10 border-solid border-2 border-[#d6d6d6] rounded-[32px] h-ful col-span-3">
          <p>SIMs estancadas (Últimos 30 días consecutivos)</p>
          <div className="flex gap-5 mt-5">
            <p className="text-5xl font-bold text-[#28a4cc]">52%</p>
            <div>
              <p className="text-sm text-gray-500">Respecto total de SIMs</p>
              <p>4.224 Sims Estancadas</p>
            </div>
          </div>
          <div className="w-full grid grid-cols-7 mt-5">
            <p className="text-end pr-5 col-span-2">Iniciativa Nueva</p>
            <div className="w-full bg-gray-300 rounded-full col-span-4 ">
              <div
                className={`w-[${
                  (iniciativeNew * 100) / totalSims + 10
                }%] bg-[#28a4cc] rounded-full text-white text-center `}
              >
                {(iniciativeNew * 100) / totalSims} %
              </div>
            </div>
            <p className="pl-5">{iniciativeNew}</p>
          </div>
          <div className="w-full grid grid-cols-7 mt-5">
            <p className="text-end pr-5 col-span-2">Test</p>
            <div className={`w-full bg-gray-300 rounded-full col-span-4 `}>
              <div className={`w-[11%] bg-[#8a28cc] rounded-full text-white text-center `}>
                {Math.ceil((test * 100) / totalSims)} %
              </div>
            </div>
            <p className="pl-5">{test}</p>
          </div>
          <div className="w-full grid grid-cols-7 mt-5">
            <p className="text-end pr-5 col-span-2">Lista para activación</p>
            <div className="w-full bg-gray-300 rounded-full col-span-4 ">
              <div className="w-[14%] bg-[#ffbc4c] rounded-full text-white text-center">
                {Math.ceil((readyActivation * 100) / totalSims)} %
              </div>
            </div>
            <p className="pl-5">{readyActivation}</p>
          </div>
          <div className="w-full grid grid-cols-7 mt-5">
            <p className="text-end pr-5 col-span-2">Pendiente activación</p>
            <div className="w-full bg-gray-300 rounded-full col-span-4 ">
              <div className="w-[10%] bg-[#ff4cf9] rounded-full text-white text-center">0 %</div>
            </div>
            <p className="pl-5">{pending}</p>
          </div>
          <div className="w-full grid grid-cols-7 mt-5">
            <p className="text-end pr-5 col-span-2">Desactivada</p>
            <div className="w-full bg-gray-300 rounded-full col-span-4 ">
              <div className="w-[48%] bg-[#28041c] rounded-full text-white text-center">
                {Math.ceil((desactivated * 100) / totalSims)} %
              </div>
            </div>
            <p className="pl-5">{desactivated}</p>
          </div>
          <div className="w-full grid grid-cols-7 mt-5">
            <p className="text-end pr-5 col-span-2">Suspendida</p>
            <div className="w-full bg-gray-300 rounded-full col-span-4">
              <div className="w-[10%] bg-[#ff6a4c] rounded-full text-white text-center">
                {Math.ceil((suspended * 100) / totalSims)} %
              </div>
            </div>
            <p className="pl-5">{suspended}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
