import type { FC } from "react";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { Column } from "components/Grid";
import { Text } from "components/Text";

import { styles } from "./styles";
import type { IFoodCardProps } from "./types";
import { imgs } from "assets/imgs";
import { deleteO, useRealm } from "utils/db/realm";

const FoodCard: FC<IFoodCardProps> = ({
  id,
  image,
  name
}: IFoodCardProps): JSX.Element => {
  const realm = useRealm();

  const onPressDeleteItem = (): void => {
    realm.write(() => {
      deleteO(realm, "Consumption", id);
    });
  };

  return (
    <Column>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPressDeleteItem}
          style={styles.closecontainer}
        >
          <Image source={imgs.close} style={styles.backimage} />
        </TouchableOpacity>
        <Image source={image} style={styles.image} />
        <Text style={styles.name} variant={{ weight: "bold" }}>
          {name}
        </Text>
      </View>
    </Column>
  );
};

export { FoodCard };
