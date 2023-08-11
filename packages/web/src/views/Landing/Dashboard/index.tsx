import React from "react";

import { useDB } from "utils/db";

import { LineChart } from "./LineChart";
import { DashboardStat } from "./Stat";
import { t } from "./translations";
import type { DashboardProps } from "./types";

const shortDate = (date = new Date()): string => {
  return date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
  });
};

const Dashboard = ({ uid }: DashboardProps): JSX.Element => {
  const db = useDB(uid);
  const calms = db.getDocs("CalmActivities");
  const exercises = db.getDocs("Exercises");
  const foods = db.getDocs("FoodIntake");
  const medicines = db.getDocs("MedicineIntake");
  const tensions = db.getDocs("Tension");
  const weights = db.getDocs("Weight");

  return (
    <div className={"gy-3 row"}>
      <DashboardStat
        name={t().medicineIntakes}
        value={t().records(medicines.length)}
      />
      <DashboardStat
        name={t().tensions.name}
        value={t().records(tensions.length)}
      />
      <DashboardStat name={t().weights} value={t().records(weights.length)} />
      <DashboardStat name={t().foodIntakes} value={t().records(foods.length)} />
      <DashboardStat
        name={t().exercises}
        value={t().records(exercises.length)}
      />
      <DashboardStat name={t().calms} value={t().records(calms.length)} />
      <LineChart
        data={[
          {
            data: tensions.map((el) => el.data.diastolic),
            label: t().tensions.diastolic,
          },
          {
            data: tensions.map((el) => el.data.systolic),
            label: t().tensions.systolic,
          },
        ]}
        labels={tensions.map((el) => shortDate(el.data.date))}
        title={t().tensions.name}
      />
      <LineChart
        data={[
          {
            data: weights.map((el) => el.data.kg),
          },
        ]}
        labels={weights.map((el) => shortDate(el.data.date))}
        title={t().weights}
      />
      <LineChart data={[]} labels={[]} title={t().medicineIntakes} />
    </div>
  );
};

export { Dashboard };
