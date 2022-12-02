import type { FC } from "react";
import React from "react";
import { Image, View } from "react-native";

import { dataDose } from "assets/imgs";
import { Text } from "components/Text";

import { styles } from "./styles";
import type { IDataProps } from "./types";

const DataDose: FC<IDataProps> = ({
  hour,
  title,
}: IDataProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text color={"WHITE"} size={2} weight={"bold"}>
          {title}
        </Text>
        <Text color={"WHITE"} size={1}>
          {hour}
        </Text>
      </View>
      <Image source={dataDose} style={styles.img} />
    </View>
  );
};

export { DataDose };
