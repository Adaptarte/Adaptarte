import React, { useCallback, useReducer } from "react";

import { DailyGoal } from "components/DailyGoal";
import { useUser } from "utils/auth";
import { dateToString } from "utils/date";
import { addUserData } from "utils/db/firebase";
import type { DBWeight } from "utils/db/types";
import { WeightRecord } from "views/modals/WeightRecord";

import type { WeightGoalProps } from "./types";

const WeightGoal = ({ date, done }: WeightGoalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useReducer((val: boolean) => !val, false);
  const user = useUser();

  const handleSave = useCallback(
    (data: DBWeight) => {
      addUserData(user.uid, "Weight", data).catch(console.error);
    },
    [user.uid]
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
