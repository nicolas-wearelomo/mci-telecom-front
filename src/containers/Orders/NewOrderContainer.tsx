"use client";
import { Button, CircularProgress, MenuItem, Radio, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useGetInfoPlan from "@/services/orders/useGetInfoPlan";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import { MicroSim, NanoSim, StandardSim } from "@/utils/svgList";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";

const NewOrderContainer = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const [step, setStep] = useState(1);
  const [envio, setEnvio] = useState(1);
  const [planes, setPlanes] = useState<any>("");
  const [id, setId] = useState<any>();
  const [datos, setDatos] = useState<any>("");
  const [cantidad, setCantidad] = useState<any>(1);
  const [size, setSize] = useState<any>();
  const [resumen, setResumen] = useState<any>([]);
  const [commune, setCommune] = useState("Algarrobo");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComment] = useState("");
  const [contactName, setContactName] = useState("");
  const [tel, setTel] = useState("");

  const router = useRouter();
  const { callback, data, loading } = useGetInfoPlan();

  const handleSubmit = async () => {
    await axiosInstance.post("/orders", {
      resumen,
      commune,
      address,
      number,
      comment,
      contactName,
      shippingType: envio,
      createdBy: currentUser.id,
      company: currentUser.company,
    });

    router.push("/orders");
  };

  useEffect(() => {
    if (currentUser) {
      callback({
        company: currentUser?.company,
      });
    }
  }, [currentUser]);

  const handleAgregar = () => {
    if (planes.length > 0 && datos && cantidad && size) {
      setResumen([...resumen, { planes, datos, cantidad, size, id }]);
      setPlanes("");
      setDatos("");
      setCantidad(1);
      setSize("");
      setId(null);
    }
  };

  const handleEliminar = (index: number) => {
    const newResumen = resumen.filter((_: any, i: any) => i !== index);
    setResumen(newResumen);
  };

  const handlePlanesClick = (planName: string) => {
    setPlanes(planName);
    const selectedPlan = data.carriers.find((plan: any) => plan.name === planName);
    if (selectedPlan) {
      setDatos("");
    }
  };

  const handleDatosClick = (amount: string, id: number) => {
    setDatos(amount);
    setId(id);
  };

  return (
    <div className="container">
      <div className="flex justify-between">
        <h3 className="mb-2">Nuevo Pedido</h3>
        <div className="flex">
          <div>
            <div className="flex gap-5">
              <p className="px-5 text-[#24A2CE] border-solid border-[1px] border-[#24A2CE] rounded-full flex items-center font-bold">
                {step}
              </p>
              <div>
                <p className="text-[#777777]">Paso {step}</p>
                <p className="text-[#24A2CE] font-bold">
                  {step === 1 ? "Selección de paquete de datos" : "Selección de retiro o envío"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex flex-col justify-between h-[calc(100%-40px)]">
          <div className="grid grid-cols-2 gap-20">
            {step === 1 ? (
              <div>
                <p className="font-bold">Planes</p>
                <p className="mb-2">Selecciona el plan que buscas</p>
                <div className="flex gap-5 flex-wrap pl-5">
                  {data?.carriers.map((plan: any) => (
                    <div
                      key={plan.name}
                      className={`cursor-pointer ${planes === plan.name ? "text-[#24A2CE]" : "text-[#777777]"}`}
                      onClick={() => handlePlanesClick(plan.name)}
                    >
                      {plan.name}
                    </div>
                  ))}
                </div>
                <p className="font-bold mt-5">Paquetes de datos</p>
                <p className="my-2">Selecciona la cantidad que necesitas cargar</p>
                <div className="flex gap-5 flex-wrap pl-5">
                  {planes &&
                    data?.carriers
                      .find((plan: any) => plan.name === planes)
                      ?.amount.map((amount: any) => (
                        <div
                          key={amount.planId}
                          className={`cursor-pointer ${datos === amount.amount ? "text-[#24A2CE]" : "text-[#777777]"}`}
                          onClick={() => handleDatosClick(amount.amount, amount.planId)}
                        >
                          {amount.amount}
                        </div>
                      ))}
                </div>
                <p className="font-bold mt-5">Cantidad</p>
                <p className="my-2">Selecciona la cantidad</p>
                <div className="flex gap-5">
                  <div
                    className="cursor-pointer"
                    onClick={() => setCantidad((prevState: any) => Math.max(1, prevState - 1))}
                  >
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
                    className={`cursor-pointer ${
                      size === "Nano" ? "text-[#24A2CE]" : "text-[#777777]"
                    } flex flex-col items-center`}
                    onClick={() => setSize("Estándar")}
                  >
                    <StandardSim />
                    <Radio
                      checked={size === "Estándar"}
                      onChange={() => setSize("Estándar")}
                      value="Estandar"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </div>
                  <div
                    className={`cursor-pointer ${
                      size === "Micro" ? "text-[#24A2CE]" : "text-[#777777]"
                    } flex flex-col items-center justify-end`}
                    onClick={() => setSize("Micro")}
                  >
                    <MicroSim />
                    <Radio
                      checked={size === "Micro"}
                      onChange={() => setSize("Micro")}
                      value="Micro"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </div>
                  <div
                    className={`cursor-pointer ${
                      size === "Estándar" ? "text-[#24A2CE]" : "text-[#777777]"
                    } flex flex-col items-center justify-end`}
                    onClick={() => setSize("Estándar")}
                  >
                    <NanoSim />
                    <Radio
                      checked={size === "Nano"}
                      onChange={() => setSize("Nano")}
                      value="Nano"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </div>
                </div>
                <div className="flex mt-5">
                  <Button onClick={handleAgregar} variant="contained" className="">
                    AGREGAR
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <p className="font-bold">Retiro o envío</p>
                <p>Selecciona una opción</p>
                <div className="flex gap-2 mb-10">
                  <div className="grid grid-cols-2 w-full gap-1 border-2 border-solid border-[#E7FAFF] rounded-md p-1 mt-4">
                    <div
                      className={`${
                        envio === 1 && "bg-[#E7FAFF] text-[#24A2CE] font-bold"
                      } text-center py-1 rounded-md`}
                    >
                      <span className="cursor-pointer text-sm" onClick={() => setEnvio(1)}>
                        Retiro en oficina
                      </span>
                    </div>

                    <div
                      className={`${
                        envio === 2 && "bg-[#E7FAFF] text-[#24A2CE] font-bold"
                      } text-center py-1 rounded-md`}
                    >
                      <span className="cursor-pointer text-sm" onClick={() => setEnvio(2)}>
                        Envío a domicilio
                      </span>
                    </div>
                  </div>
                </div>
                {envio === 1 ? (
                  <div>
                    <p className="font-bold">Retira en oficina MCI Telecom</p>
                    <p>Luis Thayer Ojeda 0115, of 1105, Providencia, Santiago, Chile.</p>
                  </div>
                ) : (
                  <>
                    <p>Selecciona una opción</p>
                    <div className="flex gap-5 my-5">
                      <TextField select value={"Chile"} label="Pais" size="small" fullWidth>
                        <MenuItem value={"Chile"}>Chile</MenuItem>
                      </TextField>
                      <TextField
                        select
                        value={commune}
                        label="Comuna"
                        size="small"
                        fullWidth
                        onChange={(e: any) => setCommune(e.target.value)}
                        SelectProps={{ MenuProps: { PaperProps: { style: { maxHeight: 400 } } } }}
                      >
                        {data.communes.map((el: any) => (
                          <MenuItem value={el.name} key={el.id}>
                            {el.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div className="mb-5">
                      <TextField
                        label="Dirección"
                        value={address}
                        onChange={(e: any) => setAddress(e.target.value)}
                        size="small"
                        fullWidth
                      />
                    </div>
                    <div className="mb-5">
                      <TextField
                        label="Número / Depto / Casa"
                        size="small"
                        fullWidth
                        value={number}
                        onChange={(e: any) => setNumber(e.target.value)}
                      />
                    </div>
                    <div className="mb-5">
                      <TextField
                        label="Ingresar comentario"
                        multiline
                        minRows={4}
                        value={comment}
                        onChange={(e: any) => setComment(e.target.value)}
                        size="small"
                        fullWidth
                      />
                    </div>
                    <div className="flex gap-5">
                      <TextField
                        size="small"
                        fullWidth
                        label="Nombre de contacto"
                        value={contactName}
                        onChange={(e: any) => setContactName(e.target.value)}
                      />
                      <TextField
                        size="small"
                        fullWidth
                        label="Teléfono"
                        value={tel}
                        onChange={(e: any) => setTel(e.target.value)}
                      />
                    </div>
                  </>
                )}
              </div>
            )}
            <div className="">
              <p className="font-bold mb-2">Resumen de planes cargados</p>
              {resumen.map((item: any, index: number) => (
                <div className="grid grid-cols-12 text-[#777777] mb-2" key={index}>
                  <p className="col-span-8">{item.planes}</p>
                  <p>{item.datos}</p>
                  <p>{item.cantidad}</p>
                  <p>{item.size}</p>
                  <DeleteIcon onClick={() => handleEliminar(index)} className="cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
          {step === 1 ? (
            <div className="flex justify-center gap-10">
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  router.push("/orders");
                }}
              >
                Abandonar
              </Button>
              <Button variant="contained" disabled={!resumen.length} onClick={() => setStep(2)}>
                Continuar
              </Button>
            </div>
          ) : (
            <div className="flex justify-center gap-10">
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  router.push("/orders");
                }}
              >
                Abandonar
              </Button>
              <Button variant="outlined" disabled={!resumen.length} onClick={() => setStep(1)}>
                ATRÁS
              </Button>
              <Button variant="contained" disabled={!resumen.length} onClick={handleSubmit}>
                Enviar Solicitud
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewOrderContainer;
