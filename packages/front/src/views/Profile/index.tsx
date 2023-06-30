import React, { useCallback } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Column, Row } from "components/Grid";
import { Img } from "components/Img";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import { signOut, useUser } from "utils/auth";
import { refUser, useDbUser } from "utils/db/firebase";
import type { DBUser } from "utils/db/types";

import { Diseases } from "./Diseases";
import { styles, textVars } from "./styles";

const Profile = (): JSX.Element => {
  const user = useUser();
  const userData = useDbUser(user.uid);
  const photoSrc = user.photoURL === null ? "profile" : { uri: user.photoURL };

  const handleChangeDiseases = useCallback((diseases: DBUser["diseases"]) => {
    refUser(user.uid).update({ diseases }).catch(console.error);
  }, []);

  return (
    <Screen>
      <View style={styles.header}>
        <Img src={photoSrc} style={styles.img} />
        <Text
          style={styles.title}
          variant={{
            size: 3,
            weight: "bold"
          }}
        >
          {user.displayName ?? "Paciente"}
        </Text>
      </View>
      <Diseases
        diseases={userData?.diseases ?? {}}
        key={JSON.stringify(userData?.diseases)}
        onChange={handleChangeDiseases}
      />
      <Text style={styles.title} variant={textVars.title}>
        {"Datos básicos"}
      </Text>
      <Row columns={3}>
        <Column size={1}>
          <Text variant={textVars.info}>{"C.C."}</Text>
        </Column>
        <Column size={2}>
          <Text>{"??"}</Text>
        </Column>
        <Column size={1}>
          <Text variant={textVars.info}>{"Teléfono"}</Text>
        </Column>
        <Column size={2}>
          <Text>{user.phoneNumber ?? "??"}</Text>
        </Column>
        <Column size={1}>
          <Text variant={textVars.info}>{"Email"}</Text>
        </Column>
        <Column size={2}>
          <Text>{user.email ?? "??"}</Text>
        </Column>
      </Row>
      <Button
        onPress={signOut}
        style={styles.signOut}
        variant={{ style: "solid" }}
      >
        {"Cerrar sesión"}
      </Button>
    </Screen>
  );
};

export { Profile };
