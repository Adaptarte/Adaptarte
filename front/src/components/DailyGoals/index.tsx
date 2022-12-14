import type { FC } from "react";
import React from "react";
import type { ImageStyle } from "react-native";
import { Image, Text, View } from "react-native";

import { imgs } from "assets/imgs";
import { CheckBox } from "components/CheckBox";
import { colors } from "styles";

import { styles } from "./styles";
import type { IGoalsProps } from "./types";

const DailyGoals: FC<IGoalsProps> = ({ 
  hour, 
  img = imgs.diseaseRegister,
  title  
}: IGoalsProps): JSX.Element => {
  const style: ImageStyle = img != imgs.diseaseRegister ? {
    marginBottom: "auto",
    marginTop: "auto",
    resizeMode: "contain",
  }: { width: 38 };
  
  return (
    <View style={[styles.background]}>
      <View style={[styles.container]}>
        <View style={[styles.elipse]}>
          <Image source={img} style={[styles.img, style]} />
        </View>
      </View>
      <View style={[styles.content]}>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.hour]}>{hour}</Text>
      </View>
      <View style={[styles.checkBox]}>
        <CheckBox color={colors.BLACK}/>
      </View>
    </View>
  );
};

export { DailyGoals };
