import type { FC } from "react";
import React, { useState } from "react";
import { Button, View } from "react-native";

import { CarouselCard } from "./CarouselCard";
import type { ICarouselProps } from "./types";

const Carousel: FC<ICarouselProps> = ({ 
  data,
  onPress,
}: ICarouselProps): JSX.Element => {
  const [current] = useState(0);

  return (
    <View>
      <CarouselCard
        description={data[current].description} 
        image={data[current].image} 
        title={data[current].title}
      />
      <Button onPress={onPress} title={"=>"} />
      <Button onPress={onPress} title={"<="} />
    </View>
  );
};

export { Carousel };
