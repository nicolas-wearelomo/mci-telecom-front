export default function useReportsColumn() {
  return {
    "": [
      { key: "name", label: "Plan", width: 450 },
      { key: "commercial_group", label: "Grupo de Suscripcion", width: 300 },
      { key: "cantidad_sims", label: "Total SIMs", width: 150 },
      { key: "cantidad_sims_activas", label: "SIMs Activas", width: 150 },
      { key: "consumo", label: "% Consumo", width: 150 },
      { key: "mb_plan", label: "MB Contratados", width: 200 },
      { key: "consumption_daily_data_val", label: "MB Consumidos", width: 200 },
      { key: "mb_disponibles", label: "MB Disponibles", width: 200 },
      { key: "mb_sobreconsumo", label: "MB de Sobre Consumo", width: 250 },
      { key: "consumption_daily_sms_val", label: "SMS enviados", width: 200 },
      { key: "consumption_daily_voice_val", label: "Minutos consumidos", width: 200 },
    ],
    orderColumns: [{ name: "", width: 120 }],
  };
}
