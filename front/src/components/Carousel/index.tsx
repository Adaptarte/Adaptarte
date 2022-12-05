import type { FC } from "react";
import React, { useState } from "react";
import type { ViewStyle } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

import { colors } from "styles";

import { CarouselCard } from "./CarouselCard";
import { styles } from "./styles";
import type { ICarouselProps } from "./types";

const Carousel: FC<ICarouselProps> = ({ 
  data,
}: ICarouselProps): JSX.Element => {
  const [current, setCurrent] = useState<number>(0);

  const style: ViewStyle = {
    opacity: 1,
  };

  const styleCardColor: ViewStyle = data[current].background !== undefined ? {
    backgroundColor: data[current].background,
  } : {
    backgroundColor: colors.ORANGE_TRANSLUCID,
  };

  return (
    <View>
      <View style={[styles.cardContainer, styleCardColor]}>
        <TouchableOpacity 
          onPress={(): void => {
            current > 0 ? setCurrent(current - 1) : setCurrent(data.length-1);
          }}
          style={[styles.arrowContainer]}>
          <Text style={[styles.arrow]}>{"<"}</Text>
        </TouchableOpacity>
        <CarouselCard
          description={data[current].description} 
          image={data[current].image} 
          title={data[current].title}
        />
        <TouchableOpacity 
          onPress={(): void => {
            current < data.length - 1 ? setCurrent(current + 1) : setCurrent(0);
          }}
          style={[styles.arrowContainer]}>
          <Text style={[styles.arrow]}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.currentContainer]}>
        <View style={[styles.ball, current === 0 ? style : null]} />
        <View style={[styles.ball, current === 1 ? style : null]} />
        <View style={[styles.ball, current === 2 ? style : null]} />
      </View>
    </View>
  );
};

export { Carousel };
