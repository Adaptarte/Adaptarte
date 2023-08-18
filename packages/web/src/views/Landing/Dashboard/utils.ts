import type { DBDoc } from "utils/db/types";

import type { LineChartProps } from "./LineChart/types";

const docsToLineChartByDate = <T extends { date: Date }>(
  docs: DBDoc<T>[],
  getRecordWeight: (el: T) => number = (): number => 1,
): Omit<LineChartProps, "title"> => {
  const texts = docs.map((doc) => ({
    date: doc.data.date.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
    }),
    weight: getRecordWeight(doc.data),
  }));
  const counts = texts.reduce<Record<string, number>>((acc, el) => {
    acc[el.date] = (acc[el.date] ?? 0) + el.weight;
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
