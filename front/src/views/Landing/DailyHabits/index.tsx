import type { FC } from "react";
import React from "react";

import { imgs } from "assets/imgs";
import { Card } from "components/Card";
import { Row } from "components/Grid";

const DailyHabits: FC = (): JSX.Element => {
  return(
    <Row columns={2}>
      <Card
        bgColor={"ORANGE_TRANSLUCID"}
        color={"ORANGE"}
        image={imgs.exercise}
      >
        {"Ejercicio"}
      </Card>
      <Card bgColor={"GREEN_TRANSLUCID"} color={"GREEN"} image={imgs.diet}>
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
