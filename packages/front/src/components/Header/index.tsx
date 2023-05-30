import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Img } from "components/Img";
import { Text } from "components/Text";

import { styles, textVarTitle } from "./styles";

const Header = ({
  navigation: { canGoBack, goBack },
  options: { headerStyle, title }
}: NativeStackHeaderProps): JSX.Element => {
  const hasGoBack = canGoBack();
  const hasTitle = title !== undefined;

  return (
    <View style={[(hasGoBack || hasTitle) && styles.container, headerStyle]}>
      {hasGoBack ? (
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Img src={"back"} style={styles.backImage} />
        </TouchableOpacity>
      ) : null}
      {hasTitle ? (
        <Text style={styles.title} variant={textVarTitle}>
          {title}
        </Text>
      ) : null}
    </View>
  );
};

export { Header };
