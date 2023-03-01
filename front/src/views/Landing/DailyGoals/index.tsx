import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import type Realm from "realm";

import { DailyGoal } from "components/DailyGoal";
import type { IDailyGoal } from "types/dailyGoals";
import { minuteToHour } from "utils/db/formatters";
import { getRealm } from "utils/db/realm";

const DailyGoals: FC = (): JSX.Element => {
  const [dailyGoals, setDailyGoals] = useState<IDailyGoal[]>([]);
  const [realm, setRealm] = useState<Realm>();

  useEffect(() => {
    getRealm().then(setRealm).catch(console.error);
  }, [setRealm]);

  useEffect(() => {
    if (realm !== undefined) {
      const resGoals = realm.objects<IDailyGoal>("DailyGoal");
      if (resGoals.length === 0) {
        realm.write(() => {
          realm.create<IDailyGoal>("DailyGoal", {
            done: false,
            id: 1,
            time: 8 * 60,
            title: "Goal Example",
            type: "Record"
          });
        });
      }
      setDailyGoals(Array.from<IDailyGoal>(resGoals));
    }
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
