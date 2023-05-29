import React, { useCallback, useEffect, useReducer } from "react";

import { DailyGoal } from "components/DailyGoal";
import { Tension } from "components/Tension";
import { registerMedicineGA } from "utils/analytics/analytics";
import { useUser } from "utils/auth";
import { dateToString } from "utils/date";
import { addUserData } from "utils/db/firebase";
import { dbCreate, useRealm } from "utils/db/realm";
import type { DBTension } from "utils/db/types";
import {
  addTensionNotification,
  cancelTensionNotification,
  setUndoneNotification
} from "utils/notifications";

import type { TensionGoalProps } from "./types";

const TensionGoal = ({ date, done }: TensionGoalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useReducer((val: boolean) => !val, false);
  const realm = useRealm();
  const user = useUser();

  setUndoneNotification("tension", done);

  useEffect(() => {
    if (done) {
      cancelTensionNotification();
    } else {
      addTensionNotification(date);
    }
  }, [done]);

  const handleSaveTension = useCallback((data: DBTension) => {
    registerMedicineGA().catch(console.error);
    realm.write(() => {
      dbCreate(realm, "Tension", data);
    });
    addUserData(user.uid, "Tension", data).catch(console.error);
  }, []);

  return (
    <>
      <Tension
        onSave={handleSaveTension}
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
