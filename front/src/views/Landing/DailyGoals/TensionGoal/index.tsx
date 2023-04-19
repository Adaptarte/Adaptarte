import React, { useEffect, useReducer } from "react";

import { DailyGoal } from "components/DailyGoal";
import { Tension } from "components/Tension";
import { dateToString } from "utils/date";
import {
  addTensionNotification,
  cancelTensionNotification
} from "utils/notifications";

import type { TensionGoalProps } from "./types";

const TensionGoal = ({ date, done }: TensionGoalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useReducer((val: boolean) => !val, false);

  useEffect(() => {
    if (done) {
      cancelTensionNotification();
    } else {
      addTensionNotification(date);
    }
  }, [done]);

  return (
    <>
      <Tension setVisible={setIsOpen} visible={isOpen} />
      <DailyGoal
        date={date}
        done={done}
        onPress={setIsOpen}
        title={`Tension ${dateToString(date, "date")}`}
        type={"Record"}
      />
    </>
  );
};

export { TensionGoal };
