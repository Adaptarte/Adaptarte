import React, { useMemo } from "react";
import { View } from "react-native";

import { addTime, setDayTime } from "utils/date";
import { useDB } from "utils/db";
import { getMedicineGoals } from "utils/medicine";
import { setUndoneNotification } from "utils/notifications";

import { MedicineGoal } from "./MedicineGoal";
import { TensionGoal } from "./TensionGoal";
import { WeightGoal } from "./WeightGoal";

const DailyGoals = (): JSX.Element => {
  const db = useDB();
  const today = setDayTime(new Date(), 0);
  const filterToday = ["date", ">=", today] as ["date", ">=", Date];

  const medicineRecipes = db.getDocs("MedicineRecipes");
  const medicineIntakes = db.getDocs("MedicineIntake");
  const tensionExam = db.getDocs("Tension", [filterToday])[0];
  const weight = db.getDocs("Weight", [filterToday])[0];
  const foodIntakes = db.getDocs("FoodIntake", [filterToday]);

  setUndoneNotification("food", foodIntakes.length >= 15 * 0.8);

  const medicineGoals = useMemo(() => {
    if (medicineRecipes.length === 0) {
      return [];
    }
    return getMedicineGoals(medicineRecipes, medicineIntakes);
  }, [medicineIntakes, medicineRecipes]);
  const undoneMedIntake = medicineGoals.reduce((prev, { goals }) => {
    return goals[0]?.getTime() < prev ? goals[0].getTime() : prev;
  }, addTime(new Date(), 1, "day").getTime());
  setUndoneNotification(
    "medicine",
    false,
    addTime(new Date(undoneMedIntake), 4, "hour"),
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
      {medicineGoals.flatMap(({ goals, recipe }) => {
        return goals.map((date) => (
          <MedicineGoal
            date={date}
            done={false}
            key={`R${recipe.id}${date.getTime()}`}
            recipe={recipe}
          />
        ));
      })}
      {medicineGoals.flatMap(({ intakes, recipe }) => {
        return intakes.map((intake) => (
          <MedicineGoal
            date={intake.data.date}
            done
            key={`R${recipe.id}I${intake.id}`}
            recipe={recipe}
          />
        ));
      })}
    </View>
  );
};

export { DailyGoals };
