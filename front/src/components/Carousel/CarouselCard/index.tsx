import type { FC } from "react";
import React, { useCallback, useEffect, useState } from "react";
import type { ViewStyle } from "react-native";
import { Image, View } from "react-native";

import { CheckBox } from "components/CheckBox";
import { Text } from "components/Text";

import { styles, textVars } from "./styles";
import type { ICarouselCardProps } from "./types";

const CarouselCard: FC<ICarouselCardProps> = ({
  background,
  complete,
  description,
  image,
  title
}: ICarouselCardProps): JSX.Element => {
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
          isChecked={check}
          label={check ? "Completado" : "Por completar"}
          onChange={handleSwitch}
          variant={{ border: "circle", color: "WHITE" }}
        />
      </View>
      <Image source={image} style={[styles.image]} />
    </View>
  );
};

export { CarouselCard };
