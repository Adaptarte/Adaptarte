import React from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Column, Row } from "components/Grid";
import { Img } from "components/Img";
import { Screen } from "components/Screen";
import { Tag } from "components/Tag";
import { Text } from "components/Text";
import { signOut, useUser } from "utils/auth";

import { styles, textVars } from "./styles";

const Profile = (): JSX.Element => {
  const user = useUser();
  const photoSrc = user.photoURL === null ? "profile" : { uri: user.photoURL };

  return (
    <Screen>
      <View style={styles.header}>
        <Img style={styles.img} src={photoSrc} />
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
      <Row spacing={8}>
        {["Hipertensión", "Artritis"].map((el) => (
          <Tag bg={"YELLOW"} key={el}>
            {el}
          </Tag>
        ))}
      </Row>
      <Text style={styles.title} variant={textVars.title}>
        {"Datos básicos"}
      </Text>
      <Row columns={3}>
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
