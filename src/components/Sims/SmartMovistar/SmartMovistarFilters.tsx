"use client";
import SearchIcon from "@mui/icons-material/Search";
import SelectButton from "@/components/SelectButton";
import { SvgDownload, SvgEye } from "@/utils/svgList";
import { Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import downloadExcel from "@/utils/downloadsExcel/downloadRecords";

const SmartMovistarFilters = ({
  title,
  data,
  setData,
  redirect,
  sub,
}: {
  title: string;
  data: any;
  setData: any;
  redirect?: string;
  sub?: any;
}) => {
  const [status, setStatus] = useState("");
  const [subscriptionGruop, setSubscriptionGruop] = useState("");
  const [search, setSearch] = useState("");
  const [downloadsExcel, setDownloadsExcel] = useState([]);
  const configOptions = [
    { value: "overconsumption", label: "Sobreconsumo", link: `/sims/${redirect}/overconsumption` },
    { value: "imei", label: "Cambio de IMEI", link: `/sims/${redirect}/change-imei` },
  ];

  const handleSearch = () => {
    const searchLower = search.toLowerCase();
    const searchData = data.filter((el: any) => {
      return (
        el.serial_number.toLowerCase().includes(searchLower) ||
        (el.alias_sim && el.alias_sim.toLowerCase().includes(searchLower)) ||
        el.msisdn.toLowerCase().includes(searchLower) ||
        (el.imei && el.imei.toLowerCase().includes(searchLower))
      );
    });
    setData(searchData);
  };

  const handleFilter = () => {
    const filtered = data.filter((el: any) => {
      const statusMatch = status ? el.status === status : true;
      const subscriptionGroupMatch = subscriptionGruop ? el.commercial_group === subscriptionGruop : true;
      return statusMatch && subscriptionGroupMatch;
    });
    setData(filtered);
  };

  useEffect(() => {
    if (data) {
      let parsedExcel = data.map((el: any) => ({
        "Estado SIM": el.status,
        Alias: el.alias_sim,
        "ICC SIM": el.serial_number,
        "N° MSISDN": el.msisdn,
        "Grupo de suscripción": el.commercial_group,
        "Modelo de SIM": el.sim_model,
        Estado: el.status,
        "Inicio última conexión": el.gpr_last_conn_start,
        "Termino última conexión": el.gpr_last_conn_stop,
        "Tráfico voz": el.consumption_monthly_voice_val,
        "Tráfico sms": el.consumption_monthly_sms_val,
        IMEI: el.imei,
        APN: el.sim_apn,
        Operador: el.operator_sim,
        Pais: el.country,
        "Fabricante Módulo comunicaciones": el.comm_module_manufacturer,
        "Modelo módulo comunicaciones": el.comm_module_model,
        "IMEI Último cambio": el.imei_last_change,
        IP: el.ip,
        "IP Estática": el.static_ip,
        Latitud: el.latitude,
        Longitud: el.longitude,
        voiceOriginatedHome: el.voiceoriginatedhome,
        voiceOriginatedRoaming: el.voiceoriginatedroaming,
        voiceTerminatedHome: el.voiceterminatedhome,
        voiceTerminatedRoaming: el.voiceterminatedroaming,
        smsOriginatedHome: el.smsoriginatedhome,
        smsOriginatedRoaming: el.smsoriginatedroaming,
        smsTerminatedHome: el.smsterminatedhome,
        smsTerminatedRoaming: el.smsterminatedroaming,
        dataHome: el.datahome,
        dataRoaming: el.dataroaming,
        "Activación de la SIM": el.activation_date,
        "Última conexión": el.last_con,
      }));
      setDownloadsExcel(parsedExcel);
    }
  }, [data]);

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="w-full">
          <div className="flex justify-between w-full mb-4">
            <h4 className="text-[#24A2CE] text-3xl font-bold">{title}</h4>
            <div className="flex gap-5">
              {redirect ? (
                <Link
                  href={`/sims/${redirect}/consumption`}
                  className="border-solid border-2 border-[#24A2CE] px-5 flex justify-center items-center text-[#24A2CE] font-bold gap-2 rounded-[8px]"
                >
                  <SvgEye fill="#24A2CE" /> VER CONSUMO
                </Link>
              ) : null}
              <Button
                variant="outlined"
                sx={{ borderRadius: "8px", fontWeight: "bold", border: "2px solid #24A2CE", color: "#24A2CE" }}
                onClick={() => downloadExcel({ data: downloadsExcel, title: "Sims" })}
                startIcon={<SvgDownload fill="#24A2CE" />}
              >
                DESCARGAR
              </Button>
              {title !== "SIMs Legacy" ? <SelectButton label={"CONFIGURAR"} options={configOptions} /> : null}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="w-[200px]">
                <TextField
                  size="small"
                  select
                  label="Estado SIM"
                  fullWidth
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value="Activado">Activado</MenuItem>
                  <MenuItem value="Desactivado">Desactivado</MenuItem>
                  <MenuItem value="Listo para activar">Listo para activar</MenuItem>
                </TextField>
              </div>
              <div className="w-[200px]">
                <TextField
                  size="small"
                  select
                  label="Grupo de suscripción"
                  fullWidth
                  onChange={(e) => setSubscriptionGruop(e.target.value)}
                >
                  {sub?.map((el: any) => (
                    <MenuItem value={el} key={el}>
                      {el}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              {/* <div className="w-[200px]">
                <TextField size="small" select label="Estado" fullWidth>
                  <MenuItem>Todos</MenuItem>
                  <MenuItem>No disponible</MenuItem>
                  <MenuItem>Activa</MenuItem>
                  <MenuItem>Desactivada</MenuItem>
                </TextField>
              </div> */}
              <Button variant="outlined" onClick={handleFilter}>
                Filtrar
              </Button>
            </div>
            <div className="flex gap-2">
              <TextField
                placeholder="Buscar"
                size="small"
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="outlined" className="h-full" onClick={handleSearch}>
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full">{/* <CustomTableGrid columns={columns} rows={rows} cols={8} /> */}</div>
    </div>
  );
};

export default SmartMovistarFilters;
