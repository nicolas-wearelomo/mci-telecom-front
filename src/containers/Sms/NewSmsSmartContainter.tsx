"use client";
import { RootState } from "@/redux/types";
import useGetAllMovistarSims from "@/services/sims/movistar/useGetAllMovistarSims";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import axiosInstance from "@/utils/axiosInstance";

interface Sim {
  label: string;
  id: number;
}

const NewSmsSmartContainter = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const [sims, setSims] = useState<Sim[]>([]);
  const [simsSelected, setSimsSelected] = useState<Sim[]>([]);
  const [message, setMessage] = useState("");

  const { callback, data, loading } = useGetAllMovistarSims({
    company: currentUser?.company,
    service_provider: "Movistar",
  });

  useEffect(() => {
    callback();
  }, [callback]);

  useEffect(() => {
    if (data.length) {
      let sims = data.map((el: any) => ({ label: `${el.serial_number} - ${el.alias_sim}`, id: el.id }));
      setSims(sims);
    }
  }, [data]);

  const handleSimSelection = (event: any, newValue: Sim | null) => {
    if (newValue && !simsSelected.some((sim) => sim.id === newValue.id)) {
      setSimsSelected([...simsSelected, newValue]);
    }
  };

  const handleDelete = (id: number) => {
    setSimsSelected(simsSelected.filter((sim) => sim.id !== id));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(simsSelected);
    console.log(message);
    axiosInstance.post("/sms/new-sms-smart", { simsSelected, message });
  };

  return (
    <div className="container">
      <h3>Nuevo SMS</h3>
      <p className="text-[#24A2CE] mt-10 mb-5">Enviar a</p>
      <div className="w-[50%]">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={sims}
          onChange={handleSimSelection}
          renderInput={(params) => <TextField {...params} size="small" placeholder="Enviar SMS a ..." fullWidth />}
        />
      </div>
      <Stack direction="row" spacing={1} sx={{ marginTop: 2 }}>
        {simsSelected.map((sim) => (
          <Chip key={sim.id} label={sim.label} onDelete={() => handleDelete(sim.id)} />
        ))}
      </Stack>

      <p className="font-bold mb-2">Cuerpo de mensaje</p>
      <p className="text-[#777777] text-sm mb-2">Máximo 100 caracteres</p>
      <div className="w-[50%] mb-2">
        <TextField
          size="small"
          multiline
          minRows={6}
          placeholder="Ingrese aqui tu mensaje"
          fullWidth
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="w-[250px] flex justify-center">
        <Button variant="outlined" fullWidth onClick={handleSubmit}>
          Enviar Mensaje
        </Button>
      </div>
    </div>
  );
};

export default NewSmsSmartContainter;
