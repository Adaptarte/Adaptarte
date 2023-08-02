import React from "react";
import { View } from "react-native";

import { Icon } from "components/Icon";
import { Img } from "components/Img";
import { Text } from "components/Text";
import { colors } from "styles";
import { useScore } from "utils/engagement/score";

import { styles } from "./styles";
import type { ProfileHeaderProps } from "./types";

const ProfileHeader = ({ name, photo }: ProfileHeaderProps): JSX.Element => {
  const score = useScore();

  return (
    <View style={styles.header}>
      <View style={styles.imgContainer}>
        {photo ? (
          <Img src={{ uri: photo }} style={styles.img} />
        ) : (
          <Icon color={colors.GREY} name={"user-circle"} size={128} />
        )}
      </View>
      <Text variant={{ size: 3, weight: "bold" }}>{name ?? "Paciente"}</Text>
      <Text variant={{ size: 2, weight: "bold" }}>
        <Icon color={colors.YELLOW} name={"star"} size={16} />
        {score.value}
      </Text>
    </View>
  );
};

export { ProfileHeader };
