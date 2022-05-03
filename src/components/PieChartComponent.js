import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Line,
  Label,
} from "recharts";
import PropTypes from "prop-types";

export default function PieChartComponent(props) {
  return (
    <div className="pieChartContainer">
      <p className="pieChartTitle">Score</p>
      {/* <ResponsiveContainer width="20%" height="20%" className="pieChartResponsive"> */}
      <PieChart className="pieChart" width={258} height={263}>
        <Pie
          data={props.data}
          cx={300}
          cy={150}
          innerRadius={60}
          outerRadius={70}
          paddingAngle={2}
          fill="#FF0000"
          dataKey="todayScore"
        >
          <Label
            value={`${props.data}% de votre objectif`}
            position="centerBottom"
            className="label-top"
            fontSize="27px"
          />
        </Pie>
      </PieChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
}

PieChartComponent.propTypes = {
  data: PropTypes.number,
};


