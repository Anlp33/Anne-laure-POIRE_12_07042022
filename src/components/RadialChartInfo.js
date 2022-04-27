import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function RadialChartInfo(props) {
  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

  return (
    <div className="radialChartBox">
      <p>Score</p>
      <RadialBarChart
        className="radialChart"
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={props.data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#ff0000" }}
          background
          clockWise
          dataKey="todayScore"
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </div>
  );
}
