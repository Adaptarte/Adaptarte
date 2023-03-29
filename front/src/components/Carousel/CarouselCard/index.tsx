import type { FC } from "react";
import React, { useCallback, useEffect, useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";

import { CheckBox } from "components/CheckBox";
import { Text } from "components/Text";
import type { TextVariant } from "components/Text/types";
import { colors } from "styles";
import type { Style } from "utils/types";

import { styles, textVars } from "./styles";
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

  const checkTextStyle: Style = {
    backgroundColor: check ? colors.WHITE : undefined
  };

  const textVarcheck: TextVariant = {
    color: check ? "ORANGE" : "WHITE",
    size: 1,
    weight: "bold"
  };

  const handleSwitch = useCallback((): void => {
    const newValue = !check;
    setCheck(newValue);
  }, [check, setCheck]);

  return (
    <View style={[styles.cardContainer]}>
      <View style={[styles.textContainer]}>
        <Text style={[styles.title]} variant={textVars.title}>
          {title}
        </Text>
        <ScrollView style={[styles.contentContainer]}>
          <Text style={[styles.content]} variant={textVars.content}>
            {description}
          </Text>
        </ScrollView>
        <TouchableOpacity
          onPress={handleSwitch}
          style={[styles.checkContainer, checkTextStyle]}
        >
          <Text style={[styles.checkText]} variant={textVarcheck}>
            {check ? "Completado" : "Por completar"}
          </Text>
          <CheckBox
            isChecked={check}
            onChange={handleSwitch}
            variant={{ border: "circle" }}
          />
        </TouchableOpacity>
      </View>
      <Image source={image} style={[styles.image]} />
    </View>
  );
};

export { CarouselCard };
