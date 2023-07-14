import React, { useCallback, useEffect, useState } from "react";
import { Modal, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

import { Button } from "components/Button";
import { Carousel } from "components/Carousel";
import { Icon } from "components/Icon";
import { Text } from "components/Text";
import type { TAppViewProps } from "navigation/App/types";
import { colors } from "styles";
import { registerExercise } from "utils/analytics/analytics";
import { formatDate } from "utils/date";
import { useDB } from "utils/db";
import type { DBExercise } from "utils/db/types";
import { data } from "views/Exercise/data";

import { styles, textVars } from "./styles";
import { t } from "./translations";

const Exercise = ({
  navigation: { canGoBack, goBack }
}: TAppViewProps<"Exercise">): JSX.Element => {
  const db = useDB();

  const [check, setCheck] = useState(false);

  const exercise = db.getDocs("Exercises")[0];

  const exerciseDone = exercise !== undefined;
  const exerciseCheck = exerciseDone ? exercise.data.date : undefined;

  useEffect(() => {
    if (exerciseCheck) {
      if (formatDate(exerciseCheck) === formatDate(new Date())) {
        setCheck(true);
      }
    }
  }, [exerciseCheck, setCheck, check]);

  const handleSaveExercise = useCallback((data: DBExercise) => {
    registerExercise().catch(console.error);
    db.addDoc("Exercises", data);
    setCheck?.(true);
  }, []);

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
              check={check}
              data={data}
              onSave={handleSaveExercise}
              setComplete={setCheck}
            />
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

export { Exercise };
