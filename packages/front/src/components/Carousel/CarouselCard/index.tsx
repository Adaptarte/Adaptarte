import React, { useReducer } from "react";
import type { ViewStyle } from "react-native";
import { View } from "react-native";

import { CheckBox } from "components/CheckBox";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { ExerciseRecord } from "views/modals/ExerciseRecord";

import { styles, textVars } from "./styles";
import type { CarouselCardProps } from "./types";
import GestureRecognizer from "react-native-swipe-gestures";

const CarouselCard = ({
  background,
  complete,
  onSave,
  description,
  img,
  title,
  handleNext,
}: CarouselCardProps): JSX.Element => {
  const [isOpen, setIsOpen] = useReducer((val: boolean) => !val, false);

  const containerVarStyle: ViewStyle = {
    backgroundColor: background,
  };

  return (
    <View>
      <View style={[styles.container, containerVarStyle]}>
        <View style={[styles.textContainer]}>
          <Text style={[styles.title]} variant={textVars.title}>
            {title}
          </Text>
          <Text style={styles.details} variant={textVars.content}>
            {description}
          </Text>

          <CheckBox
            checked={complete}
            disabled={complete}
            label={complete ? "Completado" : "Por completar"}
            onChange={setIsOpen}
            variant={{ border: "circle", color: "WHITE" }}
          />
        </View>
        <Img src={img} style={styles.image} />
      </View>
      <ExerciseRecord onSave={onSave} setVisible={setIsOpen} visible={isOpen} />
    </View>
  );
};

export { CarouselCard };
