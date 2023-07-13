import React, { useCallback, useState } from "react";

import { Button } from "components/Button";
import { Input } from "components/Input";
import { Text } from "components/Text";
import { signInEmailPassword } from "utils/auth";

import { styles } from "./styles";
import { t } from "./translations";

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInEmailPassword = useCallback(() => {
    signInEmailPassword(email, password)
      .then(() => {
        console.log("Signed in!");
      })
      .catch(console.error);
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
        disabled={email === "" || password === ""}
        onPress={handleSignInEmailPassword}
        style={styles.btn}
        variant={{ style: "solid" }}
      >
        {t().signIn}
      </Button>
    </>
  );
};

export { SignIn };
