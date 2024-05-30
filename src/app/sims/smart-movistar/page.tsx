"use client";
import CustomTableGrid from "@/components/CustomTableGrid";
import SelectButton from "@/components/SelectButton";
import { SvgDownload, SvgEye } from "@/utils/svgList";
import { Button, InputAdornment, Menu, MenuItem, TextField } from "@mui/material";
import Link from "next/link";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import useGetAllMovistarSims from "@/services/sims/movistar/useGetAllMovistarSims";
import SmartMovistarContainer from "@/containers/Sims/SmartMovistar/SmartMovistarContainer";

export default function Page() {
  // const [open, setOpen] = useState(false);
  // const handleClose = () => setOpen(false);
  // const [openNotifaction, setOpenNotifaction] = useState(false);
  // const handleCloseNotifaction = () => setOpenNotifaction(false);
  // const { callback, data, loading } = useGetAllMovistarSims();

  // useEffect(() => {
  //   callback();
  // }, []);

  // console.log(data);

  // const configOptions = [
  //   { value: "overconsumption", label: "Sobreconsumo", link: "/sims/smart-movistar/overconsumption" },
  //   { value: "imei", label: "Cambio de IMEI", link: "/sims/smart-movistar/change-imei" },
  //   { value: "views", label: "Vista", openModal: () => setOpen(!open) },
  //   { value: "notification", label: "Notificaciones", openModal: () => setOpenNotifaction(!openNotifaction) },
  // ];

  // const columns = [
  //   { label: "Panel Estado SIM", key: "panel_status" },
  //   { label: "Expiración", key: "expiration" },
  //   { label: "Alias", key: "alias" },
  //   { label: "ICC SIM", key: "icc_sim" },
  //   { label: "N° MSISDN", key: "msisdn" },
  //   { label: "Plan Comercial", key: "comercial_plan" },
  //   { label: "Grupo de Suscripción", key: "suscription_grup" },
  //   { label: "Modelo de SIM", key: "sim_model" },
  // ];

  // const rows = [
  //   {
  //     panel_status: "Activo",
  //     expiration: "No especificado",
  //     alias: "Pruebas Api",
  //     icc_sim: "8954548645123135",
  //     msisdn: "56954154",
  //     comercial_plan: "60MB Local Smart M2M",
  //     suscription_grup: "GPS_D2049_CL60M",
  //     sim_model: "EMPTY",
  //   },
  //   {
  //     panel_status: "Activo",
  //     expiration: "Especificado Activo",
  //     alias: "Pruebas Api",
  //     icc_sim: "8954548645123135",
  //     msisdn: "56954154",
  //     comercial_plan: "60MB Local Smart M2M",
  //     suscription_grup: "GPS_D2049_CL60M",
  //     sim_model: "EMPTY",
  //   },
  //   {
  //     panel_status: "Inactivo",
  //     expiration: "No especificado inactivo",
  //     alias: "Pruebas Api",
  //     icc_sim: "8954548645123135",
  //     msisdn: "56954154",
  //     comercial_plan: "60MB Local Smart M2M",
  //     suscription_grup: "GPS_D2049_CL60M",
  //     sim_model: "EMPTY",
  //   },
  //   {
  //     panel_status: "Activo activo",
  //     expiration: "Especificado",
  //     alias: "Pruebas Api",
  //     icc_sim: "8954548645123135",
  //     msisdn: "56954154",
  //     comercial_plan: "60MB Local Smart M2M",
  //     suscription_grup: "GPS_D2049_CL60M",
  //     sim_model: "EMPTY",
  //   },
  // ];

  // const style = {
  //   position: "absolute" as "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 700,
  //   bgcolor: "background.paper",
  //   boxShadow: 24,
  //   p: 2,
  // };
  // const styleNotifcation = {
  //   position: "absolute" as "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 500,
  //   bgcolor: "background.paper",
  //   boxShadow: 24,
  //   p: 2,
  // };

  return (
    <>
      <SmartMovistarContainer />
    </>
    //     <div className="mr-5">
    //       {/* <h2>Tarjetas</h2> */}
    //       <div className="flex justify-between">
    //         <h4 className="text-[#24A2CE] text-3xl font-bold">SIMs Movistar</h4>
    //         <div className="flex gap-5 pr-5">
    //           <Link
    //             href={"/sims/smart-movistar/consumption"}
    //             className="border-solid border-2 border-[#24A2CE] px-5 flex justify-center items-center text-[#24A2CE] font-bold gap-2 rounded-[8px]"
    //           >
    //             <SvgEye fill="#24A2CE" /> VER CONSUMO
    //           </Link>
    //           <Button
    //             variant="outlined"
    //             sx={{ borderRadius: "8px", fontWeight: "bold", border: "2px solid #24A2CE", color: "#24A2CE" }}
    //             startIcon={
    //               <SvgDownload
    //                 fill="#24A2CE
    // "
    //               />
    //             }
    //           >
    //             DESCARGAR
    //           </Button>
    //           <SelectButton label={"CONFIGURAR"} options={configOptions} />
    //         </div>
    //       </div>
    //       <div className="mt-5 w-full">
    //         <CustomTableGrid columns={columns} rows={rows} cols={8} />
    //       </div>
    //       <div>
    //         {/* <Button onClick={handleOpen}>Open modal</Button> */}
    //         <Modal
    //           open={open}
    //           onClose={handleClose}
    //           aria-labelledby="modal-modal-title"
    //           aria-describedby="modal-modal-description"
    //         >
    //           <Box sx={style}>
    //             <div className="overflow-y-auto max-h-[700px]">
    //               <h2 className="text-[#24A2CE] font-bold mb-5">Configurar Vista</h2>
    //               <div>
    //                 <h3 className="font-bold">Opciones</h3>
    //                 <div className="grid grid-cols-2">
    //                   <div className="flex items-center">
    //                     <Checkbox />
    //                     <p>Panel</p>
    //                   </div>
    //                   <div className="flex items-center">
    //                     <Checkbox />
    //                     <p>Estado SIM</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div>
    //                 <h3 className="font-bold">SIMs</h3>
    //                 <div className="grid grid-cols-3">
    //                   <div className="flex items-center">
    //                     <Checkbox />
    //                     <p>Alias</p>
    //                   </div>
    //                   <div className="flex items-center">
    //                     <Checkbox />
    //                     <p>ICC SIM</p>
    //                   </div>
    //                   <div className="flex items-center">
    //                     <Checkbox />
    //                     <p>N° MSISDN</p>
    //                   </div>
    //                 </div>
    //                 <div className="grid grid-cols-3">
    //                   <div className="flex items-center">
    //                     <Checkbox />
    //                     <p>Plan comercial</p>
    //                   </div>
    //                   <div className="flex items-center">
    //                     <Checkbox />
    //                     <p>Grupo subscripción</p>
    //                   </div>
    //                   <div className="flex items-center">
    //                     <Checkbox />
    //                     <p>Modelo de SIM</p>
    //                   </div>
    //                 </div>
    //                 <div>
    //                   <h3 className="font-bold">GPRS</h3>
    //                   <div className="grid grid-cols-3">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Alias</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>ICC SIM</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>N° MSISDN</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div>
    //                   <h3 className="font-bold">Conusmo diario</h3>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>MB Contratados</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>MB Consumidos</p>
    //                     </div>
    //                   </div>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Tráfico de voz</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Tráfico SMS</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div>
    //                   <h3 className="font-bold">Conusmo mensual</h3>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>MB Contratados</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>MB Consumidos</p>
    //                     </div>
    //                   </div>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Tráfico de voz</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Tráfico SMS</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div>
    //                   <h3 className="font-bold">Metadata</h3>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>IMEI</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>APN</p>
    //                     </div>
    //                   </div>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Operados</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>País</p>
    //                     </div>
    //                   </div>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Tipo de plan</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Última tecnología acceso detectada</p>
    //                     </div>
    //                   </div>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Fabricante módulo comunicaciones</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Modelo módulo comunicaciones</p>
    //                     </div>
    //                   </div>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Imei último cambio</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>IP</p>
    //                     </div>
    //                   </div>

    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>IP estática</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div>
    //                   <h3 className="font-bold">Coordenadas locación automática</h3>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Latitud</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Longitud</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div>
    //                   <h3 className="font-bold">Servicios básicos</h3>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>VoiceOriginatedHome</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>VoiceOriginateRoaming</p>
    //                     </div>
    //                   </div>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>VoiceTerminatedHome</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>VoiceTerminatedRoaming</p>
    //                     </div>
    //                   </div>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>SMS OriginatedHome</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>SMS OriginatedRoaming</p>
    //                     </div>
    //                   </div>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>SMS TerminatedHome</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>SMS TerminatedRoaming</p>
    //                     </div>
    //                   </div>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>dataHome</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>data Roaming</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div>
    //                   <h3 className="font-bold">Fechas</h3>
    //                   <div className="grid grid-cols-2">
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Activación de SIM</p>
    //                     </div>
    //                     <div className="flex items-center">
    //                       <Checkbox />
    //                       <p>Última conexion</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="mt-5">
    //                   <Button variant="contained" fullWidth sx={{ bgcolor: "#1454a4" }}>
    //                     Guardar mis columnas
    //                   </Button>
    //                 </div>
    //               </div>
    //             </div>
    //           </Box>
    //         </Modal>
    //       </div>
    //       <div>
    //         {/* <Button onClick={handleOpen}>Open modal</Button> */}
    //         <Modal
    //           open={openNotifaction}
    //           onClose={handleCloseNotifaction}
    //           aria-labelledby="modal-modal-title"
    //           aria-describedby="modal-modal-description"
    //         >
    //           <Box sx={styleNotifcation}>
    //             <div className="overflow-y-auto max-h-[700px]">
    //               <h2 className="text-[#24A2CE] font-bold mb-5">Configurar Vista</h2>
    //               <div className="mb-10">
    //                 <p className="font-bold mb-2">Ingrese correo para alertas de sobreconsumos</p>
    //                 <TextField
    //                   label="Correo Electrónico"
    //                   id="standard-size-small"
    //                   variant="outlined"
    //                   fullWidth
    //                   InputProps={{
    //                     endAdornment: (
    //                       <InputAdornment position="end">
    //                         <MailOutlineIcon />
    //                       </InputAdornment>
    //                     ),
    //                   }}
    //                 />
    //               </div>
    //               <div className="mb-10">
    //                 <p className="font-bold mb-2">Ingrese correo para facturación</p>
    //                 <TextField
    //                   label="Correo Electrónico"
    //                   id="standard-size-small"
    //                   variant="outlined"
    //                   fullWidth
    //                   InputProps={{
    //                     endAdornment: (
    //                       <InputAdornment position="end">
    //                         <MailOutlineIcon />
    //                       </InputAdornment>
    //                     ),
    //                   }}
    //                 />
    //               </div>
    //               <div>
    //                 <p className="font-bold mb-2">Ingrese correo para cambio de IMEI</p>
    //                 <TextField
    //                   label="Correo Electrónico"
    //                   id="standard-size-small"
    //                   variant="outlined"
    //                   fullWidth
    //                   InputProps={{
    //                     endAdornment: (
    //                       <InputAdornment position="end">
    //                         <MailOutlineIcon />
    //                       </InputAdornment>
    //                     ),
    //                   }}
    //                 />
    //               </div>
    //             </div>
    //             <div className="mt-5">
    //               <Button variant="contained" fullWidth sx={{ bgcolor: "#1454a4" }}>
    //                 Guardar
    //               </Button>
    //             </div>
    //           </Box>
    //         </Modal>
    //       </div>
    //     </div>
  );
}
