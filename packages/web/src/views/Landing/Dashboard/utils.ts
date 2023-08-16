import type { DBDoc } from "utils/db/types";

import type { LineChartProps } from "./LineChart/types";

const docsToLineChartByDate = (
  docs: DBDoc<{ date: Date }>[],
): Omit<LineChartProps, "title"> => {
  const texts = docs.map((doc) =>
    doc.data.date.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
    }),
  );
  const counts = texts.reduce<Record<string, number>>((acc, date) => {
    acc[date] = (acc[date] ?? 0) + 1;
    return acc;
  }, {});
  const res = {
    data: [{ data: [] }],
    labels: [],
  } as Omit<LineChartProps, "title">;
  return Object.entries(counts).reduce((acc, [key, val]) => {
    acc.labels.push(key);
    acc.data[0].data.push(val);
    return acc;
  }, res);
};

export { docsToLineChartByDate };
