import type { FC } from "react";
import React, { useCallback } from "react";

import { ComingSoon } from "components/ComingSoon";
import { Column, Row } from "components/Grid";
import { Habit } from "components/Habit";

import type { IDailyHabitsProps } from "./types";

const DailyHabits: FC<IDailyHabitsProps> = ({
  navigate
}: IDailyHabitsProps): JSX.Element => {
  const goToExercise = useCallback((): void => {
    navigate("Exercise");
  }, [navigate]);

  const goToFeeding = useCallback((): void => {
    navigate("Feeding");
  }, [navigate]);

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
        <ComingSoon>
          <Habit bgColor={"PURPLE_TRANSLUCID"} color={"PURPLE"} img={"calm"}>
            {"Calma"}
          </Habit>
        </ComingSoon>
      </Column>
    </Row>
  );
};

export { DailyHabits };
