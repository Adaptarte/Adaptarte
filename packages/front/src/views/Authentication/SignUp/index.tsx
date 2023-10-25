import React, { useState } from "react";
import Toast from "react-native-toast-message";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { Text } from "components/Text";
import { signUpEmailPassword } from "utils/auth";
import { noEmpty } from "utils/form/fields";
import { toastConfig } from "utils/toast/config";
import { toast } from "utils/toast/toast";

import { styles } from "./styles";
import { t } from "./translations";

const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUpEmailPassword = (): void => {
    signUpEmailPassword(email, password, username)
      .then(() => {
        console.log("Created account");
        toast(`Bienvenido ${username}`, "success");
      })
      .catch(() => {
        console.error();
        toast(
          "Se ha presentado un error",
          "error",
          undefined,
          undefined,
          undefined,
          "Inténtelo nuevamente",
        );
      });
  };

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
      <Input
        onChange={setUsername}
        placeholder={t().username}
        value={username}
      />
      <Button
        disabled={noEmpty(email, password, username)}
        onPress={handleSignUpEmailPassword}
        style={styles.btn}
        variant={{ style: "solid" }}
      >
        {t().signUp}
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

export { SignUp };
