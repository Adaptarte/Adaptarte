import type { FC } from "react";
import { useCallback } from "react";
import React from "react";
import { Text } from "react-native";

import { imgs } from "assets/imgs";
import { Row } from "components/Grid";
import { Screen } from "components/Screen";
import type { TAppViewProps } from "navigation/App/types";
import { colors } from "styles";

import { AddConsumption } from "./AddConsumption";
import { FoodCard } from "./FoodCard";
import { styles } from "./styles";
import { t } from "./translations";

const Feeding: FC<TAppViewProps<"Feeding">> = ({
  navigation: { navigate }
}: TAppViewProps<"Feeding">): JSX.Element => {
  const handleAddLiquid = useCallback(() => {
    navigate("Consumption", { category: "liquids" });
  }, [navigate]);

  return (
    <Screen style={{ backgroundColor: colors.WHITE }}>
      <Text style={styles.title}>{t().liquids.title}</Text>
      <Text style={styles.description}>{t().liquids.description}</Text>

      <Row columns={3}>
        <FoodCard image={imgs.juice} name={"Jugo"} />
        <FoodCard image={imgs.milk} name={"Leche"} />
        <AddConsumption onPress={handleAddLiquid} />
      </Row>

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
