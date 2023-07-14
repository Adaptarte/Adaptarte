import React, { useCallback } from "react";

import { Button } from "components/Button";
import { Screen } from "components/Screen";
import { signOut, useUser } from "utils/auth";
import { useDB } from "utils/db";
import type { DBUser } from "utils/db/types";

import { BasicInfo } from "./BasicInfo";
import { Diseases } from "./Diseases";
import { ProfileHeader } from "./Header";
import { styles } from "./styles";

const Profile = (): JSX.Element => {
  const db = useDB();
  const user = useUser();
  const userData = db.getUser();

  const handleChangeDiseases = useCallback((diseases: DBUser["diseases"]) => {
    db.updateUser({ diseases });
  }, []);

  const handleChangeBasicInfo = useCallback(
    (basicInfo: DBUser["basicInfo"]) => {
      db.updateUser({ basicInfo });
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
      <BasicInfo
        data={userData?.basicInfo}
        key={JSON.stringify(userData?.basicInfo)}
        onChange={handleChangeBasicInfo}
      />
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
