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

export default function BarChartInfo(props) {
  const CustomTooltip = ({ active, payload}) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="kilogram">{payload[0].value}Kg</p>
          <p className="calories">{payload[1].value}Kcal</p>
        </div>
      );
    }
    return null;
  };
  return (
    <ResponsiveContainer className="barChart">
      <BarChart
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          radius={[10, 10, 0, 0]}
          legendType="none"
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          radius={[10, 10, 0, 0]}
          legendType="none"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
