import type { FC } from "react";
import React from "react";
import { Text } from "react-native";

import { Screen } from "components/Screen";
import type { TAppViewProps } from "navigation/App/types";

const Landing: FC<TAppViewProps<"Landing">> = (): JSX.Element => {
  return (
    <Screen>
      <Text>{"Landing"}</Text>
    </Screen>
  );
};

export { Landing };
