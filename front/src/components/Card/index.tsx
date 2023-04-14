import type { FC } from "react";
import React from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { CheckBox } from "components/CheckBox";
import { Column } from "components/Grid";
import { Img } from "components/Img";
import { colors } from "styles";

import { styles } from "./styles";
import type { ICardProps } from "./types";

const Card: FC<ICardProps> = ({
  bgColor,
  children,
  color,
  image,
  onPress
}: ICardProps): JSX.Element => {
  return (
    <Column>
      <View style={[styles.container, { backgroundColor: colors[bgColor] }]}>
        <View style={[styles.checkBox]}>
          <CheckBox />
        </View>
        <Img src={image} style={styles.img} />
        <Button onPress={onPress} variant={{ color, style: "text" }}>
          {children}
        </Button>
      </View>
    </Column>
  );
};

export { Card };
