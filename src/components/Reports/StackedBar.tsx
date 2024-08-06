import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Definir la interfaz para los datos
interface ConsumptionData {
  consumption_data: number;
  consumption_sms: number;
  consumption_voice: number;
  date: string;
}

// Definir las props del componente
interface StackedBarProps {
  data: ConsumptionData[];
}

export default function StackedBar({ data }: StackedBarProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
        <Tooltip
          formatter={(value: number, name: string) => {
            switch (name) {
              case "Datos":
                return [`$${value.toLocaleString()}`, "Datos"];
              case "SMS":
                return [value.toLocaleString(), "SMS"];
              case "Voz":
                return [value.toLocaleString(), "Voz"];
              default:
                return [value, name];
            }
          }}
        />
        <Legend />
        <Bar dataKey="Datos" stackId="a" fill="#6cbf7c" name="Datos" />
        <Bar dataKey="SMS" stackId="a" fill="#7f54fb" name="SMS" />
        <Bar dataKey="Voz" stackId="a" fill="#e79053" name="Voz" />
      </BarChart>
    </ResponsiveContainer>
  );
}
