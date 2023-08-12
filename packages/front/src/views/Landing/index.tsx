import React, { useCallback } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { DataDose } from "components/DataDose";
import { Icon } from "components/Icon";
import { Img } from "components/Img";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import type { TAppViewProps } from "navigation/App/types";
import { colors } from "styles";
import { useUser } from "utils/auth";
import { setDayTime } from "utils/date";
import { useDB } from "utils/db";
import { useScore } from "utils/engagement/score";
import { NotificationsPermission } from "views/modals/NotificationsPermission";

import { DailyGoals } from "./DailyGoals";
import { DailyHabits } from "./DailyHabits";
import { styles, textVars } from "./styles";
import { t } from "./translations";

const Landing = ({
  navigation: { navigate },
}: TAppViewProps<"Landing">): JSX.Element => {
  const db = useDB();
  const userData = db.getUser();
  const score = useScore();
  const today = setDayTime(new Date(), 0);
  const foodIntakes = db.getDocs("FoodIntake", [["date", ">=", today]]);
  const exerciseDone = db.getDocs("Exercises", [["date", ">=", today]]);
  const hydration = db.getDocs("Hydration", [["date", ">=", today]])[0];
  const hydrationDone = hydration === undefined ? 0 : hydration.data.amount;

  const user = useUser();
  const name = user.displayName?.split(" ")[0] ?? "paciente";

  const goToProfile = useCallback(() => {
    navigate("Profile");
  }, [navigate]);

  return (
    <Screen bg={"LIGHT"} style={styles.screen}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText} variant={textVars.welcome}>
          {`¡${t().welcome}, ${name}!`}
        </Text>
        <Button onPress={goToProfile} style={styles.profileBtn}>
          {user.photoURL ? (
            <Img src={{ uri: user.photoURL }} style={styles.img} />
          ) : (
            <Icon color={colors.GREY} name={"user-circle"} size={48} />
          )}
          <Text>
            <Icon color={colors.YELLOW} name={"star"} size={16} />
            {score.value}
          </Text>
        </Button>
      </View>
      <DataDose diseases={userData?.diseases ?? {}} />
      <View style={styles.container}>
        <Text style={styles.sectionTitle} variant={textVars.title}>
          {t().dailyGoals}
        </Text>
        <DailyGoals />
        <Text style={styles.sectionTitle} variant={textVars.title}>
          {t().dailyHabits}
        </Text>
        <DailyHabits
          exercise={exerciseDone.length > 0}
          feeding={foodIntakes.length >= 15 * 0.8}
          navigate={navigate}
          hydration={hydrationDone >= 8}
        />
        <NotificationsPermission />
      </View>
    </Screen>
  );
};

export { Landing };
