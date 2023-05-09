import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Column } from "components/Grid";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { dbDelete, useRealm } from "utils/db/realm";
import type { IFood } from "utils/food/types";

import { styles } from "./styles";

const FoodCard = ({ id, img, name }: Omit<IFood, "type">): JSX.Element => {
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
          <Img src={"close"} style={styles.deleteBtnImg} />
        </TouchableOpacity>
        <Img src={img} style={styles.image} />
        <Text style={styles.name} variant={{ weight: "bold" }}>
          {name}
        </Text>
      </View>
    </Column>
  );
};

export { FoodCard };
