import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import type { FC } from "react";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { imgs } from "assets/imgs";

import { styles } from "./styles";

const Header: FC<NativeStackHeaderProps> = ({
  navigation: { canGoBack, goBack },
  options: { headerTitle },
}: NativeStackHeaderProps) => {

  return (
    <View style={styles.container}>
      {canGoBack() ? (
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Image source={imgs.back} style={styles.backImage} />
        </TouchableOpacity>
      ) : undefined}
      {typeof(headerTitle) === "string" ? (
        <Text style={styles.title}>{headerTitle}</Text>
      ) : undefined}
    </View>
  );
};

export { Header };
