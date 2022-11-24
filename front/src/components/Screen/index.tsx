
import React from "react";
import { SafeAreaView, StatusBar, } from "react-native";

import { styles } from "./styles";
import type { IScreenProps } from "./types";

const Screen = ({
  children,
  style,
}: IScreenProps): JSX.Element => {
  return (
    <SafeAreaView style={[styles.box, style]}>
      <StatusBar hidden={true} />
      {children}
    </SafeAreaView>
  );
};

export { Screen };
