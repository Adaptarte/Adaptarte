import React, { useCallback, useReducer } from "react";

import { DailyGoal } from "components/DailyGoal";
import { dateToString } from "utils/date";
import { useDB } from "utils/db";
import type { DBWeight } from "utils/db/types";
import { useScore } from "utils/engagement/score";
import { WeightRecord } from "views/modals/WeightRecord";

import type { WeightGoalProps } from "./types";

const WeightGoal = ({ date, done }: WeightGoalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useReducer((val: boolean) => !val, false);
  const db = useDB();
  const score = useScore();

  const handleSave = useCallback(
    (data: DBWeight) => {
      db.addDoc("Weight", data);
      score.add(10);
    },
    [score.add]
  );

  return (
    <>
      <WeightRecord
        onSave={handleSave}
        setVisible={setIsOpen}
        visible={isOpen}
      />
      <DailyGoal
        date={date}
        done={done}
        onPress={setIsOpen}
        title={`Peso ${dateToString(date, "date")}`}
        type={"Record"}
      />
    </>
  );
};

export { WeightGoal };
