import type { FC } from "react";
import React, { useCallback } from "react";

import { Card } from "components/Card";
import { Row } from "components/Grid";

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
      <Card
        bgColor={"ORANGE_TRANSLUCID"}
        color={"ORANGE"}
        img={"exercise"}
        onPress={goToExercise}
      >
        {"Ejercicio"}
      </Card>
      <Card
        bgColor={"GREEN_TRANSLUCID"}
        color={"GREEN"}
        img={"diet"}
        onPress={goToFeeding}
      >
        {"Alimentación"}
      </Card>
      <Card bgColor={"BLUE_TRANSLUCID"} color={"BLUE"} img={"drinkingWater"}>
        {"Agua"}
      </Card>
      <Card bgColor={"PURPLE_TRANSLUCID"} color={"PURPLE"} img={"calm"}>
        {"Calma"}
      </Card>
    </Row>
  );
};

export { DailyHabits };
