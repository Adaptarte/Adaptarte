import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import type { FC } from "react";
import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Img } from "components/Img";
import { Text } from "components/Text";

import { styles, textVarTitle } from "./styles";

const Header: FC<NativeStackHeaderProps> = ({
  navigation: { canGoBack, goBack },
  options: { headerTitle }
}: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      {canGoBack() ? (
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Img src={"back"} style={styles.backImage} />
        </TouchableOpacity>
      ) : undefined}
      {typeof headerTitle === "string" ? (
        <Text style={styles.title} variant={textVarTitle}>
          {headerTitle}
        </Text>
      ) : undefined}
    </View>
  );
};

export { Header };
