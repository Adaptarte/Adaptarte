import type { FC } from "react";
import React from "react";
import { Image, Text, View } from "react-native";

import type { ICarouselCardProps } from "./types";

const CarouselCard: FC<ICarouselCardProps> = ({ 
  description,
  image,
  title, 
}: ICarouselCardProps): JSX.Element => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Image source={image} />
    </View>
  );
};

export { CarouselCard };
