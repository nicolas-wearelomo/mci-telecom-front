import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

type Props = {
  data: { name: string; cant: number }[];
};

const TopTenManufactures: React.FC<Props> = ({ data }) => {
  const colors = [
    "#8884d8",
    "#ffc658",
    "#ff7300",
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#82ca9d",
    "#C4D3D2",
    "#2173CC",
    "#73730C",
  ];

  return (
    <div className="h-full">
      <h2 className="text-[#24A2CE] text-xl font-bold">Top 10 de fabricantes/modelos</h2>
      <p className="text-sm mb-5">Última Actualización: 27-02-2024 23:07:12</p>
      <div className="max-h-[80%] min-h-[80%] h-[80%] grid grid-cols-2 gap-5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cant">
              {data?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="flex flex-col justify-between">
          {data?.map((el, idx) => (
            <div className="flex" key={idx}>
              <FiberManualRecordIcon sx={{ color: colors[idx], width: 10, marginRight: 2 }} />
              <p style={{ color: colors[idx] }}>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopTenManufactures;
