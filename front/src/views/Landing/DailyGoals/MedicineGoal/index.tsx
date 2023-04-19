import React, { useEffect, useReducer } from "react";

import { DailyGoal } from "components/DailyGoal";
import { MedicineIntake } from "components/MedicineIntake";
import { getRecipeById } from "utils/medicine";
import { addMedicineNotification } from "utils/notifications";

import type { MedicineGoalProps } from "./types";

const MedicineGoal = ({
  date,
  done,
  recipeId
}: MedicineGoalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useReducer((val: boolean) => !val, false);
  const recipe = getRecipeById(recipeId);

  useEffect(() => {
    if (!done) {
      addMedicineNotification({ date, recipe: recipeId });
    }
  }, [done]);

  return (
    <>
      <MedicineIntake recipe={recipe} setVisible={setIsOpen} visible={isOpen} />
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
