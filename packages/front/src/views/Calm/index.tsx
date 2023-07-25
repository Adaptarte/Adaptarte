import React, { useCallback } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Img } from "components/Img";
import { List } from "components/List";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import { setDayTime } from "utils/date";
import { useDB } from "utils/db";
import type { DBCalmActivity, DBDoc } from "utils/db/types";
import { useScore } from "utils/engagement/score";

import { styles, textVars } from "./styles";
import { t } from "./translations";
import { activities } from "./types";

const Calm = (): JSX.Element => {
  const db = useDB();
  const score = useScore();

  const today = setDayTime(new Date(), 0);
  const todayActivities = db.getDocs("CalmActivities", [["date", ">=", today]]);

  const calmHabit = todayActivities.reduce<
    Record<string, DBDoc<DBCalmActivity>>
  >((acc, val) => {
    acc[val.data.activity] = val;
    return acc;
  }, {});

  return (
    <Screen>
      <Text style={styles.text} variant={textVars.title}>
        {t().stress.title}
      </Text>
      <Text style={styles.text}>{t().stress.whatIs}</Text>
      <Text style={styles.text}>{t().stress.consequences}</Text>

      <Text style={styles.text} variant={textVars.title}>
        {t().calm.title}
      </Text>
      <View style={styles.center}>
        <Img src={"calm"} style={styles.calmImg} />
      </View>
      <Text style={styles.text}>{t().calm.content}</Text>
      <List
        columns={2}
        data={activities.slice()}
        keyGetter={(activity): string => activity}
        renderItem={(activity): JSX.Element => {
          const doc = calmHabit[activity];
          const done = doc !== undefined;
          const handlePress = useCallback(() => {
            const SCORE = 2;
            if (done) {
              db.delDoc("CalmActivities", doc.id);
              score.add(-SCORE);
            } else {
              db.addDoc("CalmActivities", { activity, date: new Date() });
              score.add(SCORE);
            }
          }, [doc, score.add]);

          return (
            <Button
              onPress={handlePress}
              variant={{ style: done ? "solid" : "outline" }}
            >
              {t().activities[activity]}
            </Button>
          );
        }}
      />
    </Screen>
  );
};

export { Calm };
