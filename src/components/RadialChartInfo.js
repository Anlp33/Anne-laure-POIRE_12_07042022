import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";


const userScoreData = 0.12;

export default function RadialChartInfo() {
  return (
    <div className="userScore">
      <ResponsiveContainer width="100%" height="100%" className="radialChartInfo">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={userScoreData}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#FF0000" }}
            background
            clockWise
            dataKey="score"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            // wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
