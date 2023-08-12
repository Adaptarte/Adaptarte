import React, { useEffect, useState } from "react";
import { Animated, View } from "react-native";

import { styles } from "./styles";
import type { ProgressBarProps } from "./types";

const ProgressBar = ({ value, total }: ProgressBarProps): JSX.Element => {
  const [viewWidth, setViewWidth] = useState(0);
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    const width = (value * viewWidth) / total;
    Animated.timing(progress, {
      duration: 500,
      toValue: width <= viewWidth ? width : viewWidth,
      useNativeDriver: false,
    }).start();
    setProgress;
  });

  const handleLayout = (event: {
    nativeEvent: { layout: { width: number } };
  }): void => {
    const { width } = event.nativeEvent.layout;
    setViewWidth(width);
  };

  return (
    <View
      onLayout={handleLayout}
      style={styles.container}
      testID={"progress_container"}
    >
      <Animated.View
        style={[styles.bar, { width: progress }]}
        testID={"progress_bar"}
      />
    </View>
  );
};

export { ProgressBar };
