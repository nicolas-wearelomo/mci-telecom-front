import CustomTableOrder from "@/components/SmartTable";
import SelectButton from "@/components/SelectButton";
import { SvgArrowRigth, SvgDelete, SvgDownload } from "@/utils/svgList";
import { Button } from "@mui/material";
import { Label } from "recharts";

export default function Page() {
  const columns = [
    { label: "Carrier", key: "carrier" },
    { label: "Plan", key: "plan" },
    { label: "Total SIMs", key: "total_sims" },
    { label: "SIMs activas", key: "sims_activas" },
    { label: "% Consumo", key: "consumo" },
    { label: "MB contratados", key: "mb_contratados" },
    { label: "MB consumidos", key: "mb_consumidos" },
    { label: "MB disponibles", key: "mb_disponibles" },
    { label: "MB de sobre...", key: "mb_sobre" },
    { label: "SMS enviados", key: "sms_enviados" },
    { label: "Min consumi...", key: "min_consumidos" },
  ];

  const rows = [
    {
      carrier: "Local Smart M2M",
      plan: "60M - Local S...",
      total_sims: "1",
      sims_activas: "1",
      consumo: "0%",
      mb_contratados: "60.0",
      mb_consumidos: "0.0",
      mb_disponibles: "60.0",
      mb_sobre: "0",
      sms_enviados: "0",
      min_consumidos: "0",
    },
    {
      carrier: "Local Smart M2M",
      plan: "60M - Local S...",
      total_sims: "1",
      sims_activas: "1",
      consumo: "0%",
      mb_contratados: "60.0",
      mb_consumidos: "0.0",
      mb_disponibles: "60.0",
      mb_sobre: "0",
      sms_enviados: "0",
      min_consumidos: "0",
    },
    {
      carrier: "Local Smart M2M",
      plan: "60M - Local S...",
      total_sims: "1",
      sims_activas: "1",
      consumo: "0%",
      mb_contratados: "60.0",
      mb_consumidos: "0.0",
      mb_disponibles: "60.0",
      mb_sobre: "0",
      sms_enviados: "0",
      min_consumidos: "0",
    },
    {
      carrier: "Local Smart M2M",
      plan: "60M - Local S...",
      total_sims: "1",
      sims_activas: "1",
      consumo: "0%",
      mb_contratados: "60.0",
      mb_consumidos: "0.0",
      mb_disponibles: "60.0",
      mb_sobre: "0",
      sms_enviados: "0",
      min_consumidos: "0",
    },
    {
      carrier: "Local Smart M2M",
      plan: "60M - Local S...",
      total_sims: "1",
      sims_activas: "1",
      consumo: "0%",
      mb_contratados: "60.0",
      mb_consumidos: "0.0",
      mb_disponibles: "60.0",
      mb_sobre: "0",
      sms_enviados: "0",
      min_consumidos: "0",
    },
    {
      carrier: "Local Smart M2M",
      plan: "60M - Local S...",
      total_sims: "1",
      sims_activas: "1",
      consumo: "0%",
      mb_contratados: "60.0",
      mb_consumidos: "0.0",
      mb_disponibles: "60.0",
      mb_sobre: "0",
      sms_enviados: "0",
      min_consumidos: "0",
    },
    {
      carrier: "Local Smart M2M",
      plan: "60M - Local S...",
      total_sims: "1",
      sims_activas: "1",
      consumo: "0%",
      mb_contratados: "60.0",
      mb_consumidos: "0.0",
      mb_disponibles: "60.0",
      mb_sobre: "0",
      sms_enviados: "0",
      min_consumidos: "0",
    },
    {
      carrier: "Local Smart M2M",
      plan: "60M - Local S...",
      total_sims: "1",
      sims_activas: "1",
      consumo: "0%",
      mb_contratados: "60.0",
      mb_consumidos: "0.0",
      mb_disponibles: "60.0",
      mb_sobre: "0",
      sms_enviados: "0",
      min_consumidos: "0",
    },
  ];

  const mesOption = [
    { value: "enero", label: "Enero" },
    { value: "febrero", label: "Febrero" },
    { value: "marzo", label: "Marzo" },
    { value: "abril", label: "Abril" },
    { value: "mayo", label: "Mayo" },
    { value: "junio", label: "Junio" },
    { value: "julio", label: "Julio" },
    { value: "agosto", label: "Agosto" },
    { value: "septiembre", label: "Septiembre" },
    { value: "octubre", label: "Octubre" },
    { value: "noviembre", label: "Noviembre" },
    { value: "diciembre", label: "Diciembre" },
  ];

  const añoOption = [
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
  ];

  const filter = [
    { value: "todos", label: "Mostar todo" },
    { value: "mas80", label: "Consumo < 80%" },
    { value: "entre80100", label: "Consumo entre 80% y 100%" },
    { value: "mas100", label: "Consumo > 100%" },
  ];

  const operatorFilter = [
    { value: "movistar", label: "Movistar" },
    { value: "entel", label: "Entel" },
    { value: "tele2", label: "Tele2" },
  ];

  return (
    <div>
      <h2 className="text-[#24A2CE] text-3xl mb-5">Detalle planes contratados</h2>
      <div className="flex justify-between mb-5 pr-5">
        <div className="flex gap-2">
          <SelectButton label={"Mes"} options={mesOption} color={"secondary"} />
          <SelectButton label={"Año"} options={añoOption} color={"secondary"} />
          <SelectButton label={"Filtrar por"} options={filter} color={"secondary"} />
          <SelectButton label={"Filtrar por operador"} options={operatorFilter} color={"secondary"} />
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
            CONSULTAR
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            sx={{ borderRadius: "8px", fontWeight: "bold", border: "2px solid #24A2CE", color: "#24A2CE" }}
            endIcon={
              <SvgDelete
                fill="#24A2CE
"
              />
            }
          >
            BORRAR FILTROS
          </Button>
        </div>
      </div>
      <CustomTableOrder cols={11} rows={rows} columns={columns} title="Detalle de consumo" />
    </div>
  );
}
