import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Img } from "components/Img";
import { Text } from "components/Text";

import { styles, textVarTitle } from "./styles";

const Header = ({
  navigation: { canGoBack, goBack },
  options: { headerStyle, headerTitle }
}: NativeStackHeaderProps): JSX.Element | null => {
  const hasGoBack = canGoBack();
  const hasHeader = typeof headerTitle === "string";

  return hasGoBack || hasHeader ? (
    <View style={[styles.container, headerStyle]}>
      {hasGoBack ? (
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Img src={"back"} style={styles.backImage} />
        </TouchableOpacity>
      ) : null}
      {hasHeader ? (
        <Text style={styles.title} variant={textVarTitle}>
          {headerTitle}
        </Text>
      ) : null}
    </View>
  ) : null;
};

export { Header };
