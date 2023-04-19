import React, { useEffect, useState } from "react";
import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { TouchableOpacity, View } from "react-native";

import { CheckBox } from "components/CheckBox";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { colors } from "styles/colors";
import { dateToString } from "utils/date";

import { styles, textVars } from "./styles";
import type { DailyGoalProps } from "./types";

const DailyGoal = ({
  date,
  done,
  onPress,
  title,
  type
}: DailyGoalProps): JSX.Element => {
  const [timePassed, setTimePassed] = useState(false);

  useEffect(() => {
    const action = setTimeout(() => {
      setTimePassed(true);
    }, date.getTime() - Date.now());

    return () => {
      clearTimeout(action);
    };
  }, [date, setTimePassed]);

  const containerVarStyle: ViewStyle = {
    borderColor: timePassed && !done ? "red" : colors.TRANSPARENT
  };

  const imgVarStyle: ImageStyle = {
    backgroundColor: done ? colors.BLUE_PURPLE : colors.PURPLE_TRANSLUCID
  };

  const titleVarStyle: TextStyle = {
    textDecorationLine: type === "Record" ? "underline" : "none"
  };

  return (
    <View style={[styles.container, containerVarStyle]}>
      <Img
        src={type === "Record" ? "diseaseRegister" : "pills"}
        style={[styles.img, imgVarStyle]}
      />
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
      <CheckBox disabled isChecked={done} />
    </View>
  );
};

export { DailyGoal };
