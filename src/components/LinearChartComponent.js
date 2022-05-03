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
} from "recharts";

/**
 * This component creates a linear Chart
 * @param {*} props
 * @returns {jsx} react component
 */
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
  const customTick = (value) => {
    // replace the number index with the first letter of the day
    if (value === 1) {
      return "L";
    }
    if (value === 2) {
      return "M";
    }
    if (value === 3) {
      return "M";
    }
    if (value === 4) {
      return "J";
    }
    if (value === 5) {
      return "V";
    }
    if (value === 6) {
      return "S";
    }
    if (value === 7) {
      return "D";
    }
    };
  return (
    <div className="linearChartContainer">
      <span className="linearChart_legend">
        <p>Durée moyenne des sessions</p>
      </span>
      <LineChart
        className="linearChart"
        width={230}
        height={235}
        data={props.data}
        margin={{
          top: 0,
          bottom: 90,
          left: -50,
        }}
      >
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickFormatter={customTick}
          fill="#FFFFFF"
          color="#FFFFFF"
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
  );
}
LinearChartComponent.propTypes = {
  data: PropTypes.array,
};
