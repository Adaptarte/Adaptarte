import type { FC } from "react";
import React from "react";
import { Image, Text, View } from "react-native";

import { exercise } from "assets/imgs";
import { CheckBox } from "components/CheckBox";

import { styles } from "./styles";
import type { IGoalsProps } from "./types";

const DailyGoals: FC<IGoalsProps> = ({ 
  hour, 
  title  
}: IGoalsProps): JSX.Element => {
  return (
    <View style={[styles.background]}>
      <View style={[styles.container]}>
        <View style={[styles.elipse]}>
          <Image source={exercise} style={[styles.img]} />
        </View>
      </View>
      <View style={[styles.content]}>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.hour]}>{hour}</Text>
      </View>
      <View style={[styles.checkBox]}>
        <CheckBox />
      </View>
    </View>
  );
};

export { DailyGoals };
