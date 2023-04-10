import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { compareDates } from "utils/date";
import { dbObjects, useRealm } from "utils/db/realm";
import type { SchemaType } from "utils/db/types";
import { getLastIntakes, getNextIntake, recipes } from "utils/medicine";
import { getNextTension } from "utils/records/tension";

import { MedicineGoal } from "./MedicineGoal";
import { TensionGoal } from "./TensionGoal";

const DailyGoals: FC = (): JSX.Element => {
  const realm = useRealm();
  const [tensions, setTensions] = useState<SchemaType<"Tension">[]>([]);

  useEffect(() => {
    setTensions(dbObjects(realm, "Tension"));
  }, [realm, setTensions]);

  const nextTension = getNextTension(tensions);
  const tensionDone = compareDates(nextTension, new Date(), true) > 0;
  const tensionDate = tensionDone ? tensions.slice(-1)[0]?.date : nextTension;

  const [medIntakes, setMedIntakes] = useState<SchemaType<"MedicineIntake">[]>(
    []
  );

  useEffect(() => {
    setMedIntakes(dbObjects(realm, "MedicineIntake"));
  }, [realm, setMedIntakes]);

  const lastMedIntakes = getLastIntakes(
    medIntakes
  ) as SchemaType<"MedicineIntake">[];

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
