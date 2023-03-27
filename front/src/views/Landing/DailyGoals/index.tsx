import type { FC } from "react";
import React from "react";

import { DailyGoal } from "components/DailyGoal";

const DailyGoals: FC = (): JSX.Element => {
  return (
    <>
      <DailyGoal
        date={new Date()}
        done
        title={"Example goal"}
        type={"Record"}
      />
    </>
  );
};

export { DailyGoals };
