import React from "react";
import {
  PieChart,
  Pie,
  Cell,
} from "recharts";
import PropTypes from "prop-types";

/**
 * This component creates a Pie Chart
 * @param {*} props
 * @returns {jsx} react component
 */

export default function PieChartComponent(props) {
  console.log(props);
  const colors = ["#FF0000", "transparent"];
  const data = [{ value: props.data.score }, { value: 1 - props.data.score }];
  return (
    <div className="pieChartContainer">
      <p className="pieChartTitle">Score</p>
      <PieChart className="pieChart" width={230} height={235}>
        <circle cx="50%" cy="50%" r="70" fill="#FFFFFF"></circle>
        <text x="50%" y="48%" textAnchor="middle">
          <tspan x="50%" className="score">
            {props.data.score * 100}%
          </tspan>
          <tspan x="50%" dy="25" className="score_text" fill="#74798C">
            de votre
          </tspan>
          <tspan x="50%" dy="25" className="score_text" fill="#74798C">
            objectif
          </tspan>
        </text>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={70}
          paddingAngle={2}
          fill="#FF0000"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
              strokeWidth={0}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

PieChartComponent.propTypes = {
  data: PropTypes.object,
};
