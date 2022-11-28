import type { FC } from "react";
import React from "react";
import {
  Image,
  View,
} from "react-native";

import { exercise } from "assets/imgs";
import { Button } from "components/Button";
import { CheckBox } from "components/CheckBox";
import { colors } from "styles";

import { styles } from "./styles";
import type { ICardProps } from "./types";

const Card: FC<ICardProps> = ({ 
  bgColor, 
  children, 
  color,
  style, 
}: ICardProps): JSX.Element => {

  return (
    <View 
      style={[
        styles.container, 
        style,
        { backgroundColor: colors[bgColor] }
      ]}>
      <View style={[styles.containerImg, style]}>
        <Image source={exercise} style={[styles.img]} />
      </View>
      <View style={[styles.checkbox, style]}>
        <CheckBox />
      </View>
      <Button color={color}>{children}</Button> 
    </View>
  );
};

export { Card };
