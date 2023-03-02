import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { DailyGoal } from "components/DailyGoal";
import type { IDailyGoal } from "types/dailyGoals";
import { minuteToHour } from "utils/db/formatters";
import { objects, useRealm } from "utils/db/realm";

const DailyGoals: FC = (): JSX.Element => {
  const [dailyGoals, setDailyGoals] = useState<IDailyGoal[]>([]);
  const realm = useRealm();

  useEffect(() => {
    const goalsRes = objects(realm, "DailyGoal");
    setDailyGoals(goalsRes);
  }, [realm, setDailyGoals]);

  return (
    <View>
      {dailyGoals.map(({ done, id, time, title, type }) => (
        <DailyGoal
          done={done}
          hour={minuteToHour(time)}
          key={id}
          title={title}
          type={type}
        />
      ))}
    </View>
  );
};

export { DailyGoals };
