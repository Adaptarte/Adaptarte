import type { FC } from "react";
import React, { Fragment, useEffect, useState } from "react";
import { Text } from "react-native";

import { Row } from "components/Grid";
import { Screen } from "components/Screen";
import type { TAppViewProps } from "navigation/App/types";
import { colors } from "styles";
import type { IConsumption, IFood } from "types/food";
import { foodTypes } from "types/food";
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

  return (
    <Screen style={{ backgroundColor: colors.WHITE }}>
      {foodTypes.map((type) => {
        const tSection = t()[type];

        return (
          <Fragment key={type}>
            <Text style={styles.title}>{tSection.title}</Text>
            <Text style={styles.description}>{tSection.description}</Text>
            <Row columns={3}>
              {consumption?.[type].map((el) => {
                const { id, image, name } = getFoodById(el.food);

                return <FoodCard image={image} key={id} name={name} />;
              })}
              {Array.from(
                Array(getConsumptionExpected(type, consumption?.[type].length))
              ).map((el: number) => {
                const handleAdd = (): void => {
                  navigate("Consumption", { type });
                };

                return (
                  <AddConsumption key={`${type}${el}`} onPress={handleAdd} />
                );
              })}
            </Row>
          </Fragment>
        );
      })}
    </Screen>
  );
};

export { Feeding };
