import React, { useCallback, useState } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Text } from "components/Text";
import { arr } from "utils/array";

import { CarouselCard } from "./CarouselCard";
import { styles, textVarNextBtn } from "./styles";
import type { CarouselProps } from "./types";

const Carousel = ({ check, data, onSave }: CarouselProps): JSX.Element => {
  const [selection, setSelection] = useState(0);

  const handleNext = useCallback(() => {
    setSelection((selection + 1) % data.length);
  }, [data.length, selection]);

  return (
    <View>
      <CarouselCard {...data[selection]} complete={check} onSave={onSave} />
      <Button onPress={handleNext} style={[styles.nextBtn]}>
        <Text variant={textVarNextBtn}>{">"}</Text>
      </Button>
      <View style={[styles.paginator]}>
        {arr(data.length).map((el) => (
          <View
            key={el}
            style={[
              styles.pageIndicator,
              el === selection && styles.pageIndicatorSelected,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export { Carousel };
