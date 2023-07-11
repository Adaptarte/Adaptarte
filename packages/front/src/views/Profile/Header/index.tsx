import React from "react";
import { View } from "react-native";

import { Icon } from "components/Icon";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { colors } from "styles";

import { styles } from "./styles";
import type { ProfileHeaderProps } from "./types";

const ProfileHeader = ({ name, photo }: ProfileHeaderProps): JSX.Element => {
  return (
    <View style={styles.header}>
      {photo ? (
        <Img src={{ uri: photo }} style={styles.img} />
      ) : (
        <Icon color={colors.GREY} name={"user-circle"} size={128} />
      )}
      <Text style={styles.title} variant={{ size: 3, weight: "bold" }}>
        {name ?? "Paciente"}
      </Text>
    </View>
  );
};

export { ProfileHeader };
