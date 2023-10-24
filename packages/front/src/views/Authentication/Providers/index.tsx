import React, { useCallback } from "react";
import Toast from "react-native-toast-message";

import { Button } from "components/Button";
import { signInApple, signInGoogle } from "utils/auth";
import { toastConfig } from "utils/toast/config";
import { toast } from "utils/toast/toast";

import { btnVars, styles } from "./styles";
import { t } from "./translations";

const Providers = (): JSX.Element => {
  const handleSignInWithGoogle = useCallback(() => {
    signInGoogle()
      .then(() => {
        console.log("Signed in with Google!");
        toast(`Bienvenido de nuevo`, "success");
      })
      .catch((error) => {
        console.error();
        if (error.code === "auth/user-not-found") {
          toast(
            "Usuario y/o contraseña incorrecta",
            "error",
            "Inténtelo nuevamente",
          );
          return;
        }
        toast(
          "Se ha presentado un error",
          "error",
          undefined,
          undefined,
          undefined,
          "Inténtelo nuevamente",
        );
      });
  }, []);

  const handleSignInWithApple = useCallback(() => {
    signInApple()
      .then(() => {
        console.log("Signed in with Apple!");
        toast(`Bienvenido de nuevo`, "success");
      })
      .catch((error) => {
        console.error();
        if (error.code === "auth/user-not-found") {
          toast(
            "Usuario y/o contraseña incorrecta",
            "error",
            "Inténtelo nuevamente",
          );
          return;
        }
        toast("Se ha presentado un error", "error", "Inténtelo nuevamente");
      });
  }, []);

  return (
    <>
      <Button
        onPress={handleSignInWithGoogle}
        style={styles.btn}
        variant={btnVars.thirdParty}
      >
        {t().signInWith.google}
      </Button>
      <Button
        onPress={handleSignInWithApple}
        style={styles.btn}
        variant={btnVars.thirdParty}
      >
        {t().signInWith.apple}
      </Button>
      <Toast
        position={"bottom"}
        bottomOffset={20}
        visibilityTime={4000}
        config={toastConfig}
      />
    </>
  );
};

export { Providers };
