import type { FC } from "react";
import React, { useCallback } from "react";

import { Card } from "components/Card";
import { ComingSoon } from "components/ComingSoon";
import { Column, Row } from "components/Grid";

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
        <Card
          bgColor={"ORANGE_TRANSLUCID"}
          color={"ORANGE"}
          img={"exercise"}
          onPress={goToExercise}
        >
          {"Ejercicio"}
        </Card>
      </Column>
      <Column>
        <Card
          bgColor={"GREEN_TRANSLUCID"}
          color={"GREEN"}
          img={"diet"}
          onPress={goToFeeding}
        >
          {"Alimentación"}
        </Card>
      </Column>
      <Column>
        <ComingSoon>
          <Card
            bgColor={"BLUE_TRANSLUCID"}
            color={"BLUE"}
            img={"drinkingWater"}
          >
            {"Agua"}
          </Card>
        </ComingSoon>
      </Column>
      <Column>
        <ComingSoon>
          <Card bgColor={"PURPLE_TRANSLUCID"} color={"PURPLE"} img={"calm"}>
            {"Calma"}
          </Card>
        </ComingSoon>
      </Column>
    </Row>
  );
};

export { DailyHabits };
