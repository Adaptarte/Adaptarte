import React, { useCallback } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Img } from "components/Img";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import { signOut, useUser } from "utils/auth";
import { refUser, useDbUser } from "utils/db/firebase";
import type { DBUser } from "utils/db/types";

import { BasicInfo } from "./BasicInfo";
import { Diseases } from "./Diseases";
import { styles } from "./styles";

const Profile = (): JSX.Element => {
  const user = useUser();
  const userData = useDbUser(user.uid);
  const photoSrc = user.photoURL === null ? "profile" : { uri: user.photoURL };

  const handleChangeDiseases = useCallback((diseases: DBUser["diseases"]) => {
    refUser(user.uid).update({ diseases }).catch(console.error);
  }, []);

  const handleChangeBasicInfo = useCallback(
    (basicInfo: DBUser["basicInfo"]) => {
      refUser(user.uid).update({ basicInfo }).catch(console.error);
    },
    []
  );

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
      <BasicInfo data={userData?.basicInfo} onChange={handleChangeBasicInfo} />
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
