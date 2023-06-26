import React, { useCallback } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { DataDose } from "components/DataDose";
import { Img } from "components/Img";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import type { TAppViewProps } from "navigation/App/types";
import { useUser } from "utils/auth";
import { useDbUser } from "utils/db/firebase";

import { DailyGoals } from "./DailyGoals";
import { DailyHabits } from "./DailyHabits";
import { styles, textVars } from "./styles";

const Landing = ({
  navigation: { navigate }
}: TAppViewProps<"Landing">): JSX.Element => {
  const user = useUser();
  const userData = useDbUser(user.uid);

  const name = user.displayName?.split(" ")[0] ?? "paciente";

  const goToProfile = useCallback(() => {
    navigate("Profile");
  }, [navigate]);

  const goToPanic = useCallback(() => {
    navigate("Panic");
  }, [navigate]);

  return (
    <Screen bg={"LIGHT"} style={styles.screen}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText} variant={textVars.welcome}>
          {`¡Bienvenido(a) de nuevo, ${name}!`}
        </Text>
        <Button onPress={goToProfile}>
          <Img src={"profile"} style={styles.profile} />
        </Button>
      </View>
      <DataDose diseases={userData?.diseases ?? {}} />
      <View style={styles.container}>
        <Text style={styles.sectionTitle} variant={textVars.title}>
          {"Metas diarias"}
        </Text>
        <DailyGoals />
        <Text style={styles.sectionTitle} variant={textVars.title}>
          {"Hábitos diarios"}
        </Text>
        <DailyHabits navigate={navigate} />
        <Button
          onPress={goToPanic}
          style={styles.panicBtn}
          variant={textVars.panicTextColor}
        >
          {"Pánico"}
        </Button>
      </View>
    </Screen>
  );
};

export { Landing };
