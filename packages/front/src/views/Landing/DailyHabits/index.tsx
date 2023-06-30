import React, { useCallback } from "react";

import { ComingSoon } from "components/ComingSoon";
import { Column, Row } from "components/Grid";
import { Habit } from "components/Habit";
import { useUser } from "utils/auth";
import { setDayTime } from "utils/date";
import { useDbUserData } from "utils/db/firebase";

import type { IDailyHabitsProps } from "./types";

const DailyHabits = ({ navigate }: IDailyHabitsProps): JSX.Element => {
  const goToCalm = useCallback((): void => {
    navigate("Calm");
  }, [navigate]);

  const goToExercise = useCallback((): void => {
    navigate("Exercise");
  }, [navigate]);

  const goToFeeding = useCallback((): void => {
    navigate("Feeding");
  }, [navigate]);

  const user = useUser();
  const today = setDayTime(new Date(), 0);
  const foodIntakes = useDbUserData(user.uid, "FoodIntake", [
    ["date", ">=", today]
  ]);

  return (
    <Row columns={2}>
      <Column>
        <Habit
          bgColor={"ORANGE_TRANSLUCID"}
          color={"ORANGE"}
          img={"exercise"}
          onPress={goToExercise}
        >
          {"Ejercicio"}
        </Habit>
      </Column>
      <Column>
        <Habit
          bgColor={"GREEN_TRANSLUCID"}
          checked={foodIntakes.length >= 15 * 0.8}
          color={"GREEN"}
          img={"diet"}
          onPress={goToFeeding}
        >
          {"Alimentación"}
        </Habit>
      </Column>
      <Column>
        <ComingSoon>
          <Habit
            bgColor={"BLUE_TRANSLUCID"}
            color={"BLUE"}
            img={"drinkingWater"}
          >
            {"Agua"}
          </Habit>
        </ComingSoon>
      </Column>
      <Column>
        <Habit
          bgColor={"PURPLE_TRANSLUCID"}
          color={"PURPLE"}
          img={"calm"}
          onPress={goToCalm}
        >
          {"Calma"}
        </Habit>
      </Column>
    </Row>
  );
};

export { DailyHabits };
