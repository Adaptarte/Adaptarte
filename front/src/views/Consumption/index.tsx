import type { FC } from "react";
import React from "react";
import { TouchableOpacity } from "react-native";

import { Button } from "components/Button";
import { Column, Row } from "components/Grid";
import { Img } from "components/Img";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import type { TAppViewProps } from "navigation/App/types";
import { colors } from "styles";
import { RegisterFoodGA } from "utils/analytics/analytics";
import { useUser } from "utils/auth";
import { addUserData } from "utils/db/firebase";
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
  const user = useUser();

  return (
    <Screen style={{ backgroundColor: colors.WHITE }}>
      <Text style={styles.title} variant={textVars.title}>
        {t().title}
      </Text>
      <Row columns={3}>
        {getFoodByType(type).map((el): JSX.Element => {
          function addConsumption(): void {
            RegisterFoodGA();
            const data = {
              date: new Date(),
              food: el.id
            };
            realm.write(() => {
              dbCreate(realm, "Consumption", data);
            });
            addUserData(user.uid, "FoodIntake", data).catch(console.error);
            goBack();
          }
          return (
            <Column key={el.name}>
              <Img src={el.image} style={styles.foodImage} />
              <Text style={styles.foodName}>{el.name}</Text>
              <TouchableOpacity
                onPress={addConsumption}
                style={styles.foodAddButton}
              >
                <Img src={"plus"} style={styles.foodAddImage} />
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
