import React from "react";
import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { TouchableOpacity, View } from "react-native";

import { CheckBox } from "components/CheckBox";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { colors } from "styles/colors";
import { dateToString } from "utils/date";

import { imgs, styles, textVars } from "./styles";
import type { DailyGoalProps } from "./types";

const DailyGoal = ({
  date,
  done,
  onPress,
  title,
  type,
}: DailyGoalProps): JSX.Element => {
  const overdue = date.getTime() <= Date.now() && !done;
  const disabled = done || onPress === undefined;

  const containerVarStyle: ViewStyle = {
    borderColor: overdue ? "red" : colors.TRANSPARENT,
  };

  const imgVarStyle: ImageStyle = {
    backgroundColor: done ? colors.BLUE_PURPLE : colors.PURPLE_TRANSLUCID,
  };

  const titleVarStyle: TextStyle = {
    textDecorationLine: disabled ? "none" : "underline",
  };

  return (
    <View style={[styles.container, containerVarStyle]}>
      <Img src={imgs[type]} style={[styles.img, imgVarStyle]} />
      <TouchableOpacity
        disabled={done || onPress === undefined}
        onPress={onPress}
        style={styles.content}
      >
        <Text style={titleVarStyle} variant={textVars.title}>
          {title}
        </Text>
        <Text variant={textVars.hour}>{dateToString(date)}</Text>
      </TouchableOpacity>
      <CheckBox checked={done} disabled />
    </View>
  );
};

export { DailyGoal };
