import React, { useCallback } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { DataDose } from "components/DataDose";
import { Icon } from "components/Icon";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import type { TAppViewProps } from "navigation/App/types";
import { colors } from "styles";
import { useUser } from "utils/auth";
import { setDayTime } from "utils/date";
import { useDB } from "utils/db";

import { DailyGoals } from "./DailyGoals";
import { DailyHabits } from "./DailyHabits";
import { styles, textVars } from "./styles";

const Landing = ({
  navigation: { navigate }
}: TAppViewProps<"Landing">): JSX.Element => {
  const db = useDB();
  const user = useUser();
  const userData = db.getUser();
  const name = user.displayName?.split(" ")[0] ?? "paciente";

  const today = setDayTime(new Date(), 0);
  const foodIntakes = db.getDocs("FoodIntake", [["date", ">=", today]]);

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
          <Icon color={colors.GLAUCOUS} name={"user-circle"} size={48} />
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
        <DailyHabits
          feeding={foodIntakes.length >= 15 * 0.8}
          navigate={navigate}
        />
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
