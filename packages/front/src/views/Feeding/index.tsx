import React, { Fragment } from "react";

import { Row } from "components/Grid";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import type { TAppViewProps } from "navigation/App/types";
import { compareDates } from "utils/date";
import { useDbObjs } from "utils/db/realm";
import {
  getConsumptionExpected,
  getFoodById,
  groupConsumptionByFoodType
} from "utils/food";
import { foodTypes } from "utils/food/types";

import { AddConsumption } from "./AddConsumption";
import { FoodCard } from "./FoodCard";
import { styles, textVars } from "./styles";
import { t } from "./translations";

const Feeding = ({
  navigation: { navigate }
}: TAppViewProps<"Feeding">): JSX.Element => {
  const consumption = groupConsumptionByFoodType(
    useDbObjs("Consumption").filter(
      ({ date }) => compareDates(date, new Date(), true) === 0
    )
  );

  return (
    <Screen>
      {foodTypes.map((type) => {
        const tSection = t()[type];

        return (
          <Fragment key={type}>
            <Text style={styles.title} variant={textVars.title}>
              {tSection.title}
            </Text>
            <Text style={styles.description}>{tSection.description}</Text>
            <Row columns={3}>
              {consumption?.[type].map(({ food, id }) => {
                const { img, name } = getFoodById(food);

                return <FoodCard img={img} key={id} name={name} id={id} />;
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
