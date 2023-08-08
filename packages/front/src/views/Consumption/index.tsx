import React from "react";

import { Button } from "components/Button";
import { Column, Row } from "components/Grid";
import { Icon } from "components/Icon";
import { Img } from "components/Img";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import type { TAppViewProps } from "navigation/App/types";
import { colors } from "styles";
import { registerFoodGA } from "utils/analytics/analytics";
import { useDB } from "utils/db";
import { useScore } from "utils/engagement/score";
import { getFoodByType } from "utils/food";

import { styles, textVars } from "./styles";
import { t } from "./translations";

const Consumption = ({
  navigation: { canGoBack, goBack },
  route: { params },
}: TAppViewProps<"Consumption">): JSX.Element => {
  const { type = "liquids" } = params;
  const db = useDB();
  const score = useScore();

  return (
    <Screen>
      <Text style={styles.title} variant={textVars.title}>
        {t().title}
      </Text>
      <Row columns={3}>
        {getFoodByType(type).map((el): JSX.Element => {
          function addConsumption(): void {
            registerFoodGA().catch(console.error);
            const data = {
              date: new Date(),
              food: el.id,
            };
            db.addDoc("FoodIntake", data);
            score.add(1);
            goBack();
          }
          return (
            <Column key={el.name}>
              <Img src={el.img} style={styles.foodImage} />
              <Text style={styles.foodName}>{el.name}</Text>
              <Button
                onPress={addConsumption}
                style={styles.foodAddButton}
                variant={{ style: "solid" }}
              >
                <Icon color={colors.LIGHT} name={"plus"} size={16} />
              </Button>
            </Column>
          );
        })}
      </Row>
      {canGoBack() ? (
        <Button
          onPress={goBack}
          style={styles.cancelButton}
          variant={{ color: "GLAUCOUS", style: "outline" }}
        >
          {t().cancel}
        </Button>
      ) : undefined}
    </Screen>
  );
};

export { Consumption };
