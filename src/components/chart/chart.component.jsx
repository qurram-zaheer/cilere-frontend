import React from "react";

import { randomColor } from "randomcolor";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import "./chart.styles.css";

const Chart = (props) => {
  let data = [];

  if (props.selected.length >= 1) {
    props.selected.forEach((item, index) => {
      item["inv_data"].forEach((inv_data, i2) => {
        if (index === 0) {
          let d = new Date(parseInt(inv_data.date));
          data.push({ date: `${d.getMonth()}/${d.getDate()}`, p: 44 });
        }
        data[i2][item.product_name] = inv_data.inventoryVal;
      });
    });
  }

  return (
    <div className="chart-container">
      <div className="desk-chart">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          {props.selected.map((item, index) => {
            return (
              <Line
                type="monotone"
                dataKey={item.product_name}
                key={item.product_id}
                stroke={randomColor()}
                strokeWidth="2"
                dot={{ strokeWidth: 2, r: 2 }}
              />
            );
          })}
          <Legend verticalAlign="top" height={36} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
      <div className="mob-chart">
        <LineChart
          width={350}
          height={200}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          {props.selected.map((item, index) => {
            return (
              <Line
                type="monotone"
                dataKey={item.product_name}
                key={item.product_id}
                stroke={randomColor()}
                strokeWidth="2"
                dot={{ strokeWidth: 2, r: 2 }}
              />
            );
          })}
          <Legend verticalAlign="top" height={36} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Chart;
