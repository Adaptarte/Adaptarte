
import React from "react";
import { SafeAreaView, ScrollView, StatusBar, } from "react-native";

import { styles } from "./styles";
import type { IScreenProps } from "./types";

const Screen = ({
  children,
  style,
}: IScreenProps): JSX.Element => {
  return (
    <SafeAreaView style={[styles.box, style]}>
      <StatusBar hidden={true} />
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export { Screen };
