import React from "react";
import PropTypes from "prop-types";
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

export default function LinearChartComponent(props) {
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
  const customTick = ({payload }) => {
    // replace the number index with the first letter of the day
    if (payload === 1) {
      return "L";
    }
  };
  return (
    // <ResponsiveContainer
    //   width="20%"
    //   height="20%"
    //   className="LinearChartResponsive"
    // >
    <div className="linearChartContainer">
      <span className="linearChart_legend">
        <p>Durée moyenne des sessions</p>
      </span>
      <LineChart
        className="linearChart"
        width={258}
        height={200}
        data={props.data}
        margin={{
          top: 0,
          bottom: 5,
          left: -50,
        }}
      >
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={customTick}
        />
        <YAxis axisLine={false} tick={false} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          strokeOpacity="0.5"
          dot=""
          legendType="none"
        />
      </LineChart>
    </div>
    // </ResponsiveContainer>
  );
}
LinearChartComponent.propTypes = {
  data: PropTypes.array,
};
