"use client";
import { useState } from "react";

export default function Page() {
  const [selected, setSelected] = useState<number>(1);

  return (
    <div className="pr-5 overflow-y-auto h-[85vh] border-solid border-2 border-[#d6d6d6] rounded-[32px] p-5 mr-5">
      <h3 className="text-[#24A2CE] text-2xl">¿Qué tipo de ayuda necesitas?</h3>
      <div className="grid grid-cols-2 py-2 border-solid border-2 border-gray-300 rounded-full mt-5">
        <div
          className={`text-center cursor-pointer py-2 ${
            selected === 1 && "bg-[#E7FAFF] text-[#24A2CE] rounded-full mx-2 font-bold"
          }`}
          onClick={() => setSelected(1)}
        >
          Ayuda plataforma MCI Telecom
        </div>
        <div
          className={`text-center cursor-pointer py-2 ${
            selected === 2 && "bg-[#E7FAFF] text-[#24A2CE] rounded-full mx-2 font-bold"
          }`}
          onClick={() => setSelected(2)}
        >
          Ayuda API Rest Clientes
        </div>
      </div>
      <div className="mt-5">
        {selected === 1 ? (
          <div>
            <p className="font-bold">Pasos recomendados para la solución de problemas</p>
            <p className="text-gray-400">
              La solución de problemas involucra una seria de pruebas para aislar el incidente a unos pocos puntos de
              falla. Gracias a estas pruebas se podrá identificar la causa de la incidecia y su posterior solución.
              Estas pruebas deben hacerse antes de contactar al{" "}
              <span className="font-bold text-black">soprte de MCI Telecom</span>
            </p>
            <div className="grid grid-cols-2 gap-20">
              <div>
                <div className="mt-5">
                  <p className="font-bold">Provisión</p>
                  <p className="text-gray-400">
                    1. Revise en la plataforma de MCItelecom si el estado de la SIM le permite traficar datos. Los
                    estados que permiten traficar datos son:
                  </p>
                  <p className="text-gray-400 pl-2">a. &quot;TEST&quot; </p>
                  <p className="text-gray-400 pl-2">b. &quot;LISTA PARA ACTIVACIÓN&quot;</p>
                  <p className="text-gray-400 pl-2">c. &quot;ACTIVA&quot;</p>
                </div>
                <div className="mt-5">
                  <p className="font-bold">Cobertura</p>
                  <p className="text-gray-400">
                    1. Revise que la SIM está en un lugar donde hay cobertura celular, puede verificar la cobertura en
                    este link.
                  </p>
                  <p className="text-gray-400">
                    2. ¿Hay más dispositivos trabajando en la misma área? Si es así, no hay problemas de cobertura.
                  </p>
                  <p className="text-gray-400">
                    3. Tener en cuenta que la ubicación del dispositivo dentro de un local o caja metálica puede afectar
                    la calidad de la señal.
                  </p>
                </div>
                <div className="mt-5">
                  <p className="font-bold">Dispositivo</p>
                  <p className="text-gray-400">
                    1. Revise si el dispositivo ha sido configurado con el APN correcto (m2m.movistar.cl)
                  </p>
                  <p className="text-gray-400">2. Reinicie el dispositivo.</p>
                  <p className="text-gray-400">
                    Use la SIM en otro dispositivo, si esta vez funciona entonces el problema está en el dispositivo.
                  </p>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <p className="font-bold">SIM</p>
                  <p className="text-gray-400">1. Revise si la SIM está correctamente asentada.</p>
                  <p className="text-gray-400">
                    2. Pruebe otra SIM en el mismo dispositivo. Si esta vez funciona entonces el problema está en la
                    SIM.
                  </p>
                </div>
                <div className="mt-5">
                  <p className="font-bold">Información Histórica</p>
                  <p className="text-gray-400">
                    1. Confirmar si la SIM ha transmitido alguna vez. Si es así, ¿Cuándo dejó de funcionar
                    correctamente? Para verificar esto, debe ingresar al listado de sus SIMs, en la columna Panel se
                    encuentra el ícono que le permite seleccionar la opción: “Ver estado de ciclo de vida de esta SIM”.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
