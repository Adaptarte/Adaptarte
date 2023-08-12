import React, { useCallback } from "react";

import { Column, Row } from "components/Grid";
import { Habit } from "components/Habit";

import { t } from "./translations";
import type { DailyHabitsProps } from "./types";

const DailyHabits = ({
  calm = false,
  exercise = false,
  feeding = false,
  hydration = false,
  navigate,
}: DailyHabitsProps): JSX.Element => {
  const goToCalm = useCallback((): void => {
    navigate("Calm");
  }, [navigate]);

  const goToExercise = useCallback((): void => {
    navigate("Exercise");
  }, [navigate]);

  const goToFeeding = useCallback((): void => {
    navigate("Feeding");
  }, [navigate]);

  const goToWater = useCallback((): void => {
    navigate("Hydration");
  }, [navigate]);

  return (
    <Row columns={2}>
      <Column>
        <Habit
          bgColor={"ORANGE_TRANSLUCID"}
          checked={exercise}
          color={"ORANGE"}
          img={"exercise"}
          onPress={goToExercise}
        >
          {t().exercise}
        </Habit>
      </Column>
      <Column>
        <Habit
          bgColor={"GREEN_TRANSLUCID"}
          checked={feeding}
          color={"GREEN"}
          img={"diet"}
          onPress={goToFeeding}
        >
          {t().feeding}
        </Habit>
      </Column>
      <Column>
        <Habit
          bgColor={"BLUE_TRANSLUCID"}
          checked={hydration}
          color={"BLUE"}
          img={"drinkingWater"}
          onPress={goToWater}
        >
          {t().hydration}
        </Habit>
      </Column>
      <Column>
        <Habit
          bgColor={"PURPLE_TRANSLUCID"}
          checked={calm}
          color={"PURPLE"}
          img={"calm"}
          onPress={goToCalm}
        >
          {t().calm}
        </Habit>
      </Column>
    </Row>
  );
};

export { DailyHabits };
