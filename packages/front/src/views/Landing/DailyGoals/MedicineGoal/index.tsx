import React, { useCallback, useEffect, useReducer } from "react";

import { DailyGoal } from "components/DailyGoal";
import { MedicineIntake } from "components/MedicineIntake";
import { useUser } from "utils/auth";
import { addUserData } from "utils/db/firebase";
import { dbCreate, useRealm } from "utils/db/realm";
import type { DBMedicineIntake } from "utils/db/types";
import { getRecipeById } from "utils/medicine";
import {
  addMedicineNotification,
  cancelMedicineNotification
} from "utils/notifications";

import type { MedicineGoalProps } from "./types";

const MedicineGoal = ({
  date,
  done,
  recipeId
}: MedicineGoalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useReducer((val: boolean) => !val, false);
  const realm = useRealm();
  const user = useUser();
  const recipe = getRecipeById(recipeId);

  const handleSave = useCallback(
    (data: DBMedicineIntake) => {
      realm.write(() => {
        dbCreate(realm, "MedicineIntake", data);
      });
      addUserData(user.uid, "MedicineIntake", data).catch(console.error);
      cancelMedicineNotification(recipe.id);
    },
    [realm, recipe, user]
  );

  useEffect(() => {
    if (!done) {
      addMedicineNotification({ date, recipe: recipeId });
    }
  }, [done]);

  return (
    <>
      <MedicineIntake
        onSave={handleSave}
        recipe={recipe}
        setVisible={setIsOpen}
        visible={isOpen}
      />
      <DailyGoal
        date={date}
        done={done}
        onPress={setIsOpen}
        title={recipe.medicine}
        type={"Pill"}
      />
    </>
  );
};

export { MedicineGoal };
