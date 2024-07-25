import * as React from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Modal from "@mui/material/Modal";
import { MenuItem, TextField } from "@mui/material";
import Link from "next/link";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: "70%",
  bgcolor: "background.paper",
  borderRadius: 4,

  p: 2,
};

export default function BasicModal({
  open,
  setOpen,
  data,
  step1,
  step2,
  step3,
}: {
  open: boolean;
  setOpen: any;
  data?: any;
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [step, setStep] = React.useState(1);
  console.log(data);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h4 className="text-[#24A2CE] font-bold text-md">SIM {data.service_provider}</h4>
            <p className="text-sm text-[#777777]">ICC SIM: {data.serial_number}</p>
            <p className="text-sm text-[#777777]">Alias: {data.alias_sim || "S/D"}</p>
          </div>
          <div className="grid grid-cols-3 gap-1 border-2 border-solid border-[#E7FAFF] rounded-md p-1 mt-4">
            {step1 ? (
              <div className={`${step === 1 && "bg-[#E7FAFF] text-[#24A2CE] font-bold"} text-center py-1 rounded-md`}>
                <span className="cursor-pointer text-sm" onClick={() => setStep(1)}>
                  Acciones
                </span>
              </div>
            ) : null}
            {step2 ? (
              <div className={`${step === 2 && "bg-[#E7FAFF] text-[#24A2CE] font-bold"} text-center py-1 rounded-md`}>
                <span className="cursor-pointer text-sm" onClick={() => setStep(2)}>
                  Servicios Activos
                </span>
              </div>
            ) : null}
            {step3 ? (
              <div className={`${step === 3 && "bg-[#E7FAFF] text-[#24A2CE] font-bold"} text-center py-1 rounded-md`}>
                <span className="cursor-pointer text-sm" onClick={() => setStep(3)}>
                  Estado GSM
                </span>
              </div>
            ) : null}
          </div>
          {step1
            ? step === 1 && (
                <>
                  <div className="mt-4">
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-[#777777] text-sm">Acciones disponibles</p>
                      <p className="text-[#777777] text-xs">Última actualización: {data.updated_on}</p>
                    </div>
                  </div>
                  <div className="flex justify-between text-[#777777] text-xs mt-4">
                    <p>Realizar la activación o desactivación de la SIM</p>
                    <Switch defaultChecked={data.activate_on_new_cicle === "T" ? true : false} size="small" />
                  </div>
                  <div className="flex justify-between text-[#777777] text-xs mt-4">
                    <p>Envío de alerta de cambio de IMEI por correo</p>
                    <Switch defaultChecked={data.send_alert_imei === "T" ? true : false} size="small" />
                  </div>
                  <div className="flex justify-between text-[#777777] text-xs mt-4">
                    <p>Configuración en caso de sobre consumo</p>
                    <div className="h-[10px]">
                      <select name="select" className="max-w-[150px] ">
                        <option value={1} selected={data.over_consumption_conf === 1}>
                          La Sim se desactiva y permanece desactivada hasta una activación manual 1
                        </option>
                        <option value={2} selected={data.over_consumption_conf === 2}>
                          La Sim se desactiva y permanece desactivada hasta un cambio de ciclo de facturación
                        </option>
                        <option value={3} selected={data.over_consumption_conf === 3}>
                          La Sim no se desactiva
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between text-[#777777] text-xs mt-4">
                    <p>Configuración en caso de cambio de IMEI</p>
                    <div className="h-[10px]">
                      <select name="select" className="max-w-[150px] ">
                        <option value={1} selected={data.imei_change_conf}>
                          La Sim se desactiva y permanece desactivada hasta una activación manual 1
                        </option>
                        <option value={3} selected={!data.imei_change_conf}>
                          La Sim no se desactiva
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between text-[#777777] text-xs mt-4">
                    <p>Email para envío de alerta de cambio de IMEI</p>
                    <div className="h-[10px]">
                      <input
                        name="email"
                        className="max-w-[148px] min-w-[148px]"
                        placeholder="Ingesar email"
                        style={{ border: "1px solid #777777", borderRadius: "4px", paddingLeft: "10px" }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-[#777777] text-xs mt-4">
                    <Link href={`/sims/view-detail/${data.serial_number}`}>
                      Ver historial de consumo y ciclo de vida para esta SIM
                    </Link>
                  </div>
                  <div className="flex justify-between text-[#777777] text-xs mt-4">
                    <Link href={`/sims/send-sms/${data.serial_number}`}>Enviar SMS a esta SIM</Link>
                  </div>
                </>
              )
            : null}
          {step2
            ? step === 2 && (
                <>
                  <div className="mt-4">
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-[#777777] text-sm">Acciones disponibles</p>
                      <p className="text-[#777777] text-xs">Última actualización: {data.updated_on}</p>
                    </div>
                  </div>
                  <div className="flex justify-between text-[#777777] text-xs mt-4">
                    <p>Voz (llamadas)</p>
                    <div>
                      Entrantes <Switch disabled defaultChecked={false} size="small" />
                      Salientes <Switch disabled defaultChecked={false} size="small" />
                    </div>
                  </div>
                  <div className="flex justify-between text-[#777777] text-xs mt-4">
                    <p>SMS (mensajes)</p>
                    <div>
                      Entrantes <Switch disabled defaultChecked={false} size="small" />
                      Salientes <Switch disabled defaultChecked={false} size="small" />
                    </div>
                  </div>
                  <div className="flex justify-between text-[#777777] text-xs mt-4">
                    <p>Datos (tráfico de datos)</p>
                    <div>
                      Salientes <Switch disabled defaultChecked={false} size="small" />
                    </div>
                  </div>
                </>
              )
            : null}
          {step3
            ? step === 3 && (
                <>
                  <div className="mt-4">
                    <p className="font-bold text-[#777777] text-sm">Estado GSM </p>
                  </div>
                </>
              )
            : null}
        </Box>
      </Modal>
    </div>
  );
}
