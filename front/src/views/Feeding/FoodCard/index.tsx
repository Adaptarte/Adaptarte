import type { FC } from "react";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { imgs } from "assets/imgs";
import { Column } from "components/Grid";
import { Text } from "components/Text";
import { dbDelete, useRealm } from "utils/db/realm";

import { styles } from "./styles";
import type { IFoodCardProps } from "./types";

const FoodCard: FC<IFoodCardProps> = ({
  id,
  image,
  name
}: IFoodCardProps): JSX.Element => {
  const realm = useRealm();

  const onPressDeleteItem = (): void => {
    realm.write(() => {
      dbDelete(realm, "Consumption", id);
    });
  };

  return (
    <Column>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressDeleteItem} style={styles.deleteBtn}>
          <Image source={imgs.close} style={styles.deleteBtnImg} />
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
