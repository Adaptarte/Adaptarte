import type { FC } from "react";
import React from "react";
import { Image, Text, View } from "react-native";

import { Column } from "components/Grid";

import { styles } from "./styles";
import type { IFoodCardProps } from "./types";

const FoodCard: FC<IFoodCardProps> = ({
  image,
  name
}: IFoodCardProps): JSX.Element => {
  return (
    <Column>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </Column>
  );
};

export { FoodCard };
