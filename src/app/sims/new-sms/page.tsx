import { Button, MenuItem, TextField } from "@mui/material";

const Page = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col justify-between h-[85vh]">
        <div className="w-full">
          <h3 className="mb-5">Nuevo sms</h3>
          <p className="text-[#24A2CE] mb-2">Enviar a</p>
          <TextField select label="Enviar SMS a ..." size="small" fullWidth>
            <MenuItem>Opcion 1</MenuItem>
            <MenuItem>Opcion 2</MenuItem>
          </TextField>
          <div className="mt-10">
            <h4 className="font-bold">Cuerpo de mensaje</h4>
            <p className="text-[#777777] mb-2">Máximo 100 caracteres</p>
            <TextField placeholder="Ingresa aquí tu mensaje" multiline fullWidth size="small" rows={8} />
          </div>
        </div>
        <div className="flex gap-10">
          <Button fullWidth variant="outlined">
            Borrar Mensaje
          </Button>
          <Button fullWidth variant="outlined">
            Enviar SMS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
