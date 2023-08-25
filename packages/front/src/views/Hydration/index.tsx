import React, { useCallback, useEffect, useMemo } from "react";
import { Animated, View } from "react-native";

import { Button } from "components/Button";
import { Icon } from "components/Icon";
import { Img } from "components/Img";
import { ProgressBar } from "components/ProgressBar";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import { colors } from "styles";
import { registerWater } from "utils/analytics/analytics";
import { setDayTime } from "utils/date";
import { useDB } from "utils/db";
import type { DBHydrationIntake } from "utils/db/types";
import { useScore } from "utils/engagement/score";

import { styles, textVars } from "./styles";
import { t } from "./translation";

const hydrationGoal = 8;

const Hydration = (): JSX.Element => {
  const db = useDB();
  const score = useScore();

  const today = setDayTime(new Date(), 0);
  const hydration = db.getDocs("Hydration", [["date", ">=", today]])[0];
  const hydrationAmount = hydration === undefined ? 0 : hydration.data.amount;
  const progressAnimated = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.timing(progressAnimated, {
      duration: 1000,
      toValue: hydrationAmount,
      useNativeDriver: false,
    }).start();
  }, [hydrationAmount]);

  const handleSave = useCallback(() => {
    const data: DBHydrationIntake = {
      amount: hydrationAmount + 1,
      date: new Date(),
    };

    if (hydration === undefined) {
      db.addDoc("Hydration", data);
    } else {
      db.updateDoc("Hydration", hydration.id, data);
    }
    registerWater().catch(console.error);
    score.add(1);
  }, [db, hydrationAmount, score.add]);

  const waterHeight = progressAnimated.interpolate({
    extrapolate: "clamp",
    inputRange: [0, hydrationGoal],
    outputRange: ["0%", "77%"],
  });

  return (
    <Screen>
      <Text variant={textVars.title}>{t().title}</Text>
      <Text>{t().description}</Text>
      <View style={styles.center}>
        <View style={styles.bottleContainer}>
          <Animated.View style={[styles.water, { height: waterHeight }]} />
          <Img src={"waterbottle"} style={styles.bottle} />
        </View>
        <Button onPress={handleSave} style={styles.btn}>
          <Icon color={colors.WHITE} name={"plus"} size={30} />
        </Button>
      </View>
      <View style={styles.amountWater}>
        <Text variant={textVars.indicator}>{t().indicator}</Text>
        <Text>{hydrationAmount}</Text>
      </View>
      <ProgressBar total={hydrationGoal} value={hydrationAmount} />
    </Screen>
  );
};

export { Hydration };
