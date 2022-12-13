import type { FC } from "react";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

import { imgs } from "assets/imgs";
import { Column } from "components/Grid";

import { styles } from "./styles";
import type { IAddConsumptionProps } from "./types";

const AddConsumption: FC<IAddConsumptionProps> = ({
  onPress,
}: IAddConsumptionProps): JSX.Element => {
  return (
    <Column>
      <TouchableOpacity onPress={onPress} style={styles.plusButton}>
        <Image source={imgs.plus} style={styles.plusImage} />
      </TouchableOpacity>
    </Column>
  );
};

export { AddConsumption };
