import React, { useCallback, useEffect, useState } from "react";
import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Image, TouchableOpacity, View } from "react-native";

import { imgs } from "assets/imgs";
import { CheckBox } from "components/CheckBox";
import { Tension } from "components/Tension";
import { Text } from "components/Text";
import { colors } from "styles/colors";
import { timeToString } from "utils/time";

import { styles, textVars } from "./styles";
import type { DailyGoalProps } from "./types";

const DailyGoal = ({
  date,
  done,
  title,
  type
}: DailyGoalProps): JSX.Element => {
  const [isTensionOpen, setIsTensionOpen] = useState(false);
  const [timePassed, setTimePassed] = useState(false);
  const [isChecked, setIsChecked] = useState(done);

  const openTension = useCallback(() => {
    setIsTensionOpen(true);
  }, [setIsTensionOpen]);

  useEffect(() => {
    const currentTime = new Date();
    const timer = date.getTime() - currentTime.getTime();

    const action = setTimeout(() => {
      setTimePassed(true);
    }, timer);

    return () => {
      clearTimeout(action);
    };
  }, [date]);

  const containerVarStyle: ViewStyle = {
    borderColor: timePassed && !isChecked ? "red" : colors.TRANSPARENT
  };

  const imgVarStyle: ImageStyle = {
    backgroundColor: isChecked ? colors.BLUE_PURPLE : colors.PURPLE_TRANSLUCID
  };

  const titleVarStyle: TextStyle = {
    textDecorationLine: type === "Record" ? "underline" : "none"
  };

  return (
    <View style={[styles.container, containerVarStyle]}>
      <Image
        source={type === "Record" ? imgs.diseaseRegister : imgs.pills}
        style={[styles.img, imgVarStyle]}
      />
      <TouchableOpacity
        disabled={type !== "Record"}
        onPress={openTension}
        style={styles.content}
      >
        <Text style={titleVarStyle} variant={textVars.title}>
          {title}
        </Text>
        <Text variant={textVars.hour}>{timeToString(date)}</Text>
      </TouchableOpacity>
      <CheckBox
        disabled={type === "Record"}
        isChecked={isChecked}
        onChange={setIsChecked}
      />
      <Tension setVisible={setIsTensionOpen} visible={isTensionOpen} />
    </View>
  );
};

export { DailyGoal };
