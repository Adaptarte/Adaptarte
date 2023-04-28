import React from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { CheckBox } from "components/CheckBox";
import { Img } from "components/Img";
import { colors } from "styles";

import { styles } from "./styles";
import type { CardProps } from "./types";

const Card = ({
  bgColor,
  children,
  color,
  img,
  onPress
}: CardProps): JSX.Element => {
  return (
    <View style={[styles.container, { backgroundColor: colors[bgColor] }]}>
      <View style={[styles.checkBox]}>
        <CheckBox />
      </View>
      <Img src={img} style={styles.img} />
      <Button onPress={onPress} variant={{ color, style: "text" }}>
        {children}
      </Button>
    </View>
  );
};

export { Card };
