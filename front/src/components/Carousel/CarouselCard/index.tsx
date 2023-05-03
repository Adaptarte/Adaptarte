import React, { useCallback, useEffect, useState } from "react";
import type { ViewStyle } from "react-native";
import { View } from "react-native";

import { CheckBox } from "components/CheckBox";
import { Img } from "components/Img";
import { Text } from "components/Text";

import { styles, textVars } from "./styles";
import type { CarouselCardProps } from "./types";

const CarouselCard = ({
  background,
  complete,
  description,
  img,
  title
}: CarouselCardProps): JSX.Element => {
  const [check, setCheck] = useState(complete);

  useEffect(() => {
    setCheck(complete);
  }, [complete, setCheck]);

  const containerVarStyle: ViewStyle = {
    backgroundColor: background
  };

  const handleSwitch = useCallback((): void => {
    const newValue = !check;
    setCheck(newValue);
  }, [check, setCheck]);

  return (
    <View style={[styles.container, containerVarStyle]}>
      <View style={[styles.textContainer]}>
        <Text style={[styles.title]} variant={textVars.title}>
          {title}
        </Text>
        <Text style={styles.details} variant={textVars.content}>
          {description}
        </Text>
        <CheckBox
          checked={check}
          label={check ? "Completado" : "Por completar"}
          onChange={handleSwitch}
          variant={{ border: "circle", color: "WHITE" }}
        />
      </View>
      <Img src={img} style={styles.image} />
    </View>
  );
};

export { CarouselCard };
