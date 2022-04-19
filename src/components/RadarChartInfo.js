import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

export default function RadarChartInfo(){

  const data = [
    { name: "A", x: 21 },
    { name: "B", x: 22 },
    { name: "C", x: -32 },
    { name: "D", x: -14 },
    { name: "E", x: -51 },
    { name: "F", x: 16 },
    { name: "G", x: 7 },
    { name: "H", x: -8 },
    { name: "I", x: 9 },
  ];

  return (
    <RadarChart height={500} width={500} outerRadius="80%" data={data} className="radarChartInfo">
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar dataKey="x" stroke="#FF0101" fill="#FF0101" fillOpacity={0.5} />
    </RadarChart>
  );
};

