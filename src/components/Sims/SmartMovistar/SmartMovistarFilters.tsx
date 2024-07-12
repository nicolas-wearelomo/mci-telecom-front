"use client";
import SearchIcon from "@mui/icons-material/Search";
import SelectButton from "@/components/SelectButton";
import { SvgDownload, SvgEye } from "@/utils/svgList";
import { Button, InputAdornment, MenuItem, TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

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
  const configOptions = [
    { value: "overconsumption", label: "Sobreconsumo", link: "/sims/smart-movistar/overconsumption" },
    { value: "imei", label: "Cambio de IMEI", link: "/sims/smart-movistar/change-imei" },
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
                startIcon={
                  <SvgDownload
                    fill="#24A2CE
     "
                  />
                }
              >
                DESCARGAR
              </Button>
              <SelectButton label={"CONFIGURAR"} options={configOptions} />
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
                    <MenuItem value={el}>{el}</MenuItem>
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
