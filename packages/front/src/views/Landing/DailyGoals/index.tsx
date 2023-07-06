import React from "react";
import { View } from "react-native";

import { useUser } from "utils/auth";
import { addTime, setDayTime } from "utils/date";
import { useDbUserData } from "utils/db/firebase";
import { getLastIntakes, getNextIntake, recipes } from "utils/medicine";
import { setUndoneNotification } from "utils/notifications";

import { MedicineGoal } from "./MedicineGoal";
import { TensionGoal } from "./TensionGoal";
import { WeightGoal } from "./WeightGoal";

const DailyGoals = (): JSX.Element => {
  const user = useUser();
  const today = setDayTime(new Date(), 0);
  const filterToday = ["date", ">=", today] as ["date", ">=", Date];

  const medIntakes = useDbUserData(user.uid, "MedicineIntake");
  const tensionExam = useDbUserData(user.uid, "Tension", [filterToday])[0];
  const weight = useDbUserData(user.uid, "Weight", [filterToday])[0];
  const foodIntakes = useDbUserData(user.uid, "FoodIntake", [filterToday]);

  setUndoneNotification("food", foodIntakes.length >= 15 * 0.8);

  const lastMedIntakes = getLastIntakes(medIntakes);
  const nextMedIntakes = recipes.map(({ data, id }) => ({
    date: getNextIntake(data, lastMedIntakes[parseInt(id)]?.data),
    recipe: id
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
      <TensionGoal
        date={tensionExam?.data.date ?? setDayTime(new Date(), 9, "hour")}
        done={tensionExam !== undefined}
      />
      <WeightGoal
        date={weight?.data.date ?? setDayTime(new Date(), 9, "hour")}
        done={weight !== undefined}
      />
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
