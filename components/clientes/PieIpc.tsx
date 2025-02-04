"use client";

import { useState } from "react";
import { Pie, PieChart, ResponsiveContainer, Sector } from "recharts";

const data01 = [
  { name: "IPC", value: 32.5, fill: "#FCF532" },
  { name: "Competidor 1", value: 42.1, fill: "#71EB92" },
  { name: "Competidor 2", value: 25.5, fill: "#FFFDC6" },
];

export default function PieIpc() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data01}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          fill="#FCF532"
          stroke="black"
          strokeWidth={2}
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={6}
        textAnchor="middle"
        fontWeight={"bold"}
        fill={"white"}
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy}
        dy={28}
        textAnchor="middle"
        fontWeight={"bold"}
        fill={"white"}
      >
        {value}%
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <text
        x={cx}
        y={cy}
        dy={150}
        textAnchor="middle"
        fill="white"
      >{`% de visitas`}</text>
    </g>
  );
};
