import React, { useCallback } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Column } from "components/Grid";
import { Icon } from "components/Icon";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { colors } from "styles";
import { getFoodById } from "utils/food";

import { styles } from "./styles";
import type { FoodCardProps } from "./types";

const FoodCard = ({ data, id, onDelete }: FoodCardProps): JSX.Element => {
  const handleDelete = useCallback(() => {
    onDelete?.(id);
  }, [id, onDelete]);

  const { img, name } = getFoodById(data.food);

  return (
    <Column>
      <View style={styles.container}>
        <Button onPress={handleDelete} style={styles.deleteBtn}>
          <Icon color={colors.BLUE_PURPLE} name={"minus-circle"} size={20} />
        </Button>
        <Img src={img} style={styles.image} />
        <Text style={styles.name} variant={{ weight: "bold" }}>
          {name}
        </Text>
      </View>
    </Column>
  );
};

export { FoodCard };
