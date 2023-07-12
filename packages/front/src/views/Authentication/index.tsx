import React, { useState } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import {
  signInEmailPassword,
  signUpEmailPassword,
  updateDisplayname
} from "utils/auth";

import { Providers } from "./Providers";
import { btnVars, styles, textVars } from "./styles";

const Authentication = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleSignUpEmailPassword = (): void => {
    if (username !== "" && email !== "" && password !== "") {
      signUpEmailPassword(email, password)
        .then(() => {
          updateDisplayname(username)
            .then(() => {
              console.log("Created account");
            })
            .catch(console.error);
        })
        .catch(console.error);
    } else {
      console.error("Relleno los campos");
    }
  };

  const handleSignInEmailPassword = (): void => {
    if (email !== "" && password !== "") {
      signInEmailPassword(email, password)
        .then(() => {
          console.log("Signed in with email/password");
        })
        .catch((err) => {
          const errMExpected =
            "[auth/user-not-found] There is no user record corresponding to " +
            "this identifier. The user may have been deleted.";
          const errorMessage = err.message;
          if (errorMessage === errMExpected) {
            setIsRegister(true);
          }
          console.error(err);
        });
    } else {
      console.error("Relleno los campos");
    }
  };

  const openSignUp = (): void => {
    setOpenRegister(!openRegister);
    setIsRegister(false);
  };

  return (
    <Screen>
      <Text variant={textVars.appName}>{"Adaptarte"}</Text>
      <View style={styles.header}>
        <Img src={"care"} style={styles.img} />
      </View>
      <Text variant={textVars.signIn}>
        {openRegister ? "Crear cuenta" : "Inicia sesión"}
      </Text>
      {openRegister && (
        <Input label={"Nombre de usuario"} onChange={setUsername} />
      )}
      <Input label={"Correo electrónico"} onChange={setEmail} />
      <Input label={"Contraseña"} onChange={setPassword} secure />
      {isRegister && (
        <Button onPress={openSignUp}>{"¿Quieres crear una cuenta?"}</Button>
      )}
      {openRegister && <Button onPress={openSignUp}>{"Iniciar sesión"}</Button>}
      <Button
        onPress={
          openRegister ? handleSignUpEmailPassword : handleSignInEmailPassword
        }
        style={styles.btn}
        variant={btnVars.signIn}
      >
        {openRegister ? "Crear cuenta" : "Inicia sesión"}
      </Button>
      <View style={styles.hr} />
      <Providers />
    </Screen>
  );
};

export { Authentication };
