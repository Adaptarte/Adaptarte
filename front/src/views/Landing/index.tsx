import type { FC } from "react";
import React from "react";
import { Image, View } from "react-native";

import { imgs } from "assets/imgs";
import { DataDose } from "components/DataDose";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import type { TAppViewProps } from "navigation/App/types";
import { useUser } from "utils/auth";

import { DailyGoals } from "./DailyGoals";
import { DailyHabits } from "./DailyHabits";
import { styles, textVars } from "./styles";

const Landing: FC<TAppViewProps<"Landing">> = ({
  navigation: { navigate }
}: TAppViewProps<"Landing">): JSX.Element => {
  const user = useUser();

  const name = user.displayName?.split(" ")[0] ?? "paciente";

  return (
    <Screen style={styles.screen}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText} variant={textVars.welcome}>
          {`¡Bienvenido(a) de nuevo, ${name}!`}
        </Text>
        <Image source={imgs.profile} style={styles.profile} />
      </View>
      <DataDose />
      <View style={styles.container}>
        <Text style={styles.sectionTitle} variant={textVars.title}>
          {"Metas diarias"}
        </Text>
        <DailyGoals />
        <Text style={styles.sectionTitle} variant={textVars.title}>
          {"Hábitos diarios"}
        </Text>
        <DailyHabits navigate={navigate} />
      </View>
    </Screen>
  );
};

export { Landing };
