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
  Rectangle,
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

  const CustomCursor = (props) => {
    const { points, width, height, stroke } = props;
    const { x, y } = points[0];
    const { x1, y1 } = points[1];

    return (
      <rect
        fill="#00000"
        opacity={0.2}
        x={x}
        y={-30}
        width={width}
        height={265}
      />
    );
  };

  return (
    <div className="linearChartContainer">
      <LineChart
        className="linearChart"
        width={230}
        height={235}
        data={props.data}
        margin={{
          top: 70,
          left: -50,
          bottom: 20,
        }}
      >
        <text y="20%" textAnchor="start">
          <tspan
            x="10%"
            className="linearChart_legend"
            fill="#ffffff"
            opacity={0.5}
          >
            Durée moyenne des
          </tspan>
          <tspan
            x="10%"
            dy="10%"
            className="linearChart_legend"
            fill="#ffffff"
            opacity={0.5}
          >
            sessions
          </tspan>
        </text>
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickFormatter={customTick}
          tick={{ fill: "white", opacity: 0.5 }}
        />
        <YAxis axisLine={false} tick={false} />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth={2}
          strokeOpacity="0.5"
          dot=""
          legendType="none"
        />
      </LineChart>
    </div>
  );
}
LinearChartComponent.propTypes = {
  data: PropTypes.array.isRequired,
};
