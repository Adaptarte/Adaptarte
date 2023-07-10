import React, { useCallback, useEffect, useReducer } from "react";

import { DailyGoal } from "components/DailyGoal";
import { useUser } from "utils/auth";
import { addUserData } from "utils/db/firebase";
import type { DBMedicineIntake } from "utils/db/types";
import { getRecipeById } from "utils/medicine";
import {
  addMedicineNotification,
  cancelMedicineNotification
} from "utils/notifications";
import { MedicineIntakeRecord } from "views/modals/MedicineIntakeRecord";

import type { MedicineGoalProps } from "./types";

const MedicineGoal = ({
  date,
  done,
  recipeId
}: MedicineGoalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useReducer((val: boolean) => !val, false);
  const user = useUser();
  const recipe = getRecipeById(recipeId);

  const handleSave = useCallback(
    (data: DBMedicineIntake) => {
      addUserData(user.uid, "MedicineIntake", data).catch(console.error);
      cancelMedicineNotification(recipe.id);
    },
    [recipe.id, user.uid]
  );

  useEffect(() => {
    if (!done) {
      addMedicineNotification({ date, recipe: recipeId });
    }
  }, [done]);

  return (
    <>
      <MedicineIntakeRecord
        onSave={handleSave}
        recipe={recipe}
        setVisible={setIsOpen}
        visible={isOpen}
      />
      <DailyGoal
        date={date}
        done={done}
        onPress={setIsOpen}
        title={recipe.data.medicine}
        type={"Pill"}
      />
    </>
  );
};

export { MedicineGoal };
