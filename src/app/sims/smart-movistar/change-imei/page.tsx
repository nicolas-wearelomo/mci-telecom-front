"use client";
import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CustomTableOrder from "@/components/SmartTable";
import SelectButton from "@/components/SelectButton";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useState } from "react";
import { SvgArrowRigth } from "@/utils/svgList";

export default function Page() {
  const columns = [
    { label: "Alias", key: "alias" },
    { label: "ICC", key: "icc" },
    { label: "Local/Global", key: "local" },
    { label: "Conf. actual", key: "config" },
    { label: "Envio de alertas", key: "envio" },
    { label: "Email", key: "mail" },
  ];

  const rows = [
    {
      alias: "Pruebas Alias",
      icc: "895454842126546",
      local: "Global",
      config: "La SIM no esta desactivada",
      envio: "SI",
      mail: "soporte@mcitelecom.com",
    },
    {
      alias: "Pruebas Alias",
      icc: "895454842126546",
      local: "Global",
      config: "La SIM no esta desactivada",
      envio: "SI",
      mail: "soporte@mcitelecom.com",
    },
    {
      alias: "Pruebas Alias",
      icc: "895454842126546",
      local: "Global",
      config: "La SIM no esta desactivada",
      envio: "SI",
      mail: "soporte@mcitelecom.com",
    },
    {
      alias: "Pruebas Alias",
      icc: "895454842126546",
      local: "Global",
      config: "La SIM no esta desactivada",
      envio: "SI",
      mail: "soporte@mcitelecom.com",
    },
    {
      alias: "Pruebas Alias",
      icc: "895454842126546",
      local: "Global",
      config: "La SIM no esta desactivada",
      envio: "SI",
      mail: "soporte@mcitelecom.com",
    },
  ];

  const cofiguration = [
    { value: "movistar", label: "La SIM se desactiva y permanece desactivada hasta una activación manual" },
    { value: "entel", label: "La SIM se desactiva y permanece desactivada hasta un cambio de ciclo de facturación" },
  ];

  const label = { inputProps: { "aria-label": "Notificar vía correo electrónico alertas de sobre" } };

  const [selected, setSelected] = useState(false);
  return (
    <div className="pr-5 overflow-y-auto h-[85vh] border-solid border-2 border-[#d6d6d6] rounded-[32px] p-5 mr-5">
      <div className="flex gap-20">
        <h2 className="text-[#24A2CE] text-2xl">Configurar Cambio de IMEI</h2>
        <div className="flex items-center">
          <Checkbox {...label} />
          <p>Seleccionar todas las SIMs</p>
        </div>
      </div>
      <div className="w-[30%] mt-5">
        <TextField label="Buscar por número de ICC o alias" fullWidth InputProps={{ endAdornment: <SearchIcon /> }} />
      </div>
      <div className="mt-5">
        <CustomTableOrder cols={6} columns={columns} title="Configuraciones" rows={rows} />
      </div>
      <div className="mt-5">
        <p className="mb-5">Configuración en caso de sobre consumo</p>
        <SelectButton label={"Seleccionar configuración"} options={cofiguration} color={"secondary"} />
        <div className="flex items-center">
          <Checkbox {...label} onClick={() => setSelected(!selected)} />
          <p>Notificar vía correo electrónico alertas de sobre consumo</p>
          {selected && (
            <TextField
              sx={{ width: "328px", marginLeft: "25px" }}
              label="Correo Electrónico"
              id="standard-size-small"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        </div>
      </div>
      <div className="flex mt-5">
        <Button
          variant="outlined"
          sx={{
            borderRadius: "8px",
            fontWeight: "bold",
            border: "2px solid #1454a4",
            color: "#FFFFFF",
            bgcolor: "#1454a4",
          }}
          endIcon={
            <SvgArrowRigth
              fill="#24A2CE
"
            />
          }
        >
          GUARDAR CONFIGURACIÓN
        </Button>
      </div>
    </div>
  );
}
