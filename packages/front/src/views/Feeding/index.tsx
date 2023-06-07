import React, { Fragment } from "react";

import { Row } from "components/Grid";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import type { TAppViewProps } from "navigation/App/types";
import { useUser } from "utils/auth";
import { setDayTime } from "utils/date";
import { useDbUserData } from "utils/db/firebase";
import { getConsumptionExpected, groupConsumptionByFoodType } from "utils/food";
import { foodTypes } from "utils/food/types";

import { AddConsumption } from "./AddConsumption";
import { FoodCard } from "./FoodCard";
import { styles, textVars } from "./styles";
import { t } from "./translations";

const Feeding = ({
  navigation: { navigate }
}: TAppViewProps<"Feeding">): JSX.Element => {
  const user = useUser();
  const foodIntakes = useDbUserData(user.uid, "FoodIntake", [
    ["date", ">=", setDayTime(new Date(), 0)]
  ]);
  const intakes = groupConsumptionByFoodType(foodIntakes);

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
              {intakes?.[type].map(({ data, id }) => {
                return <FoodCard data={data} key={id} id={id} />;
              })}
              {getConsumptionExpected(type, intakes?.[type].length).map(
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
