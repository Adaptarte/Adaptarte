import type { FC } from "react";
import React from "react";
import { Text } from "react-native";

import { Screen } from "components/Screen";
import type { TAppViewProps } from "navigation/App/types";

import { styles } from "./styles";
import { t } from "./translations";

const Feeding: FC<TAppViewProps<"Feeding">> = (): JSX.Element => {
  return (
    <Screen>
      <Text style={styles.title}>{t().liquids.title}</Text>
      <Text style={styles.description}>{t().liquids.description}</Text>

      <Text style={styles.title}>{t().carbs.title}</Text>
      <Text style={styles.description}>{t().carbs.description}</Text>

      <Text style={styles.title}>{t().fruitsAndVegetables.title}</Text>
      <Text style={styles.description}>
        {t().fruitsAndVegetables.description}
      </Text>

      <Text style={styles.title}>{t().dairy.title}</Text>
      <Text style={styles.description}>{t().dairy.description}</Text>
    </Screen>
  );
};

export { Feeding };
