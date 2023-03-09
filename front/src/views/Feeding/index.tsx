import type { FC } from "react";
import React, { useCallback, useEffect, useState } from "react";
import { Text } from "react-native";

import { Row } from "components/Grid";
import { Screen } from "components/Screen";
import type { TAppViewProps } from "navigation/App/types";
import { colors } from "styles";
import type { IConsumption, IFood } from "types/food";
import { compareDates } from "utils/date";
import { objects, useRealm } from "utils/db/realm";
import {
  getConsumptionExpected,
  getFoodById,
  groupConsumptionByFoodType
} from "utils/food";

import { AddConsumption } from "./AddConsumption";
import { FoodCard } from "./FoodCard";
import { styles } from "./styles";
import { t } from "./translations";

const Feeding: FC<TAppViewProps<"Feeding">> = ({
  navigation: { navigate }
}: TAppViewProps<"Feeding">): JSX.Element => {
  const realm = useRealm();
  const [consumption, setConsumption] =
    useState<Record<IFood["type"], IConsumption[]>>();

  useEffect(() => {
    const today = new Date();
    const resToday = objects(realm, "Consumption").filter(
      ({ date }) => compareDates(date, today) === 0
    );
    setConsumption(groupConsumptionByFoodType(resToday));
  }, [setConsumption, realm]);

  const getAddConsumption = useCallback(
    (type: IFood["type"]): JSX.Element[] => {
      const handleAdd = (): void => {
        navigate("Consumption", { type });
      };
      const n = getConsumptionExpected(type, consumption?.[type].length);

      return Array.from(Array(n)).map((el) => (
        <AddConsumption key={el} onPress={handleAdd} />
      ));
    },
    [consumption, navigate]
  );

  return (
    <Screen style={{ backgroundColor: colors.WHITE }}>
      <Text style={styles.title}>{t().liquids.title}</Text>
      <Text style={styles.description}>{t().liquids.description}</Text>

      <Row columns={3}>
        {consumption?.liquids.map((el) => {
          const food = getFoodById(el.food);

          return <FoodCard image={food.image} key={food.id} name={food.name} />;
        })}
        {getAddConsumption("liquids")}
      </Row>

      <Text style={styles.title}>{t().carbs.title}</Text>
      <Text style={styles.description}>{t().carbs.description}</Text>

      <Row columns={3}>
        {consumption?.carbs.map((el) => {
          const food = getFoodById(el.food);
          console.log(el);

          return <FoodCard image={food.image} key={food.id} name={food.name} />;
        })}
        {getAddConsumption("carbs")}
      </Row>

      <Text style={styles.title}>{t().fruitsAndVegetables.title}</Text>
      <Text style={styles.description}>
        {t().fruitsAndVegetables.description}
      </Text>

      <Row columns={3}>
        {consumption?.fruitsAndVegetables.map((el) => {
          const food = getFoodById(el.food);

          return <FoodCard image={food.image} key={food.id} name={food.name} />;
        })}
        {getAddConsumption("fruitsAndVegetables")}
      </Row>

      <Text style={styles.title}>{t().dairy.title}</Text>
      <Text style={styles.description}>{t().dairy.description}</Text>

      <Row columns={3}>
        {consumption?.dairy.map((el) => {
          const food = getFoodById(el.food);

          return <FoodCard image={food.image} key={food.id} name={food.name} />;
        })}
        {getAddConsumption("dairy")}
      </Row>
    </Screen>
  );
};

export { Feeding };
