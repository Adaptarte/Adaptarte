import type { FC } from "react";
import React, { useCallback } from "react";

import { imgs } from "assets/imgs";
import { Card } from "components/Card";
import { Row } from "components/Grid";

import type { IDailyHabitsProps } from "./types";

const DailyHabits: FC<IDailyHabitsProps> = ({
  navigate,
}: IDailyHabitsProps): JSX.Element => {
  const goToExcercise = useCallback((): void => {
    navigate("Excercise");
  }, [navigate]);
  
  const goToFeeding = useCallback((): void => {
    navigate("Feeding");
  }, [navigate]);

  return(
    <Row columns={2}>
      <Card
        bgColor={"ORANGE_TRANSLUCID"}
        color={"ORANGE"}
        image={imgs.exercise}
        onPress={goToExcercise}
      >
        {"Ejercicio"}
      </Card>
      <Card
        bgColor={"GREEN_TRANSLUCID"}
        color={"GREEN"}
        image={imgs.diet}
        onPress={goToFeeding}
      >
        {"Alimentación"}
      </Card>
      <Card
        bgColor={"BLUE_TRANSLUCID"}
        color={"BLUE"}
        image={imgs.drinkingWater}
      >
        {"Agua"}
      </Card>
      <Card bgColor={"PURPLE_TRANSLUCID"} color={"PURPLE"} image={imgs.calm}>
        {"Calma"}
      </Card>
    </Row>
  );
};

export { DailyHabits };
