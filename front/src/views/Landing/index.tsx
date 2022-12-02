import type { FC } from "react";
import React from "react";
import { Image, Text, View } from "react-native";

import { profile } from "assets/imgs";
import { DataDose } from "components/DataDose";
import { Screen } from "components/Screen";
import type { TAppViewProps } from "navigation/App/types";

import { DailyGoals } from "./DailyGoals";
import { DailyHabits } from "./DailyHabits";
import { styles } from "./styles";

const name = "Clemencia";

const Landing: FC<TAppViewProps<"Landing">> = (): JSX.Element => {
  return (
    <Screen>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>
          {`¡Bienvenido(a) de nuevo, ${name}!`}
        </Text>
        <Image source={profile} style={styles.profile} />
      </View>
      <DataDose 
        hour={"8:00 am - 6:00 pm"} 
        title={"¡Recuerda beber 8 vasos de agua cada día!"}
      />
      <View style={styles.container}> 
        <Text style={styles.sectionTitle}>{"Metas diarias"}</Text>
        <DailyGoals />
        <Text style={styles.sectionTitle}>{"Hábitos diarios"}</Text>
        <DailyHabits />
      </View>
    </Screen>
  );
};

export { Landing };
