import type { FC } from "react";
import React from "react";
import { Text } from "react-native";

import { Screen } from "components/Screen";
import type { TAppViewProps } from "navigation/App/types";

const Feeding: FC<TAppViewProps<"Feeding">> = (): JSX.Element => {
  return (
    <Screen>
      <Text>{"Feeding content"}</Text>
    </Screen>
  );
};

export { Feeding };
