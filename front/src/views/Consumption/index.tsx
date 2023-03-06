import type { FC } from "react";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

import { imgs } from "assets/imgs";
import { Button } from "components/Button";
import { Column, Row } from "components/Grid";
import { Screen } from "components/Screen";
import type { TAppViewProps } from "navigation/App/types";
import { colors } from "styles";
import { food } from "utils/data";

import { styles } from "./styles";
import { t } from "./translations";

const Consumption: FC<TAppViewProps<"Consumption">> = ({
  navigation: { canGoBack, goBack }
}: TAppViewProps<"Consumption">): JSX.Element => {
  return (
    <Screen style={{ backgroundColor: colors.WHITE }}>
      <Text style={styles.title}>{t().title}</Text>
      <Row columns={3}>
        {food.map(
          (el): JSX.Element => (
            <Column key={el.name}>
              <Image source={el.image} style={styles.foodImage} />
              <Text style={styles.foodName}>{el.name}</Text>
              <TouchableOpacity style={styles.foodAddButton}>
                <Image source={imgs.plus} style={styles.foodAddImage} />
              </TouchableOpacity>
            </Column>
          )
        )}
      </Row>
      {canGoBack() ? (
        <Button
          color={"GLAUCOUS"}
          onPress={goBack}
          style={styles.cancelButton}
          variant={"outline"}
        >
          {t().cancel}
        </Button>
      ) : undefined}
    </Screen>
  );
};

export { Consumption };
