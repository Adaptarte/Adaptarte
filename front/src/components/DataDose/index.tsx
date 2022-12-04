import type { FC } from "react";
import React from "react";
import { Image, Text, View } from "react-native";

import { dataDose } from "assets/imgs";

import { styles } from "./styles";
import type { IDataDoseProps } from "./types";

const DataDose: FC<IDataDoseProps> = ({
  hour,
  title,
}: IDataDoseProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{hour}</Text>
      </View>
      <Image source={dataDose} style={styles.img} />
    </View>
  );
};

export { DataDose };
