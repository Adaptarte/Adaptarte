import React, { useReducer } from "react";
import type { ViewStyle } from "react-native";
import { TouchableOpacity, View } from "react-native";

import { CheckBox } from "components/CheckBox";
import { Exercises } from "components/Exercises";
import { Img } from "components/Img";
import { Text } from "components/Text";

import { styles, textVars } from "./styles";
import type { CarouselCardProps } from "./types";

const CarouselCard = ({
  background,
  complete,
  onSave,
  description,
  img,
  title
}: CarouselCardProps): JSX.Element => {
  const [isOpen, setIsOpen] = useReducer((val: boolean) => !val, false);

  const containerVarStyle: ViewStyle = {
    backgroundColor: background
  };

  return (
    <>
      <View style={[styles.container, containerVarStyle]}>
        <View style={[styles.textContainer]}>
          <Text style={[styles.title]} variant={textVars.title}>
            {title}
          </Text>
          <Text style={styles.details} variant={textVars.content}>
            {description}
          </Text>
          {complete ? (
            <CheckBox
              disabled
              checked={complete}
              label={complete ? "Completado" : "Por completar"}
              variant={{ border: "circle", color: "WHITE" }}
            />
          ) : (
            <TouchableOpacity onPress={setIsOpen}>
              <CheckBox
                disabled
                checked={complete}
                label={complete ? "Completado" : "Por completar"}
                variant={{ border: "circle", color: "WHITE" }}
              />
            </TouchableOpacity>
          )}
        </View>
        <Img src={img} style={styles.image} />
      </View>
      <Exercises onSave={onSave} setVisible={setIsOpen} visible={isOpen} />
    </>
  );
};

export { CarouselCard };
