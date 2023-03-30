import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { DailyGoal } from "components/DailyGoal";
import { compareDates, dateToString } from "utils/date";
import { dbObjects, useRealm } from "utils/db/realm";
import type { SchemaType } from "utils/db/types";
import { getNextTension } from "utils/records/tension";

const DailyGoals: FC = (): JSX.Element => {
  const realm = useRealm();
  const [tensions, setTensions] = useState<SchemaType<"Tension">[]>([]);

  useEffect(() => {
    setTensions(dbObjects(realm, "Tension"));
  }, [realm, setTensions]);

  const nextTension = getNextTension(tensions);
  const tensionDone = compareDates(nextTension, new Date(), true) > 0;
  const tensionDate = tensionDone ? tensions.slice(-1)[0]?.date : nextTension;

  return (
    <View>
      <DailyGoal
        date={tensionDate}
        done={tensionDone}
        title={`Tension ${dateToString(tensionDate, "date")}`}
        type={"Record"}
      />
    </View>
  );
};

export { DailyGoals };
