import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Text } from "components/Text";

import { styles } from "./styles";
import type { ComingSoonProps } from "./type";

const ComingSoon = ({ children }: ComingSoonProps): JSX.Element => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0} style={styles.touchable}>
        <Text
          style={styles.text}
          variant={{ color: "WHITE", size: 3, weight: "bold" }}
        >
          {"Próximamente"}
        </Text>
      </TouchableOpacity>
      {children}
    </View>
  );
};

export { ComingSoon };
