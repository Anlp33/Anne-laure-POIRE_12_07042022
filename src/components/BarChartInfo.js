import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function BarChartInfo() {
  const CustomTooltip = () => {
    return (
      <div className="customToolTip">
        <p>65 kg</p>
        <p>230 kcal</p>
        {/* <p>{props.sessions.kilogram}</p>
        <p>{props.sessions.calories}</p> */}
      </div>
    );
  };
  return (
    <div className="barChartInfo">
      <ResponsiveContainer width="90%" height="100%">
        <BarChart
          width={700}
          height={145}
          // data={dataActivity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="" />
          <YAxis dataKey="" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            legendType="none"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            legendType="none"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
