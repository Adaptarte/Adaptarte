import type { FC } from "react";
import React from "react";

import { AppNavigation } from "navigation/App";
import { useAuth, UserProvider } from "utils/auth";
import { useDisuseNotifications } from "utils/notifications";
import { setupNotifications } from "utils/notifications/setup";
import { SignIn } from "views/SignIn";
import { Splash } from "views/Splash";

setupNotifications();

const App: FC = (): JSX.Element => {
  useDisuseNotifications();
  const user = useAuth();
  if (user === undefined) {
    return <Splash />;
  }
  if (user === null) {
    return <SignIn />;
  }

  return (
    <UserProvider value={user}>
      <AppNavigation />
    </UserProvider>
  );
};

export { App };
