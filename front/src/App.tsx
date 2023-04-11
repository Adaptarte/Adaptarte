import type { FC } from "react";
import React from "react";

import { AppNavigation } from "navigation/App";
import { RealmProvider } from "utils/db/realm";

const App: FC = (): JSX.Element => {
  return (
    <RealmProvider>
      <AppNavigation />
    </RealmProvider>
  );
};

export { App };
