import React, { useReducer } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Img } from "components/Img";
import { Screen } from "components/Screen";
import { Text } from "components/Text";

import { Providers } from "./Providers";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { styles, textVars } from "./styles";
import { t } from "./translations";

const Authentication = (): JSX.Element => {
  const [showSignUp, toggleShowSignUp] = useReducer((val) => !val, false);

  return (
    <Screen>
      <Text variant={textVars.appName}>{t().title}</Text>
      <View style={styles.header}>
        <Img src={"care"} style={styles.img} />
      </View>
      {showSignUp ? <SignUp /> : <SignIn />}
      <Button onPress={toggleShowSignUp}>
        {showSignUp ? t().signIn : t().signUp}
      </Button>
      <View style={styles.hr} />
      <Providers />
    </Screen>
  );
};

export { Authentication };
