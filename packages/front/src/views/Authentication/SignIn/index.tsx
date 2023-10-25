import React, { useCallback, useState } from "react";
import Toast from "react-native-toast-message";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { Text } from "components/Text";
import { signInEmailPassword } from "utils/auth";
import { noEmpty } from "utils/form/fields";
import { toastConfig } from "utils/toast/config";
import { toast } from "utils/toast/toast";

import { styles } from "./styles";
import { t } from "./translations";

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInEmailPassword = useCallback(() => {
    signInEmailPassword(email, password)
      .then(() => {
        console.log("Signed in!");
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
        toast("Se ha presentado un error", "error", "Inténtelo nuevamente");
      });
  }, [email, password]);

  return (
    <>
      <Text variant={{ color: "GLAUCOUS", size: 4, weight: "bold" }}>
        {t().title}
      </Text>
      <Input onChange={setEmail} placeholder={t().email} value={email} />
      <Input
        onChange={setPassword}
        placeholder={t().password}
        secure
        value={password}
      />
      <Button
        disabled={noEmpty(email, password)}
        onPress={handleSignInEmailPassword}
        style={styles.btn}
        variant={{ style: "solid" }}
      >
        {t().signIn}
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

export { SignIn };
