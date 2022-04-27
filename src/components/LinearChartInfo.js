import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function LinearChartInfo(props) {
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip-LinearChart">
          <p className="sessionLength">{payload[0].value} min</p>
        </div>
      );
    }
    return null;
  };
  return (
    <LineChart
      className="linearChart"
      width={500}
      height={300}
      data={props.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="#ffffff"
        activeDot={{ r: 8 }}
        legendType="none"
      />
    </LineChart>
  );
}
