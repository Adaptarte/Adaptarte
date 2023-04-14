import React, { useCallback } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Img } from "components/Img";
import { Input } from "components/Input";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import { signInGoogle } from "utils/auth";

import { btnVars, styles, textVars } from "./styles";

const SignIn = (): JSX.Element => {
  const handleSignInGoogle = useCallback(() => {
    signInGoogle()
      .then(() => {
        console.log("Signed in with Google!");
      })
      .catch(console.error);
  }, []);

  return (
    <Screen>
      <Text variant={textVars.appName}>{"Adaptarte"}</Text>
      <View style={styles.header}>
        <Img src={"helloCuidador"} style={styles.img} />
      </View>
      <Text variant={textVars.signIn}>{"Inicia sesión"}</Text>
      <Input label={"Correo electrónico"} />
      <Input label={"Contraseña"} />
      <Button style={styles.btn} variant={btnVars.signIn}>
        {"Iniciar sesión"}
      </Button>
      <View style={styles.hr} />
      <Button
        onPress={handleSignInGoogle}
        style={styles.btn}
        variant={btnVars.thirdParty}
      >
        {"Ingresar con Google"}
      </Button>
      <Button style={styles.btn} variant={btnVars.thirdParty}>
        {"Ingresar con Apple"}
      </Button>
    </Screen>
  );
};

export { SignIn };
