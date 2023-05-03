import React, { useCallback, useState } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { ComingSoon } from "components/ComingSoon";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import {
  signInEmailPassword,
  signInGoogle,
  signUpEmailPassword,
  updateDisplayname
} from "utils/auth";

import { btnVars, styles, textVars } from "./styles";

const SignIn = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInEmailPassword = (): void => {
    if (email !== "" || password !== "") {
      signInEmailPassword(email, password)
        .then(() => {
          console.log("Signed in with email/password");
        })
        .catch(console.error);
    }
  };

  const handleSignInGoogle = useCallback(() => {
    signInGoogle()
      .then(() => {
        console.log("Signed in with Google!");
      })
      .catch(console.error);
  }, []);

  const changeUsername = (value: React.SetStateAction<string>): void => {
    setUsername(value);
  };

  const changeEmail = (value: React.SetStateAction<string>): void => {
    setEmail(value);
  };

  const changePassword = (value: React.SetStateAction<string>): void => {
    setPassword(value);
  };

  const openSignUp = (): void => {
    setOpenRegister(!openRegister);
    setIsRegister(false);
  };

  return (
    <Screen>
      <Text variant={textVars.appName}>{"Adaptarte"}</Text>
      <View style={styles.header}>
        <Img src={"helloCuidador"} style={styles.img} />
      </View>
      <Text variant={textVars.signIn}>
        {openRegister ? "Crear cuenta" : "Inicia sesión"}
      </Text>
      {openRegister && (
        <Input onChange={changeUsername} label={"Nombre de usuario"} />
      )}
      <Input onChange={changeEmail} label={"Correo electrónico"} />
      <Input onChange={changePassword} label={"Contraseña"} secure />
      {isRegister && (
        <Button onPress={openSignUp}>{"¿Quieres crear una cuenta?"}</Button>
      )}
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
      <Button
        onPress={handleSignInGoogle}
        style={styles.btn}
        variant={btnVars.thirdParty}
      >
        {"Ingresar con Google"}
      </Button>
      <ComingSoon>
        <Button style={styles.btn} variant={btnVars.thirdParty}>
          {"Ingresar con Apple"}
        </Button>
      </ComingSoon>
    </Screen>
  );
};

export { SignIn };
