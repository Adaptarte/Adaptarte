import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

import { colors } from "styles";

import { styles } from "./styles";
import type { IScreenProps } from "./types";

const Screen = ({ children, style }: IScreenProps): JSX.Element => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar backgroundColor={colors.LIGHT} barStyle={"dark-content"} />
      <ScrollView contentContainerStyle={[styles.container, style]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export { Screen };
