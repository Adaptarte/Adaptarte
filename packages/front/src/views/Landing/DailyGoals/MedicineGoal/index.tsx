import React, { useCallback, useEffect, useReducer } from "react";

import { DailyGoal } from "components/DailyGoal";
import { useDB } from "utils/db";
import type { DBMedicineIntake } from "utils/db/types";
import { useScore } from "utils/engagement/score";
import { getRecipeById } from "utils/medicine";
import {
  addMedicineNotification,
  cancelMedicineNotification,
} from "utils/notifications";
import { MedicineIntakeRecord } from "views/modals/MedicineIntakeRecord";

import type { MedicineGoalProps } from "./types";

const MedicineGoal = ({
  date,
  done,
  recipeId,
}: MedicineGoalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useReducer((val: boolean) => !val, false);
  const db = useDB();
  const score = useScore();
  const recipe = getRecipeById(recipeId);

  const handleSave = useCallback(
    (data: DBMedicineIntake) => {
      db.addDoc("MedicineIntake", data);
      score.add(10);
      cancelMedicineNotification(recipe.id);
    },
    [recipe.id, score.add],
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
