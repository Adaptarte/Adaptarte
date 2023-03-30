import type { FC } from "react";
import React, { useCallback, useState } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Text } from "components/Text";
import { arr } from "utils/array";

import { CarouselCard } from "./CarouselCard";
import { styles, textVarNextBtn } from "./styles";
import type { ICarouselProps } from "./types";

const Carousel: FC<ICarouselProps> = ({
  data
}: ICarouselProps): JSX.Element => {
  const [selection, setSelection] = useState(0);

  const handleNext = useCallback(() => {
    setSelection((selection + 1) % data.length);
  }, [data.length, selection]);

  return (
    <View>
      <CarouselCard {...data[selection]} />
      <Button onPress={handleNext} style={[styles.nextBtn]}>
        <Text variant={textVarNextBtn}>{">"}</Text>
      </Button>
      <View style={[styles.paginator]}>
        {arr(data.length).map((el) => (
          <View
            key={el}
            style={[
              styles.pageIndicator,
              el === selection && styles.pageIndicatorSelected
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export { Carousel };
