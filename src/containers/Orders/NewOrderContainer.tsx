"use client";
import { Button } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const NewOrderContainer = () => {
  const [planes, setPlanes] = useState<any>("");
  const [datos, setDatos] = useState<any>("");
  const [cantidad, setCantidad] = useState<any>(1);
  const [size, setSize] = useState<any>();
  const [resumen, setResumen] = useState<any>([]);

  const handleAgregar = () => {
    if (planes.length > 0 && datos && cantidad && size) {
      setResumen([...resumen, { planes, datos, cantidad, size }]);
      setPlanes("");
      setDatos("");
      setCantidad(1);
      setSize("");
    }
  };

  const handleEliminar = (index: number) => {
    const newResumen = resumen.filter((_: any, i: any) => i !== index);
    setResumen(newResumen);
  };

  console.log(planes);

  return (
    <>
      <h3>Nuevo Pedido</h3>
      <div className="grid grid-cols-2 gap-20">
        <div>
          <p className="font-bold">Planes</p>
          <p className="mb-2">Selecciona el plan que buscas</p>
          <div className="flex gap-5 flex-wrap pl-5">
            <div
              className={`cursor-pointer ${planes === "Local Smart M2M" ? "text-[#24A2CE]" : "text-[#777777]"}`}
              onClick={() => setPlanes("Local Smart M2M")}
            >
              Local Smart M2M
            </div>
            <div
              className={`cursor-pointer ${
                planes === "Smart Global sin fronteras" ? "text-[#24A2CE]" : "text-[#777777]"
              }`}
              onClick={() => setPlanes("Smart Global sin fronteras")}
            >
              Smart Global sin fronteras
            </div>
            <div
              className={`cursor-pointer ${
                planes === "Smart Global sin fronteras 20% de descuento" ? "text-[#24A2CE]" : "text-[#777777]"
              }`}
              onClick={() => setPlanes("Smart Global sin fronteras 20% de descuento")}
            >
              Smart Global sin fronteras 20% de descuento
            </div>
            <div
              className={`cursor-pointer ${planes === "Local Smart Entel" ? "text-[#24A2CE]" : "text-[#777777]"}`}
              onClick={() => setPlanes("Local Smart Entel")}
            >
              Local Smart Entel
            </div>
            <div
              className={`cursor-pointer ${planes === "Global Smart Tele2 Z4" ? "text-[#24A2CE]" : "text-[#777777]"}`}
              onClick={() => setPlanes("Global Smart Tele2 Z4")}
            >
              Global Smart Tele2 Z4
            </div>
            <div
              className={`cursor-pointer ${planes === "Global Smart Tele2 Z5" ? "text-[#24A2CE]" : "text-[#777777]"}`}
              onClick={() => setPlanes("Global Smart Tele2 Z5")}
            >
              Global Smart Tele2 Z5
            </div>
          </div>
          <p className="font-bold mt-5">Paquetes de datos</p>
          <p className="my-2">Selecciona la cantidad que necesitas cargar</p>
          <div className="flex gap-5 flex-wrap pl-5">
            <div
              className={`cursor-pointer ${datos === "15MB" ? "text-[#24A2CE]" : "text-[#777777]"}`}
              onClick={() => setDatos("15MB")}
            >
              15MB
            </div>
            <div
              className={`cursor-pointer ${datos === "25MB" ? "text-[#24A2CE]" : "text-[#777777]"}`}
              onClick={() => setDatos("25MB")}
            >
              25MB
            </div>
            <div
              className={`cursor-pointer ${datos === "100MB" ? "text-[#24A2CE]" : "text-[#777777]"}`}
              onClick={() => setDatos("100MB")}
            >
              100MB
            </div>
            <div
              className={`cursor-pointer ${datos === "4GB" ? "text-[#24A2CE]" : "text-[#777777]"}`}
              onClick={() => setDatos("4GB")}
            >
              4GB
            </div>
            <div
              className={`cursor-pointer ${datos === "50GB" ? "text-[#24A2CE]" : "text-[#777777]"}`}
              onClick={() => setDatos("50GB")}
            >
              50GB
            </div>
            <div
              className={`cursor-pointer ${datos === "60GB" ? "text-[#24A2CE]" : "text-[#777777]"}`}
              onClick={() => setDatos("60GB")}
            >
              60GB
            </div>
          </div>
          <p className="font-bold mt-5">Cantidad</p>
          <p className="my-2">Selecciona la cantidad</p>
          <div className="flex gap-5">
            <div className="cursor-pointer" onClick={() => setCantidad((prevState: any) => Math.max(1, prevState - 1))}>
              -
            </div>
            <div>{cantidad}</div>
            <div className="cursor-pointer" onClick={() => setCantidad((prevState: any) => prevState + 1)}>
              +
            </div>
          </div>
          <p className="font-bold mt-5">Tipo de SIM</p>
          <p className="my-2">Selecciona el tamaño de la SIM que necesitas</p>
          <div className="flex gap-5 flex-wrap pl-5">
            <div
              className={`cursor-pointer ${size === "Nano" ? "text-[#24A2CE]" : "text-[#777777]"}`}
              onClick={() => setSize("Nano")}
            >
              Nano
            </div>
            <div
              className={`cursor-pointer ${size === "Micro" ? "text-[#24A2CE]" : "text-[#777777]"}`}
              onClick={() => setSize("Micro")}
            >
              Micro
            </div>
            <div
              className={`cursor-pointer ${size === "Estándar" ? "text-[#24A2CE]" : "text-[#777777]"}`}
              onClick={() => setSize("Estándar")}
            >
              Estándar
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Button onClick={handleAgregar} variant="outlined" className="">
              AGREGAR
            </Button>
          </div>
        </div>
        <div>
          <p className="font-bold mb-2">Resumen de planes cargados</p>
          {resumen.map((item: any, index: number) => (
            <div key={index} className="text-[#777777] mb-2 flex justify-between items-center">
              <div className="grid grid-cols-11">
                <p className="col-span-7">{item.planes}</p>
                <p>{item.datos}</p>
                <p>{item.cantidad}</p>
                <p>{item.size}</p>
                <DeleteIcon onClick={() => handleEliminar(index)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewOrderContainer;
