import type { ChartOptions } from "chart.js";
import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";

import { Paper } from "components/Paper";

import type { LineChartProps } from "./types";

const colors = ["#C33C54", "#3C5EC2", "#3CC264"];

const LineChart = ({
  axes = {},
  data,
  labels,
  title,
}: LineChartProps): JSX.Element => {
  const options: ChartOptions<"line"> = useMemo(() => {
    const labels = data
      .filter((el) => el.label !== undefined)
      .map((el) => el.label) as string[];

    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: labels.length === data.length,
          position: "top",
        },
        title: {
          display: true,
          text: title,
        },
      },
      scales: Object.entries(axes).reduce<
        ChartOptions<"line">["scales"] & object
      >((acc, [key, val]) => {
        acc[key] = {
          title: {
            display: val !== undefined,
            text: val,
          },
        };
        return acc;
      }, {}),
    };
  }, [data, title]);

  return (
    <div className={"col col-md-6 col-xl-4"}>
      <Paper>
        <Line
          data={{
            datasets: data.map((dataset, idx) => {
              const color = colors[idx % colors.length];

              return {
                backgroundColor: color,
                borderColor: color,
                data: dataset.data,
                label: dataset.label,
                pointBackgroundColor: color,
                pointRadius: 4,
                showLine: true,
              };
            }),
            labels,
          }}
          height={250}
          options={options}
        />
      </Paper>
    </div>
  );
};

export { LineChart };
