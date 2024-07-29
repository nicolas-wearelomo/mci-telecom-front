"use client";
import { Button, CircularProgress, MenuItem, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useEffect, useState } from "react";
import { SvgArrowRigth } from "@/utils/svgList";
import SmartTable from "@/components/SmartTable";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types";
import useGetAllMovistarSims from "@/services/sims/movistar/useGetAllMovistarSims";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import axiosInstance from "@/utils/axiosInstance";

export default function Page() {
  const columns = {
    "": [
      { label: "Alias", key: "alias", width: 180 },
      { label: "ICC", key: "serial_number", width: 200 },
      { label: "Local/Global", key: "local_global", width: 150 },
      { label: "Conf. actual", key: "config", width: 700 },
      { label: "Envio de alertas", key: "notify_alert", width: 300 },
      { label: "Email", key: "email_for_alert_imei", width: 300 },
    ],
    orderColumns: [{ name: "", width: 120 }],
  };

  const { currentUser } = useSelector((state: RootState) => state.auth);
  const { callback, data, loading, setLoading } = useGetAllMovistarSims({
    company: currentUser?.company,
    service_provider: "Entel",
  });
  const [dataToRender, setDataToRender] = useState([]);

  useEffect(() => {
    callback();
  }, [callback]);

  useEffect(() => {
    if (data.length) {
      let parseData = data.map((el: any) => ({
        ...el,
        alias: el.alias_sim,
        local_global: el.sim_global === "T" ? "Global" : "Local",
        notify_alert: el.notify_alert === "T" ? "Si" : "No",
        config:
          el.over_consumption_conf === 3
            ? "La sim no se desactiva"
            : el.over_consumption_conf === 2
            ? "La SIM se desactiva y permanece desactivada hasta un cambio de ciclo de facturación"
            : "La SIM se desactiva y permanece desactivada hasta una activación manual",
      }));
      setDataToRender(parseData);
    }
  }, [data]);

  const cofiguration = [
    { value: 1, label: "La SIM se desactiva y permanece desactivada hasta una activación manual" },
    { value: 2, label: "La SIM se desactiva y permanece desactivada hasta un cambio de ciclo de facturación" },
    { value: 3, label: "La SIM no se desactiva" },
  ];

  const label = { inputProps: { "aria-label": "Notificar vía correo electrónico alertas de sobre" } };

  const [selected, setSelected] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState(3);
  const [selectedSims, setSelectedSims] = useState<any>([]);
  const [restSims, setRestSims] = useState<any>([]);
  const [restToFilter, setRestToFilter] = useState<any>([]);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const handleAdd = (id: any) => {
    let filtered = restToFilter.filter((el: any) => el.id !== id.id);
    setSelectedSims((prevState: any) => [...prevState, id]);
    setRestSims(filtered);
    setRestToFilter(filtered);
  };

  const handleRemove = (id: any) => {
    let filtered = selectedSims.filter((el: any) => el.id !== id.id);
    setRestSims((prevState: any) => [...prevState, id]);
    setRestToFilter((prevState: any) => [...prevState, id]);
    setSelectedSims(filtered);
  };

  useEffect(() => {
    setRestSims(data);
    setRestToFilter(data);
  }, [data]);

  useEffect(() => {
    if (checked) {
      setSelectedSims(data);
      setRestSims([]);
      setRestToFilter([]);
    } else {
      setSelectedSims([]);
      setRestToFilter(data);
      setRestSims(data);
    }
  }, [checked]);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let values = {
      selectedSims,
      selectedConfig,
      selected,
      email,
    };

    setLoading(true);
    await axiosInstance.put("/overconsumption/updateSims", values);
    setSelected(false);
    setSelectedConfig(3);
    setSelectedSims([]);
    setRestSims([]);
    setRestToFilter([]);
    setChecked(false);
    setEmail("");
    callback();
  };

  const handleChange = (e: any) => {
    let filter = restToFilter.filter((el: any) => el.serial_number.includes(e.target.value));
    setRestSims(filter);
  };

  return !loading ? (
    <div className="pr-5 overflow-y-auto h-[85vh] border-solid border-2 border-[#d6d6d6] rounded-[32px] p-5 mr-5">
      <div className="flex gap-20">
        <h2 className="text-[#24A2CE] text-2xl">Configurar sobre consumo</h2>
        <div className="flex items-center">
          <Checkbox {...label} checked={checked} onClick={() => setChecked(!checked)} />
          <p>Seleccionar todas las SIMs</p>
        </div>
      </div>
      <div className="w-[30%] my-5">
        <TextField
          label="Buscar por número de ICC o alias"
          fullWidth
          size="small"
          onChange={handleChange}
          InputProps={{ endAdornment: <SearchIcon /> }}
        />
      </div>
      <div className="flex gap-20 my-2">
        <div className="max-h-[165px] overflow-y-auto w-[250px]">
          {restSims.map((el: any) => (
            <div key={el.id} className="flex gap-2 mb-1">
              <span>{el.serial_number}</span>
              <ArrowCircleRightIcon sx={{ cursor: "pointer" }} onClick={() => handleAdd(el)} />
            </div>
          ))}
        </div>
        <div className="max-h-[165px] overflow-y-auto w-[250px] mr-4">
          {selectedSims.map((el: any) => (
            <div key={el.id} className="flex gap-2 mb-1">
              <ArrowCircleLeftIcon sx={{ cursor: "pointer" }} onClick={() => handleRemove(el)} />
              <span>{el.serial_number}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <p className="mb-5">Configuración en caso de sobre consumo</p>
        {/* <SelectButton label={"Seleccionar configuración"} options={cofiguration} color={"secondary"} /> */}
        <div className="w-[30%]">
          <TextField
            fullWidth
            size="small"
            select
            value={selectedConfig}
            onChange={(e: any) => setSelectedConfig(e.target.value)}
          >
            {cofiguration.map((el) => (
              <MenuItem key={el.value} value={el.value}>
                {el.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="flex items-center mt-2">
          <Checkbox {...label} onClick={() => setSelected(!selected)} />
          <p>Notificar vía correo electrónico alertas de sobre consumo</p>
          {selected && (
            <TextField
              sx={{ width: "328px", marginLeft: "25px" }}
              label="Correo Electrónico"
              id="standard-size-small"
              variant="outlined"
              size="small"
              onChange={handleEmailChange}
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
          onClick={(e: any) => handleSubmit(e)}
          variant="outlined"
          sx={{
            borderRadius: "8px",
            fontWeight: "bold",
            border: "2px solid #1454a4",
            color: "#FFFFFF",
            bgcolor: "#1454a4",
            ":hover": {
              borderRadius: "8px",
              fontWeight: "bold",
              border: "2px solid #1454a4",
              color: "#FFFFFF",
              bgcolor: "#1454a4",
            },
          }}
          endIcon={<SvgArrowRigth fill="#24A2CE" />}
        >
          GUARDAR CONFIGURACIÓN
        </Button>
      </div>
      <div className="mt-5">
        <SmartTable columns={columns} rows={dataToRender} settings={false} />
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex justify-center items-center">
      <CircularProgress />
    </div>
  );
}
