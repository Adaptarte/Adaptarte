import React, { useCallback } from "react";

import { Button } from "components/Button";
import { Screen } from "components/Screen";
import { signOut, useUser } from "utils/auth";
import { refUser, useDbUser } from "utils/db/firebase";
import type { DBUser } from "utils/db/types";

import { BasicInfo } from "./BasicInfo";
import { Diseases } from "./Diseases";
import { ProfileHeader } from "./Header";
import { styles } from "./styles";

const Profile = (): JSX.Element => {
  const user = useUser();
  const userData = useDbUser(user.uid);

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
      <ProfileHeader name={user.displayName} photo={user.photoURL} />
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
