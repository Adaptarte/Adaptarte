import React, { useCallback, useState } from "react";
import { View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

import { Button } from "components/Button";
import { textVarNextBtn } from "components/Carousel/styles";
import { Text } from "components/Text";
import { pickDataDose } from "utils/datadose";

import { DataDoseCard } from "./DataDoseCard";
import { styles } from "./styles";
import type { DataDoseProps } from "./types";

// Amount of datadose for session
const maxDatadose = 10;

const DataDose = ({ diseases }: DataDoseProps): JSX.Element => {
  const dose1 = pickDataDose(diseases);
  const dose2 = pickDataDose(diseases);

  const [selection, setSelection] = useState(0);
  const [data, setData] = useState([dose1, dose2]);

  const handleNext = useCallback(() => {
    setSelection((selection + 1) % data.length);
  }, [data.length, selection]);

  const handleAddDose = useCallback(() => {
    if (data.length < maxDatadose) {
      const d = pickDataDose(diseases);
      const result = data.find((element) => element.details === d.details);

      if (!result) {
        setData([...data, d]);
        handleNext();
      } else {
        handleAddDose();
      }
    } else {
      handleNext();
    }
  }, [data, selection]);

  return (
    <GestureRecognizer onSwipeLeft={handleAddDose}>
      <View style={styles.container}>
        <DataDoseCard {...data[selection]} />
        <Button onPress={handleAddDose} style={[styles.nextBtn]}>
          <Text variant={textVarNextBtn}>{">"}</Text>
        </Button>
      </View>
    </GestureRecognizer>
  );
};

export { DataDose };
