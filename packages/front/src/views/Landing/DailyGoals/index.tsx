import type { FC } from "react";
import React from "react";
import { View } from "react-native";

import { addTime, compareDates } from "utils/date";
import { useDbObjs } from "utils/db/realm";
import type { SchemaType } from "utils/db/realm/types";
import { getLastIntakes, getNextIntake, recipes } from "utils/medicine";
import { setUndoneNotification } from "utils/notifications";
import { getNextTension } from "utils/records/tension";

import { MedicineGoal } from "./MedicineGoal";
import { TensionGoal } from "./TensionGoal";

const DailyGoals: FC = (): JSX.Element => {
  const tensions = useDbObjs("Tension");
  const medIntakes = useDbObjs("MedicineIntake");

  const nextTension = getNextTension(tensions);
  const tensionDone = compareDates(nextTension, new Date(), true) > 0;
  const tensionDate = tensionDone ? tensions.slice(-1)[0]?.date : nextTension;

  const lastMedIntakes = getLastIntakes(
    medIntakes
  ) as SchemaType<"MedicineIntake">[];

  const nextMedIntakes = recipes.map((recipe) => {
    return {
      date: getNextIntake(recipe, lastMedIntakes[recipe.id]),
      recipe: recipe.id
    };
  });

  const foodIntakes = useDbObjs("FoodIntake").filter(
    ({ date }) => compareDates(date, new Date(), true) === 0
  );
  setUndoneNotification("food", foodIntakes.length >= 15 * 0.8);

  const undoneMedIntake = nextMedIntakes.reduce((prev, { date }) => {
    return date.getTime() < prev ? date.getTime() : prev;
  }, Number.MAX_SAFE_INTEGER);
  setUndoneNotification(
    "medicine",
    false,
    addTime(new Date(undoneMedIntake), 4, "hour")
  );

  return (
    <View>
      <TensionGoal date={tensionDate} done={tensionDone} />
      {lastMedIntakes.map((intake) => (
        <MedicineGoal
          date={intake.date}
          done
          key={`R${intake.recipe}I${intake.id}`}
          recipeId={intake.recipe}
        />
      ))}
      {nextMedIntakes.map(({ date, recipe }) => (
        <MedicineGoal
          date={date}
          done={false}
          key={`R${recipe}`}
          recipeId={recipe}
        />
      ))}
    </View>
  );
};

export { DailyGoals };
