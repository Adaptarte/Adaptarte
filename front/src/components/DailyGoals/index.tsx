import type { FC } from "react";
import React, { useCallback, useEffect, useState } from "react";
import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";

import { imgs } from "assets/imgs";
import { CheckBox } from "components/CheckBox";
import { colors } from "styles/colors";
import { Tension } from "views/Tension";

import { styles } from "./styles";
import type { IGoalsProps } from "./types";

const DailyGoals: FC<IGoalsProps> = ({ 
  activeTensionRegister = false,
  hour, 
  img = imgs.diseaseRegister,
  onChange,
  title  
}: IGoalsProps): JSX.Element => {
  const [currentTime] = useState(new Date());
  const [timeAssigned] = useState(new Date());
  const [tensionVisible, setTensionVisible] = useState(false);
  const [timePassed, setTimePassed] = useState(false);
  const [activeCheck, setActiveCheck] = useState(false);

  useEffect(() => {
    updateTimeAssigned();
    updateCurrentTime();

    const timer = timeAssigned.getTime() - currentTime.getTime();

    const action = setTimeout(() => {
      setTimePassed(true);
    }, timer);

    return () => clearTimeout(action);
  }, [currentTime, hour, title]);

  const updateTimeAssigned = (): void => {
    const timeA = hour.split(":").map(a => a.split(" ")).flat();
    if (timeA.length > 3) {
      timeA[6] === "pm" ? 
        timeAssigned.setHours(
          parseInt(timeA[4]) !== 12 ? 
            parseInt(timeA[4]) + 12 : 
            parseInt(timeA[4])
        )
        : timeAssigned.setHours(parseInt(timeA[4])); 
      timeAssigned.setMinutes(parseInt(timeA[5]));
    } else {
      timeA[2] === "pm" ? 
        timeAssigned.setHours(
          parseInt(timeA[0]) !== 12 ? 
            parseInt(timeA[0]) + 12 : 
            parseInt(timeA[0]))
        : timeAssigned.setHours(parseInt(timeA[0]));
      timeAssigned.setMinutes(parseInt(timeA[1]));
    }
  };

  const updateCurrentTime = (): void => {
    const options: Intl.DateTimeFormatOptions = {
      hour12: false,
      timeZone: "America/Bogota",
    };

    const CT = new Date().toLocaleTimeString("en-US", options);
    const timeCT = CT.split(":").map(a => a.split(" ")).flat();
    currentTime.setHours(parseInt(timeCT[0]));
    currentTime.setMinutes(parseInt(timeCT[1]));
  };

  const style: ImageStyle = img != imgs.diseaseRegister ? {
    marginBottom: "auto",
    marginTop: "auto",
    resizeMode: "contain",
  }: { width: 38 };

  const styleTitle: TextStyle = activeTensionRegister ? {
    textDecorationLine: "underline",
  } : {};

  const styleBackground: ViewStyle = timePassed && !activeCheck ? {
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 1,
  } : {};

  const styleElipse: ViewStyle = activeCheck ? {
    backgroundColor: colors.BLUE_PURPLE,
  } : {};

  const styleTextPassed: TextStyle = timePassed && !activeCheck ? {
    color: "red",
  } : {};

  const handleSwitch = useCallback((): void => {
    const newValue = !tensionVisible;
    onChange?.(newValue);
    setTensionVisible(newValue);
  }, [setTensionVisible, tensionVisible]);

  const handleSwitchActiveCheck = useCallback((): void => {
    const newValue = !activeCheck;
    onChange?.(newValue);
    setActiveCheck(newValue);
  }, [setActiveCheck, activeCheck]);

  return (
    <View style={[styles.background, styleBackground]}>
      <View style={[styles.container]}>
        <View style={[styles.elipse, styleElipse]}>
          <Image source={img} style={[styles.img, style]} />
        </View>
      </View>
      <View style={[styles.content]}>
        {
          activeTensionRegister ? 
            <TouchableOpacity 
              onPress={ handleSwitch } 
              style={[styles.contentContainer]}>
              <Text 
                style={[styles.title, styleTitle, styleTextPassed]}
              >
                {title}
              </Text>
              <Text style={[styles.hour, styleTextPassed]}>{hour}</Text>
            </TouchableOpacity> : 
            <>
              <Text style={[styles.title, styleTextPassed]}>{title}</Text>
              <Text style={[styles.hour, styleTextPassed]}>{hour}</Text>
            </>
        }
      </View>
      <View style={[styles.checkBox]}>
        <TouchableOpacity onPress={ handleSwitchActiveCheck }>
          <CheckBox 
            active={activeCheck}
            isInfoRegistered={activeTensionRegister}
            onChange={ handleSwitchActiveCheck } 
          />
        </TouchableOpacity>
      </View>
      <Tension 
        completeRegister={ handleSwitchActiveCheck }
        setVisible={ handleSwitch } 
        visible={tensionVisible} 
      />
    </View>
  );
};

export { DailyGoals };
