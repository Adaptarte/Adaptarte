import React from "react";

import { Button } from "components/Button";
import { Column } from "components/Grid";
import { Icon } from "components/Icon";
import { colors } from "styles";

import { styles } from "./styles";
import type { AddConsumptionProps } from "./types";

const AddConsumption = ({ onPress }: AddConsumptionProps): JSX.Element => {
  return (
    <Column>
      <Button
        onPress={onPress}
        style={styles.plusButton}
        variant={{ style: "solid" }}
      >
        <Icon color={colors.LIGHT} name={"plus"} size={32} />
      </Button>
    </Column>
  );
};

export { AddConsumption };
