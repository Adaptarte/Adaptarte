import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { DailyGoal } from "components/DailyGoal";
import type { IDailyGoal, IDailyGoalType } from "types/dailyGoals";
import { minuteToHour } from "utils/db/formatters";
import { getDB, read } from "utils/db/service";

const DailyGoals: FC = (): JSX.Element => {
  const [dailyGoals, setDailyGoals] = useState<IDailyGoal[]>([]);
  const [types, setTypes] = useState<IDailyGoalType[]>([]);

  useEffect(() => {
    const db = getDB();
    read<IDailyGoal>(db, "Select * from DailyGoals")
      .then(setDailyGoals)
      .catch((err) => {
        console.error(err);
      });
  }, [setDailyGoals]);

  useEffect(() => {
    const db = getDB();
    read<IDailyGoalType>(db, "Select * from DailyGoalTypes")
      .then(setTypes)
      .catch((err) => {
        console.error(err);
      });
  }, [setTypes]);

  return (
    <View>
      {dailyGoals.map(({ done, id, time, title, type }) => (
        <DailyGoal
          done={done}
          hour={minuteToHour(time)}
          key={id}
          title={title}
          type={
            types
              .filter((types) => types.id === parseInt(type))
              .map((ty) => ty.name)[0]
          }
        />
      ))}
    </View>
  );
};

export { DailyGoals };
