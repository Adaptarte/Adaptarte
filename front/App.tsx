import { NavigationContainer } from "@react-navigation/native";
import type { FC } from "react";
import React from "react";

import { AppNavigation } from "navigation/App";

const App: FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export { App };
