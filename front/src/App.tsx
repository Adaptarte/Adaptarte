import { NavigationContainer } from "@react-navigation/native";
import type { FC } from "react";
import React from "react";

import { AppNavigation } from "navigation/App";
import { RealmProvider } from "utils/db/realm";

const App: FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RealmProvider>
        <AppNavigation />
      </RealmProvider>
    </NavigationContainer>
  );
};

export { App };
