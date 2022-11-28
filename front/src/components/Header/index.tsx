import React from "react";
import { Image, Text, View } from "react-native";

import { profile } from "assets/imgs";

import { styles } from "./styles";
import type { IHeaderProps } from "./type";

const Header = ({ name }: IHeaderProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {`¡Bienvenido(a) de nuevo, ${name}!`}
      </Text>
        <Image source={profile} style={[styles.profile]} />
    </View>
  );
};

export { Header };
