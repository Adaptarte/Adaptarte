import type { FC } from "react";
import React, { Fragment, useEffect, useState } from "react";

import { Row } from "components/Grid";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import type { TAppViewProps } from "navigation/App/types";
import { colors } from "styles";
import { compareDates } from "utils/date";
import { dbObjects, useRealm } from "utils/db/realm";
import {
  getConsumptionExpected,
  getFoodById,
  groupConsumptionByFoodType
} from "utils/food";
import type { IConsumption, IFood } from "utils/food/types";
import { foodTypes } from "utils/food/types";

import { AddConsumption } from "./AddConsumption";
import { FoodCard } from "./FoodCard";
import { styles, textVars } from "./styles";
import { t } from "./translations";

const Feeding: FC<TAppViewProps<"Feeding">> = ({
  navigation: { navigate }
}: TAppViewProps<"Feeding">): JSX.Element => {
  const realm = useRealm();
  const [consumption, setConsumption] =
    useState<Record<IFood["type"], IConsumption[]>>();

  useEffect(() => {
    const today = new Date();
    const resToday = dbObjects(realm, "Consumption").filter(
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
            <Text style={styles.title} variant={textVars.title}>
              {tSection.title}
            </Text>
            <Text style={styles.description}>{tSection.description}</Text>
            <Row columns={3}>
              {consumption?.[type].map((el) => {
                const { id, img, name } = getFoodById(el.food);

                return <FoodCard img={img} key={id} name={name} id={el.id} />;
              })}
              {getConsumptionExpected(type, consumption?.[type].length).map(
                (el: number) => {
                  const handleAdd = (): void => {
                    navigate("Consumption", { type });
                  };

                  return (
                    <AddConsumption key={`${type}${el}`} onPress={handleAdd} />
                  );
                }
              )}
            </Row>
          </Fragment>
        );
      })}
    </Screen>
  );
};

export { Feeding };
