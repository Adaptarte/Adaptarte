import type { FC } from "react";
import React from "react";
import { Image, Text, View } from "react-native";

import { imgs } from "assets/imgs";
import { pickDataDose } from "utils/dataDoses";

import { styles } from "./styles";

const DataDose: FC = (): JSX.Element => {
  const dose = pickDataDose();

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{dose.tip}</Text>
        <Text style={styles.hour}>{dose.details}</Text>
      </View>
      <Image source={imgs.dataDose} style={styles.img} />
    </View>
  );
};

export { DataDose };
