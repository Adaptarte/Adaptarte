import React from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { CheckBox } from "components/CheckBox";
import { Img } from "components/Img";
import { colors } from "styles";

import { styles } from "./styles";
import type { HabitProps } from "./types";

const Habit = ({
  bgColor,
  children,
  checked,
  color,
  img,
  onPress
}: HabitProps): JSX.Element => {
  return (
    <View style={[styles.container, { backgroundColor: colors[bgColor] }]}>
      <View style={[styles.checkBox]}>
        <CheckBox disabled checked={checked} />
      </View>
      <Img src={img} style={styles.img} />
      <Button onPress={onPress} variant={{ color, style: "text" }}>
        {children}
      </Button>
    </View>
  );
};

export { Habit };
