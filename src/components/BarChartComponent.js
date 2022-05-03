import React from "react";
import PropTypes from "prop-types";
import ovalBlack from "../assets/Ovalblack.svg";
import ovalRed from "../assets/Ovalred.svg";
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

export default function BarChartComponent(props) {
  /**
   * Customize the tooltip box with the actual kilogram and Calories value
   * @param {} active
   * @param {} payload
   * @returns
   */
  const CustomTooltip = ({ active, payload }) => {
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
    <div className="barChartContainer">
      <div className="barChart_legend">
        <div className="legend_title">
          <p>Activité quotidienne</p>
        </div>
        <div className="legend_data">
          <span className="legend_dataKey">
            <img src={ovalBlack} alt="ovale"></img>Poids(kg)
          </span>
          <span className="legend_dataKey">
            <img src={ovalRed} alt="ovale"></img>Calories(kCal)
          </span>
        </div>
      </div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <BarChart
        className="barChart"
        width={800}
        height={320}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid horizontal={true} vertical={false} />
        <XAxis
          dataKey=""
          color="#9B9EAC"
          fontSize={14}
          fontWeight={500}
          tickLine={false}
        />
        <YAxis
          orientation="right"
          color="#9B9EAC"
          fontSize={14}
          fontWeight={500}
          tickLine={false}
        />
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
      {/* </ResponsiveContainer> */}
    </div>
  );
}
BarChartComponent.propTypes = {
  data: PropTypes.array,
};
