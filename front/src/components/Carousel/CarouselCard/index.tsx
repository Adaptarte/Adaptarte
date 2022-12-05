import type { FC } from "react";
import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";
import type { ICarouselCardProps } from "./types";

const CarouselCard: FC<ICarouselCardProps> = ({ 
  description,
  image,
  title, 
}: ICarouselCardProps): JSX.Element => {
  return (
    <View style={[styles.cardContainer]}>
      <View style={[styles.textContainer]}>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.content]}>{description}</Text>
      </View>
      <Image source={image} style={[styles.image]}/>
    </View>
  );
};

export { CarouselCard };
