import React, { useCallback } from "react";
import { View } from "react-native";

import { Button } from "components/Button";
import { Screen } from "components/Screen";
import type { TAppViewProps } from "navigation/App/types";
import { signOut, useUser } from "utils/auth";
import { useDB } from "utils/db";

import { BasicInfo } from "./BasicInfo";
import { ProfileHeader } from "./Header";
import { styles } from "./styles";
import { t } from "./translations";

const Profile = ({
  navigation: { navigate },
}: TAppViewProps<"Profile">): JSX.Element => {
  const db = useDB();
  const user = useUser();
  const userData = db.getUser();

  const goToPanic = useCallback(() => {
    navigate("Panic");
  }, [navigate]);

  return (
    <Screen bg={"LIGHT"} style={styles.screen}>
      <View style={styles.container}>
        <ProfileHeader
          diseases={userData?.diseases ?? {}}
          name={userData?.basicInfo?.name}
          photo={user.photoURL}
        />
        <BasicInfo data={userData?.basicInfo} />
        <Button
          onPress={goToPanic}
          style={styles.panicBtn}
          variant={{ color: "RED_LIGHT", style: "solid" }}
        >
          {t().panic}
        </Button>
        <View style={styles.hr} />
        <Button onPress={signOut} variant={{ style: "solid" }}>
          {t().signOut}
        </Button>
      </View>
    </Screen>
  );
};

export { Profile };
