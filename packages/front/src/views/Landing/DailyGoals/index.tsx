import React from "react";
import { View } from "react-native";

import { useUser } from "utils/auth";
import { addTime, compareDates, setDayTime } from "utils/date";
import { useDbUserData } from "utils/db/firebase";
import { useDbObjs } from "utils/db/realm";
import { getLastIntakes, getNextIntake, recipes } from "utils/medicine";
import { setUndoneNotification } from "utils/notifications";
import { getNextTension } from "utils/records/tension";

import { MedicineGoal } from "./MedicineGoal";
import { TensionGoal } from "./TensionGoal";

const DailyGoals = (): JSX.Element => {
  const user = useUser();
  const today = setDayTime(new Date(), 0);
  const medIntakes = useDbUserData(user.uid, "MedicineIntake");
  const tensions = useDbObjs("Tension");

  const nextTension = getNextTension(tensions);
  const tensionDone = compareDates(nextTension, today, true) > 0;
  const tensionDate = tensionDone ? tensions.slice(-1)[0]?.date : nextTension;

  const foodIntakes = useDbUserData(user.uid, "FoodIntake", [
    ["date", ">=", today]
  ]);
  setUndoneNotification("food", foodIntakes.length >= 15 * 0.8);

  const lastMedIntakes = getLastIntakes(medIntakes);
  const nextMedIntakes = recipes.map((recipe) => ({
    date: getNextIntake(recipe, lastMedIntakes[recipe.id]?.data),
    recipe: recipe.id
  }));

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
      {lastMedIntakes.map(({ data, id }) => (
        <MedicineGoal
          date={data.date}
          done
          key={`R${data.recipe}I${id}`}
          recipeId={data.recipe}
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
