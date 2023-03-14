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

  const style: ImageStyle =
    type !== "Record"
      ? {
          marginBottom: "auto",
          marginTop: "auto",
          resizeMode: "contain"
        }
      : { width: 38 };

  const styleTitle: TextStyle = {
    textDecorationLine: type === "Record" ? "underline" : "none"
  };

  const styleBackground: ViewStyle =
    timePassed && !isChecked
      ? {
          borderColor: "red",
          borderStyle: "solid",
          borderWidth: 1
        }
      : {};

  const elipseStyle: ViewStyle = {
    backgroundColor: isChecked ? colors.BLUE_PURPLE : undefined
  };

  const handleSwitch = useCallback((): void => {
    const newValue = !tensionVisible;
    onChange?.(newValue);
    setTensionVisible(newValue);
  }, [setTensionVisible, tensionVisible]);

  return (
    <View style={[styles.background, styleBackground]}>
      <View style={[styles.container]}>
        <View style={[styles.elipse, elipseStyle]}>
          <Image
            source={type === "Record" ? imgs.diseaseRegister : imgs.pills}
            style={[styles.img, style]}
          />
        </View>
      </View>
      <View style={[styles.content]}>
        {type === "Record" ? (
          <TouchableOpacity
            onPress={handleSwitch}
            style={[styles.contentContainer]}
          >
            <Text style={[styleTitle]} variant={textVars.title}>
              {title}
            </Text>
            <Text variant={textVars.hour}>{timeToString(time)}</Text>
          </TouchableOpacity>
        ) : (
          <>
            <Text variant={textVars.title}>{title}</Text>
            <Text variant={textVars.hour}>{timeToString(time)}</Text>
          </>
        )}
      </View>
      <View style={[styles.checkBox]}>
        <CheckBox isChecked={isChecked} onChange={setIsChecked} />
      </View>
      <Tension
        completeRegister={handleRegistryCompleted}
        setVisible={handleSwitch}
        visible={tensionVisible}
      />
    </View>
  );
};

export { DailyGoal };
