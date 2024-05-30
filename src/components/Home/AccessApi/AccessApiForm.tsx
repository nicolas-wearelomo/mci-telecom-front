"use client";
import Input from "@/components/Input";
import { ModelAccessApiForm } from "@/models/home/modelAccessApi";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

const AccessApiForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ModelAccessApiForm>();

  const handleSubmitFunction = async (values: ModelAccessApiForm) => {
    console.log(values);
  };

  return (
    <div className="p-5 flex flex-col justify-between">
      <div>
        <h3>Acceso a la api</h3>
        <form onSubmit={handleSubmit(handleSubmitFunction)}>
          <div className="flex flex-col gap-5 mt-5">
            <p>¿Qué tipo de datos esperas recibir o enviar a través de la API?</p>
            <Input
              control={control}
              label="Ej: enviar SMS, consultar MB consumidos, consultar IMEI asociado, etc"
              errors={errors}
              name="dataTypes"
            />
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <p>
              ¿Cuál es la estimación de tráfico que esperas para la API en términos de cantidad de llamadas/consultas
              por mes?
            </p>
            <Input control={control} label="Ej: 100GB por 1 mes" errors={errors} name="trafficEstiamte" />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <Button variant="outlined" sx={{ height: "56px", borderRadius: "15px" }} disabled>
          DESCARTAR
        </Button>
        <Button variant="contained" sx={{ height: "56px", borderRadius: "15px", bgcolor: "#1152A1" }} disabled>
          SOLICITAR ACCESO{" "}
        </Button>
      </div>
    </div>
  );
};

export default AccessApiForm;
