import React, { useCallback } from "react";
import { TouchableOpacity, View } from "react-native";

import { Column } from "components/Grid";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { useUser } from "utils/auth";
import { delUserData } from "utils/db/firebase";
import { getFoodById } from "utils/food";

import { styles } from "./styles";
import type { FoodCardProps } from "./types";

const FoodCard = ({ data, id }: FoodCardProps): JSX.Element => {
  const user = useUser();
  const handleDelete = useCallback((): void => {
    delUserData(user.uid, "FoodIntake", id);
  }, [id, user.uid]);

  const { img, name } = getFoodById(data.food);

  return (
    <Column>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteBtn}>
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
