import React, { useCallback } from "react";
import { Modal, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import Toast from "react-native-toast-message";

import { Button } from "components/Button";
import { Carousel } from "components/Carousel";
import { Icon } from "components/Icon";
import { Text } from "components/Text";
import type { TAppViewProps } from "navigation/App/types";
import { colors } from "styles";
import { registerExercise } from "utils/analytics/analytics";
import { setDayTime } from "utils/date";
import { useDB } from "utils/db";
import type { DBExercise } from "utils/db/types";
import { useScore } from "utils/engagement/score";
import { toastConfig } from "utils/toast/config";
import { data } from "views/Exercise/data";

import { styles, textVars } from "./styles";
import { t } from "./translations";

const Exercise = ({
  navigation: { canGoBack, goBack },
}: TAppViewProps<"Exercise">): JSX.Element => {
  const db = useDB();
  const score = useScore();

  const today = setDayTime(new Date(), 0);
  const exercise = db.getDocs("Exercises", [["date", ">=", today]])[0];

  const handleSaveExercise = useCallback(
    (data: DBExercise) => {
      registerExercise().catch(console.error);
      db.addDoc("Exercises", data);
      score.add(5);
    },
    [score.add],
  );

  const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

  return (
    <GestureRecognizer onSwipeDown={goBack} style={{ flex: 1 }}>
      <Modal
        animationType={"slide"}
        onRequestClose={goBack}
        transparent
        visible
      >
        <View style={styles.modalExercise}>
          <View style={styles.exercise}>
            {canGoBack() ? (
              <Button onPress={goBack} style={styles.closeButton}>
                <Icon color={colors.ORANGE} name={"times"} size={20} />
              </Button>
            ) : undefined}
            <Text style={styles.exerciseTitle} variant={textVars.title}>
              {t().title}
            </Text>
            <Text style={styles.exerciseText} variant={textVars.details}>
              {t().information}
            </Text>
            <Text style={styles.exerciseText} variant={textVars.details}>
              {t().note}
            </Text>
            <Carousel
              check={exercise !== undefined}
              data={data}
              onSave={handleSaveExercise}
            />
          </View>
        </View>
        <Toast
          bottomOffset={20}
          config={toastConfig}
          position={"bottom"}
          visibilityTime={4000}
        />
      </Modal>
    </GestureRecognizer>
  );
};

export { Exercise };
