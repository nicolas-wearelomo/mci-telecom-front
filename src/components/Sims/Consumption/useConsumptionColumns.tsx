import { width } from "@mui/system";

export default function useConsumptionColumn() {
  return {
    "": [
      { key: "carrier", label: "Carrier", width: 400 },
      { key: "plan", label: "Plan", width: 450 },
      { key: "commercial_group", label: "Grupo de Suscripcion", width: 300 },
      { key: "total_sims", label: "Total SIMs", width: 150 },
      { key: "sims_active", label: "SIMs Activas", width: 150 },
      { key: "consumo", label: "% Consumo", width: 150 },
      { key: "mb_contratados", label: "MB Contratados", width: 200 },
      { key: "mb_consumidos", label: "MB Consumidos", width: 200 },
      { key: "mb_disponibles", label: "MB Disponibles", width: 200 },
      { key: "mb_sobreconsumo", label: "MB de Sobre Consumo", width: 250 },
      { key: "sms_eviados", label: "SMS enviados", width: 200 },
      { key: "minutos", label: "Minutos consumidos", width: 200 },
    ],
    orderColumns: [{ name: "", width: 120 }],
  };
}
