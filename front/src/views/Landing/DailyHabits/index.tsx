import type { FC } from "react";
import React from "react";
import { View } from "react-native";

import { Card } from "components/Card";
import { Subtitle } from "components/Subtitle";

import { styles } from "./styles";

const DailyHabits: FC = (): JSX.Element => {
  return(
    <View style={styles.container}>
      <Subtitle>{"Hábitos diarios"}</Subtitle>
      <Card bgColor={"ORANGE_TRANSLUCID"} color={"ORANGE"}>
        {"Ejercicio"}
      </Card>
      <Card bgColor={"GREEN_TRANSLUCID"} color={"GREEN"}>
        {"Alimentación"}
      </Card>
      <Card bgColor={"BLUE_TRANSLUCID"} color={"BLUE"}>
        {"Agua"}
      </Card>
      <Card bgColor={"PURPLE_TRANSLUCID"} color={"PURPLE"}>
        {"Calma"}
      </Card>
    </View>
  );
};

export { DailyHabits };
