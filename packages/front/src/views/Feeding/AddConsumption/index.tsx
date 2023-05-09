import type { FC } from "react";
import React from "react";
import { TouchableOpacity } from "react-native";

import { Column } from "components/Grid";
import { Img } from "components/Img";

import { styles } from "./styles";
import type { IAddConsumptionProps } from "./types";

const AddConsumption: FC<IAddConsumptionProps> = ({
  onPress
}: IAddConsumptionProps): JSX.Element => {
  return (
    <Column>
      <TouchableOpacity onPress={onPress} style={styles.plusButton}>
        <Img src={"plus"} style={styles.plusImage} />
      </TouchableOpacity>
    </Column>
  );
};

export { AddConsumption };
