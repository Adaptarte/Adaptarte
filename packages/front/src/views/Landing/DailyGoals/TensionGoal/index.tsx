import React, { useCallback, useEffect, useReducer } from "react";

import { DailyGoal } from "components/DailyGoal";
import { useUser } from "utils/auth";
import { dateToString } from "utils/date";
import { addUserData } from "utils/db/firebase";
import type { DBTension } from "utils/db/types";
import {
  addTensionNotification,
  cancelTensionNotification,
  setUndoneNotification
} from "utils/notifications";
import { TensionRecord } from "views/modals/TensionRecord";

import type { TensionGoalProps } from "./types";

const TensionGoal = ({ date, done }: TensionGoalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useReducer((val: boolean) => !val, false);
  const user = useUser();

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
      addUserData(user.uid, "Tension", data).catch(console.error);
    },
    [user.uid]
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
