import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Text } from "components/Text";
import { registerExercise } from "utils/analytics/analytics";
import { arr } from "utils/array";
import { useUser } from "utils/auth";
import { formatDate } from "utils/date";
import { addUserData, useDbUserData } from "utils/db/firebase";
import type { DBExercise } from "utils/db/types";

import { CarouselCard } from "./CarouselCard";
import { styles, textVarNextBtn } from "./styles";
import type { CarouselProps } from "./types";

const Carousel = ({ data }: CarouselProps): JSX.Element => {
  const user = useUser();

  const [selection, setSelection] = useState(0);
  const [check, setCheck] = useState(false);

  const exercise = useDbUserData(user.uid, "Exercises")[0];

  const exerciseDone = exercise !== undefined;
  const exerciseCheck = exerciseDone ? exercise.data.date : undefined;

  useEffect(() => {
    if (exerciseCheck) {
      if (formatDate(exerciseCheck) === formatDate(new Date())) {
        setCheck(true);
      }
    }
  }, [exerciseCheck, setCheck, check]);

  const handleNext = useCallback(() => {
    setSelection((selection + 1) % data.length);
  }, [data.length, selection]);

  const handleSaveExercise = useCallback((data: DBExercise) => {
    registerExercise().catch(console.error);
    addUserData(user.uid, "Exercises", data).catch(console.error);
    setCheck?.(true);
  }, []);

  return (
    <View>
      <CarouselCard
        {...data[selection]}
        complete={check}
        onSave={handleSaveExercise}
        setComplete={setCheck}
      />
      <Button onPress={handleNext} style={[styles.nextBtn]}>
        <Text variant={textVarNextBtn}>{">"}</Text>
      </Button>
      <View style={[styles.paginator]}>
        {arr(data.length).map((el) => (
          <View
            key={el}
            style={[
              styles.pageIndicator,
              el === selection && styles.pageIndicatorSelected
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export { Carousel };
