import React, { useCallback } from "react";

import { Button } from "components/Button";
import { signInApple, signInGoogle } from "utils/auth";

import { btnVars, styles } from "./styles";
import { t } from "./translations";

const Providers = (): JSX.Element => {
  const handleSignInWithGoogle = useCallback(() => {
    signInGoogle()
      .then(() => {
        console.log("Signed in with Google!");
      })
      .catch(console.error);
  }, []);

  const handleSignInWithApple = useCallback(() => {
    signInApple()
      .then(() => {
        console.log("Signed in with Apple!");
      })
      .catch(console.error);
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
    </>
  );
};

export { Providers };
