import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

import { colors } from "styles";

import { styles } from "./styles";
import type { IScreenProps } from "./types";

const Screen = ({
  bg = "WHITE",
  children,
  style
}: IScreenProps): JSX.Element => {
  const bgColor = colors[bg];

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: bgColor }]}>
      <StatusBar backgroundColor={bgColor} barStyle={"dark-content"} />
      <ScrollView contentContainerStyle={[styles.container, style]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export { Screen };
