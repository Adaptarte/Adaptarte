import type { DBDoc, DBFoodIntake } from "utils/db/types";

import type { LineChartProps } from "./LineChart/types";

const getFoodsChartData = (
  foods: DBDoc<DBFoodIntake>[],
): Omit<LineChartProps, "title"> => {
  const foodDates = foods.map((food) =>
    food.data.date.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
    }),
  );
  const foodsPerDate = foodDates.reduce<Record<string, number>>((acc, date) => {
    acc[date] = (acc[date] ?? 0) + 1;
    return acc;
  }, {});
  const res = {
    data: [{ data: [] }],
    labels: [],
  } as Omit<LineChartProps, "title">;
  return Object.entries(foodsPerDate).reduce((acc, [key, val]) => {
    acc.labels.push(key);
    acc.data[0].data.push(val);
    return acc;
  }, res);
};

export { getFoodsChartData };
