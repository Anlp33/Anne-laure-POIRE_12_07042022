import React from "react";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

export default function RadarChartComponent(props) {
  function customTickAngle({ payload, x, y, textAnchor, stroke, radius }) {
    if (payload.index === 0) {
      return (
        <g className="recharts-layer recharts-polar-angle-axis-tick">
          <text
            radius={radius}
            stroke={stroke}
            x={x}
            y={y}
            className="recharts-text recharts-polar-angle-axis-tick-value"
            textAnchor={textAnchor}
          >
            <tspan x={x} dy="-0.3em" fill="#FFFFFF" fontSize={"12"}>
              {"Cardio"}
            </tspan>
          </text>
        </g>
      );
    }
    if (payload.index === 1) {
      return (
        <g className="recharts-layer recharts-polar-angle-axis-tick">
          <text
            radius={radius}
            stroke={stroke}
            x={x}
            y={y}
            className="recharts-text recharts-polar-angle-axis-tick-value"
            textAnchor={textAnchor}
          >
            <tspan x={x} dx="-1em" dy="-0.3em" fill="#FFFFFF" fontSize={"12"}>
              {"Energie"}
            </tspan>
          </text>
        </g>
      );
    }
    if (payload.index === 2) {
      return (
        <g className="recharts-layer recharts-polar-angle-axis-tick">
          <text
            radius={radius}
            stroke={stroke}
            x={x}
            y={y}
            className="recharts-text recharts-polar-angle-axis-tick-value"
            textAnchor={textAnchor}
          >
            <tspan x={x} dx="-2em" dy="0em" fill="#FFFFFF" fontSize={"12"}>
              {"Endurance"}
            </tspan>
          </text>
        </g>
      );
    }
    if (payload.index === 3) {
      return (
        <g className="recharts-layer recharts-polar-angle-axis-tick">
          <text
            radius={radius}
            stroke={stroke}
            x={x}
            y={y}
            className="recharts-text recharts-polar-angle-axis-tick-value"
            textAnchor={textAnchor}
          >
            <tspan x={x} dy="1em" fill="#FFFFFF" fontSize={"12"}>
              {"Force"}
            </tspan>
          </text>
        </g>
      );
    }
    if (payload.index === 4) {
      return (
        <g className="recharts-layer recharts-polar-angle-axis-tick">
          <text
            radius={radius}
            stroke={stroke}
            x={x}
            y={y}
            className="recharts-text recharts-polar-angle-axis-tick-value"
            textAnchor={textAnchor}
          >
            <tspan x={x} dx="0.4em" dy="0em" fill="#FFFFFF" fontSize={"12"}>
              {"Vitesse"}
            </tspan>
          </text>
        </g>
      );
    }
    if (payload.index === 5) {
      return (
        <g className="recharts-layer recharts-polar-angle-axis-tick">
          <text
            radius={radius}
            stroke={stroke}
            x={x}
            y={y}
            className="recharts-text recharts-polar-angle-axis-tick-value"
            textAnchor={textAnchor}
          >
            <tspan x={x} dx="1em" dy="-0.3em" fill="#FFFFFF" fontSize={"12"}>
              {"Intensité"}
            </tspan>
          </text>
        </g>
      );
    }
  }

  function customTickRadius() {
    return (
      <g className="recharts-layer recharts-polar-angle-axis-tick">
        <tspan></tspan>
      </g>
    );
  }
  function customLine() {
    return (
      <g class="recharts-polar-grid-angle">
        <line stroke="none"></line>
      </g>
    );
  }
  return (
    // <ResponsiveContainer
    //   width="20%"
    //   height="20%"
    //   className="radarChartResponsive"
    // >
    <RadarChart
      width={258}
      height={263}
      outerRadius="80%"
      data={props.data}
      className="radarChart"
      strokeWidth={2}
    >
      <PolarGrid tick={customLine} radialLines={false} />
      <PolarAngleAxis dataKey="kind" tick={customTickAngle} />
      <PolarRadiusAxis tick={customTickRadius} axisLine={false} />
      <Radar dataKey="value" fill="#FF0000" fillOpacity={0.7} />
    </RadarChart>
    // </ResponsiveContainer>
  );
}
RadarChartComponent.propTypes = {
  data: PropTypes.array,
};
