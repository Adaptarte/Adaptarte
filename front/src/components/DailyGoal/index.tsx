import type { FC } from "react";
import React, { useCallback, useEffect, useState } from "react";
import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Image, TouchableOpacity, View } from "react-native";

import { imgs } from "assets/imgs";
import { CheckBox } from "components/CheckBox";
import { Text } from "components/Text";
import { colors } from "styles/colors";
import { hourToTime, timeToString } from "utils/time";
import { Tension } from "views/Tension";

import { styles, textVars } from "./styles";
import type { IGoalProps } from "./types";

const DailyGoal: FC<IGoalProps> = ({
  type,
  done,
  hour,
  onChange,
  title
}: IGoalProps): JSX.Element => {
  const [tensionVisible, setTensionVisible] = useState(false);
  const [timePassed, setTimePassed] = useState(false);
  const [isChecked, setIsChecked] = useState(done);

  const handleRegistryCompleted = useCallback(() => {
    setIsChecked(true);
  }, [setIsChecked]);

  const time = hourToTime(hour);

  useEffect(() => {
    const currentTime = new Date();
    const timer = time.getTime() - currentTime.getTime();

    const action = setTimeout(() => {
      setTimePassed(true);
    }, timer);

    return () => {
      clearTimeout(action);
    };
  }, [time]);

  const containerVarStyle: ViewStyle = {
    borderColor: timePassed && !isChecked ? "red" : colors.TRANSPARENT
  };

  const imgVarStyle: ImageStyle = {
    backgroundColor: isChecked ? colors.BLUE_PURPLE : colors.PURPLE_TRANSLUCID
  };

  const titleVarStyle: TextStyle = {
    textDecorationLine: type === "Record" ? "underline" : "none"
  };

  const handleSwitch = useCallback((): void => {
    const newValue = !tensionVisible;
    onChange?.(newValue);
    setTensionVisible(newValue);
  }, [setTensionVisible, tensionVisible]);

  return (
    <View style={[styles.container, containerVarStyle]}>
      <Image
        source={type === "Record" ? imgs.diseaseRegister : imgs.pills}
        style={[styles.img, imgVarStyle]}
      />
      <TouchableOpacity
        disabled={type !== "Record"}
        onPress={handleSwitch}
        style={styles.content}
      >
        <Text style={titleVarStyle} variant={textVars.title}>
          {title}
        </Text>
        <Text variant={textVars.hour}>{timeToString(time)}</Text>
      </TouchableOpacity>
      <CheckBox
        disabled={type === "Record"}
        isChecked={isChecked}
        onChange={setIsChecked}
      />
      <Tension
        completeRegister={handleRegistryCompleted}
        setVisible={handleSwitch}
        visible={tensionVisible}
      />
    </View>
  );
};

export { DailyGoal };
