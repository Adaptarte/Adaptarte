import type { FC } from "react";
import React from "react";
import { View } from "react-native";

import { DataDose } from "components/DataDose";
import { Header } from "components/Header";
import { Screen } from "components/Screen";
import type { TAppViewProps } from "navigation/App/types";

import { DailyGoals } from "./DailyGoals";
import { DailyHabits } from "./DailyHabits";
import { styles } from "./styles";

const Landing: FC<TAppViewProps<"Landing">> = (): JSX.Element => {
  return (
    <Screen>
      <Header name={"Clemencia"}/>
      <DataDose 
        hour={"8:00 am - 6:00 pm"} 
        title={"¡Recuerda beber 8 vasos de agua cada día!"}
      />
      <View style={styles.container}>  
        <DailyGoals />
        <DailyHabits />
      </View>
    </Screen>
  );
};

export { Landing };
