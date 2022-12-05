import type { FC } from "react";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { CheckBox } from "components/CheckBox";
import { colors } from "styles";

import { styles } from "./styles";
import type { ICarouselCardProps } from "./types";

const CarouselCard: FC<ICarouselCardProps> = ({ 
  description,
  image,
  title, 
}: ICarouselCardProps): JSX.Element => {
  const [check, setCheck] = useState(false);
  const style = check ? {
    backgroundColor: colors.WHITE, color: colors.ORANGE
  } : {
    color: colors.WHITE
  };
  
  return (
    <View style={[styles.cardContainer]}>
      <View style={[styles.textContainer]}>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.content]}>{description}</Text>
        <TouchableOpacity 
          onPress={(): void => setCheck(!check)} 
          style={[styles.checkContainer, style]}>
          <Text 
            style={[styles.checkText, style]}>
            {check? "Completado" : "Por completar"}
          </Text>
          <CheckBox 
            isChecked={check} 
            onChange={(): void => {setCheck(!check);
            }}/>
        </TouchableOpacity>  
      </View>
      <Image source={image} style={[styles.image]}/>
    </View>
  );
};

export { CarouselCard };
