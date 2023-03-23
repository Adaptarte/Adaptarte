import type { FC } from "react";
import React, { useState } from "react";
import type { ViewStyle } from "react-native";
import { TouchableOpacity, View } from "react-native";

import { Text } from "components/Text";
import { colors } from "styles";

import { CarouselCard } from "./CarouselCard";
import { styles, textVarArrow } from "./styles";
import type { ICarouselProps } from "./types";

const Carousel: FC<ICarouselProps> = ({
  data
}: ICarouselProps): JSX.Element => {
  const [current, setCurrent] = useState<number>(0);

  const style: ViewStyle = {
    opacity: 1
  };

  const styleCardColor: ViewStyle =
    data[current].background !== undefined
      ? {
          backgroundColor: data[current].background
        }
      : {
          backgroundColor: colors.ORANGE_TRANSLUCID
        };

  return (
    <View>
      <View style={[styles.cardContainer, styleCardColor]}>
        <CarouselCard
          complete={data[current].complete}
          description={data[current].description}
          image={data[current].image}
          title={data[current].title}
        />
        <TouchableOpacity
          onPress={(): void => {
            current < data.length - 1 ? setCurrent(current + 1) : setCurrent(0);
          }}
          style={[styles.arrowContainer]}
        >
          <Text variant={textVarArrow}>{">"}</Text>
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
