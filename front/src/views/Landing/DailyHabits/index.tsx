import type { FC } from "react";
import React from "react";
import { View } from "react-native";

import { Card } from "components/Card";
import { Subtitle } from "components/Subtitle";

import { styles } from "./styles";

const DailyHabits: FC = (): JSX.Element => {
  return(
    <>
      <Subtitle>{"Hábitos diarios"}</Subtitle>
      <View style={styles.container}>
        <View style={styles.column}>
          <Card bgColor={"ORANGE_TRANSLUCID"} color={"ORANGE"}>
            {"Ejercicio"}
          </Card>
        </View>
        <View style={styles.column}>
          <Card bgColor={"GREEN_TRANSLUCID"} color={"GREEN"}>
            {"Alimentación"}
          </Card>
        </View>
        <View style={styles.column}>
          <Card bgColor={"BLUE_TRANSLUCID"} color={"BLUE"}>
            {"Agua"}
          </Card>
        </View>
        <View style={styles.column}>
          <Card bgColor={"PURPLE_TRANSLUCID"} color={"PURPLE"}>
            {"Calma"}
          </Card>
        </View>
      </View>
    </>
  );
};

export { DailyHabits };
