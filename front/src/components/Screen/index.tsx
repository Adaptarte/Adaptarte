import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

import { styles } from "./styles";
import type { IScreenProps } from "./types";

const Screen = ({ children, style }: IScreenProps): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <ScrollView contentContainerStyle={style}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export { Screen };
