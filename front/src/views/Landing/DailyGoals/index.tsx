import type { FC } from "react";
import React from "react";
import { View } from "react-native";

import { DailyGoal } from "components/DailyGoal";

const DailyGoals: FC = (): JSX.Element => {
  return (
    <View>
      <DailyGoal
        date={new Date()}
        done
        title={"Example goal"}
        type={"Record"}
      />
    </View>
  );
};

export { DailyGoals };
