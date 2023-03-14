import type { FC } from "react";
import React from "react";
import { Image, View } from "react-native";

import { imgs } from "assets/imgs";
import { Text } from "components/Text";
import { pickDataDose } from "utils/dataDoses";

import { styles, textVars } from "./styles";

const DataDose: FC = (): JSX.Element => {
  const dose = pickDataDose();

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text variant={textVars.tip}>{dose.tip}</Text>
        <Text variant={textVars.details}>{dose.details}</Text>
      </View>
      <Image source={imgs.dataDose} style={styles.img} />
    </View>
  );
};

export { DataDose };
