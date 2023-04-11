import type { FC } from "react";
import React from "react";

import { AppNavigation } from "navigation/App";
import { useAuth, UserProvider } from "utils/auth";
import { RealmProvider } from "utils/db/realm";
import { SignIn } from "views/SignIn";
import { Splash } from "views/Splash";

const App: FC = (): JSX.Element => {
  const user = useAuth();
  if (user === undefined) {
    return <Splash />;
  }
  if (user === null) {
    return <SignIn />;
  }

  return (
    <UserProvider value={user}>
      <RealmProvider>
        <AppNavigation />
      </RealmProvider>
    </UserProvider>
  );
};

export { App };
