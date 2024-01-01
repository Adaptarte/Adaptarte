import React, { useCallback } from "react";
import { Platform } from "react-native";
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
            undefined,
            undefined,
            undefined,
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
            undefined,
            undefined,
            undefined,
            "Inténtelo nuevamente",
          );
          return;
        } else if (
          Platform.OS === "android" &&
          error.message.includes("AppleAuth is not supported on the device.")
        ) {
          toast(
            "Error, al autenticarse con AppleID.",
            "error",
            undefined,
            undefined,
            undefined,
            "AppleID no está soportado para estos dispositivos.",
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
        bottomOffset={20}
        config={toastConfig}
        position={"bottom"}
        visibilityTime={4000}
      />
    </>
  );
};

export { Providers };
