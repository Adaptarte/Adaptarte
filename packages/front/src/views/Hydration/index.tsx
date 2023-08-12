import React, { useCallback, useEffect, useState } from "react";
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

const Hydration = (): JSX.Element => {
  const [date, setDate] = useState(new Date());
  const [bottleSize, setBottleSize] = useState({ height: 0, width: 0 });
  const [progressHydration, setProgressHydration] = useState(0);
  const [progressAnimated, setProgressAnimated] = useState(
    new Animated.Value(0),
  );

  const db = useDB();
  const score = useScore();

  const today = setDayTime(new Date(), 0);
  const hydration = db.getDocs("Hydration", [["date", ">=", today]])[0];
  const amountWater = hydration === undefined ? 0 : hydration.data.amount;

  useEffect(() => {
    Animated.timing(progressAnimated, {
      duration: 1000,
      toValue: (bottleSize.height * progressHydration) / 8,
      useNativeDriver: false,
    }).start();
    setProgressHydration(amountWater);
    setDate(new Date());
  }, [amountWater, progressHydration, setProgressHydration, hydration]);

  const handleLayout = (event: {
    nativeEvent: { layout: { height: number; width: number } };
  }): void => {
    const { height, width } = event.nativeEvent.layout;
    setBottleSize({ height: height * 0.82, width: width * 0.34 });
  };

  const handleSaveAmountWater = useCallback(() => {
    const data: DBHydrationIntake = {
      amount: progressHydration + 1,
      date: date,
    };

    registerWater().catch(console.error);
    hydration !== undefined
      ? db.updateDoc("Hydration", hydration.id, data)
      : db.addDoc("Hydration", data);
    score.add(1);
  }, [progressHydration, setProgressAnimated]);

  return (
    <Screen style={styles.screen}>
      <View>
        <Text variant={textVars.title}>{t().title}</Text>
        <Text>{t().description}</Text>
      </View>
      <View style={styles.bottleContainer} onLayout={handleLayout}>
        <View
          style={[
            styles.waterfillContainer,
            { height: bottleSize.height, width: bottleSize.width },
          ]}
        >
          <Animated.View
            style={[styles.waterfill, { height: progressAnimated }]}
          ></Animated.View>
        </View>
        <Img src={"waterbottle"} />
      </View>
      <View>
        <View style={styles.btnContainer}>
          <Button style={styles.btn} onPress={handleSaveAmountWater}>
            <Icon color={colors.WHITE} name={"plus"} size={30} />
          </Button>
        </View>
        <View style={styles.amountWater}>
          <Text variant={textVars.indicator}>{t().indicator}</Text>
          <Text>{progressHydration}</Text>
        </View>
        <ProgressBar value={progressHydration} total={8} />
      </View>
    </Screen>
  );
};

export { Hydration };
