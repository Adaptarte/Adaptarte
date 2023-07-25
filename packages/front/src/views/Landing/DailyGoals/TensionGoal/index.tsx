import React, { useCallback, useEffect, useReducer } from "react";

import { DailyGoal } from "components/DailyGoal";
import { dateToString } from "utils/date";
import { useDB } from "utils/db";
import type { DBTension } from "utils/db/types";
import { useScore } from "utils/engagement/score";
import {
  addTensionNotification,
  cancelTensionNotification,
  setUndoneNotification
} from "utils/notifications";
import { TensionRecord } from "views/modals/TensionRecord";

import type { TensionGoalProps } from "./types";

const TensionGoal = ({ date, done }: TensionGoalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useReducer((val: boolean) => !val, false);
  const db = useDB();
  const score = useScore();

  setUndoneNotification("tension", done);

  useEffect(() => {
    if (done) {
      cancelTensionNotification();
    } else {
      addTensionNotification(date);
    }
  }, [done]);

  const handleSave = useCallback(
    (data: DBTension) => {
      db.addDoc("Tension", data);
      score.add(10);
    },
    [score.add]
  );

  return (
    <>
      <TensionRecord
        onSave={handleSave}
        setVisible={setIsOpen}
        visible={isOpen}
      />
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
