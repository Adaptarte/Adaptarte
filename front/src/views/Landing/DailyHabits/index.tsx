import type { FC } from "react";
import React from "react";

import { Card } from "components/Card";
import { Column, Row } from "components/Grid";

const DailyHabits: FC = (): JSX.Element => {
  return(
    <Row columns={2}>
      <Column>
        <Card bgColor={"ORANGE_TRANSLUCID"} color={"ORANGE"}>
          {"Ejercicio"}
        </Card>
      </Column>
      <Column>
        <Card bgColor={"GREEN_TRANSLUCID"} color={"GREEN"}>
          {"Alimentación"}
        </Card>
      </Column>
      <Column>
        <Card bgColor={"BLUE_TRANSLUCID"} color={"BLUE"}>
          {"Agua"}
        </Card>
      </Column>
      <Column>
        <Card bgColor={"PURPLE_TRANSLUCID"} color={"PURPLE"}>
          {"Calma"}
        </Card>
      </Column>
    </Row>
  );
};

export { DailyHabits };
