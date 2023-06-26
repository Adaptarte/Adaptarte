import React from "react";
import { View } from "react-native";

import { Img } from "components/Img";
import { Text } from "components/Text";

import { pickDataDose } from "./data";
import { styles, textVars } from "./styles";
import type { DataDoseProps } from "./types";

const DataDose = ({ diseases }: DataDoseProps): JSX.Element => {
  const dose = pickDataDose(diseases);

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text variant={textVars.tip}>{dose.tip}</Text>
        <Text variant={textVars.details}>{dose.details}</Text>
      </View>
      <Img src={"dataDose"} style={styles.img} />
    </View>
  );
};

export { DataDose };
