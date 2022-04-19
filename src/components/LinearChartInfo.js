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

const userAverageSessionData = [
  {
    day: 1,
    sessionLength: 30,
  },
  {
    day: 2,
    sessionLength: 23,
  },
  {
    day: 3,
    sessionLength: 45,
  },
  {
    day: 4,
    sessionLength: 50,
  },
  {
    day: 5,
    sessionLength: 0,
  },
  {
    day: 6,
    sessionLength: 0,
  },
  {
    day: 7,
    sessionLength: 60,
  },
];
export default function LinearChartInfo() {
   const TooltipLinear = () => {
     return (
       <div className="tooltipLinear">
         <p>68 min</p>
       </div>
     );
   };
  return (
    <div className="linearChartInfo">
      <ResponsiveContainer height="100%">
        <LineChart
          width={500}
          height={300}
          data={userAverageSessionData}
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
          <Tooltip content={<TooltipLinear />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
