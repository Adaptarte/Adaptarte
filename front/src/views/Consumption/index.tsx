import type { FC } from "react";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

import { imgs } from "assets/imgs";
import { Button } from "components/Button";
import { Column, Row } from "components/Grid";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import type { TAppViewProps } from "navigation/App/types";
import { colors } from "styles";
import { RegisterFoodGA } from "utils/analytics/analytics";
import { dbCreate, useRealm } from "utils/db/realm";
import { getFoodByType } from "utils/food";

import { styles, textVars } from "./styles";
import { t } from "./translations";

const Consumption: FC<TAppViewProps<"Consumption">> = ({
  navigation: { canGoBack, goBack },
  route: { params }
}: TAppViewProps<"Consumption">): JSX.Element => {
  const { type = "liquids" } = params;
  const realm = useRealm();

  return (
    <Screen style={{ backgroundColor: colors.WHITE }}>
      <Text style={styles.title} variant={textVars.title}>
        {t().title}
      </Text>
      <Row columns={3}>
        {getFoodByType(type).map((el): JSX.Element => {
          function addConsumption(): void {
            RegisterFoodGA();
            realm.write(() => {
              dbCreate(realm, "Consumption", {
                date: new Date(),
                food: el.id
              });
            });
            goBack();
          }
          return (
            <Column key={el.name}>
              <Image source={el.image} style={styles.foodImage} />
              <Text style={styles.foodName}>{el.name}</Text>
              <TouchableOpacity
                onPress={addConsumption}
                style={styles.foodAddButton}
              >
                <Image source={imgs.plus} style={styles.foodAddImage} />
              </TouchableOpacity>
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
