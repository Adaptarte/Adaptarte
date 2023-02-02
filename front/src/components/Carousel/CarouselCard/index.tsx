import type { FC } from "react";
import React, { useCallback, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { CheckBox } from "components/CheckBox";
import { colors } from "styles";

import { styles } from "./styles";
import type { ICarouselCardProps } from "./types";

const CarouselCard: FC<ICarouselCardProps> = ({
  complete,
  description,
  image,
  title
}: ICarouselCardProps): JSX.Element => {
  const [check, setCheck] = useState(complete);

  useEffect(() => {
    setCheck(complete);
  }, [title]);

  const style = check
    ? {
        backgroundColor: colors.WHITE,
        color: colors.ORANGE
      }
    : {
        color: colors.WHITE
      };

  const handleSwitch = useCallback((): void => {
    const newValue = !check;
    setCheck(newValue);
  }, [check, setCheck]);

  return (
    <View style={[styles.cardContainer]}>
      <View style={[styles.textContainer]}>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.content]}>{description}</Text>
        <TouchableOpacity
          onPress={handleSwitch}
          style={[styles.checkContainer, style]}
        >
          <Text style={[styles.checkText, style]}>
            {check ? "Completado" : "Por completar"}
          </Text>
          <CheckBox
            active={check}
            isChecked={check}
            onChange={handleSwitch}
            variant={"circle"}
          />
        </TouchableOpacity>
      </View>
      <Image source={image} style={[styles.image]} />
    </View>
  );
};

export { CarouselCard };
