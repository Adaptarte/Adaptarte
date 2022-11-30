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
  image = exercise,
  style, 
}: ICardProps): JSX.Element => {
  return (
    <View 
      style={[
        styles.container, 
        style,
        { backgroundColor: colors[bgColor] }
      ]}>
      <View style={[styles.checkBox]}>
        <CheckBox />
      </View>
      {image ? (
        <Image source={image} style={[styles.img]} />
      ) : undefined}
      
      <Button color={color} variant={"text"}>
        {children}
      </Button> 
    </View>
  );
};

export { Card };
