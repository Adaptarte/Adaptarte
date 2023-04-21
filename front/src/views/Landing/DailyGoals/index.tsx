import type { FC } from "react";
import React from "react";
import { View } from "react-native";

import { compareDates } from "utils/date";
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

  const foodIntakes = useDbObjs("Consumption").filter(
    ({ date }) => compareDates(date, new Date(), true) === 0
  );
  setUndoneNotification("food", foodIntakes.length >= 15 * 0.8);

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
      {recipes.map((recipe) => (
        <MedicineGoal
          date={getNextIntake(recipe, lastMedIntakes[recipe.id])}
          done={false}
          key={`R${recipe.id}`}
          recipeId={recipe.id}
        />
      ))}
    </View>
  );
};

export { DailyGoals };
