import React from "react";
import Toast from "react-native-toast-message";

import { AppNavigation } from "navigation/App";
import { useAuth, UserProvider } from "utils/auth";
import { useDisuseNotifications } from "utils/notifications";
import { setupNotifications } from "utils/notifications/setup";
import { toastConfig } from "utils/toast/config";
import { Authentication } from "views/Authentication";
import { Splash } from "views/Splash";

setupNotifications();

const App = (): JSX.Element => {
  useDisuseNotifications();
  const user = useAuth();
  if (user === undefined) {
    return <Splash />;
  }
  if (user === null) {
    return <Authentication />;
  }

  return (
    <UserProvider value={user}>
      <AppNavigation />
      <Toast
        position={"bottom"}
        bottomOffset={20}
        visibilityTime={4000}
        config={toastConfig}
      />
    </UserProvider>
  );
};

export { App };
