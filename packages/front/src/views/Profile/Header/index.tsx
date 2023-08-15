import React from "react";
import { View } from "react-native";

import { Icon } from "components/Icon";
import { Img } from "components/Img";
import { Tag } from "components/Tag";
import { Text } from "components/Text";
import { colors } from "styles";
import { allDiseases } from "utils/db/types";
import { useScore } from "utils/engagement/score";
import { fillDiseases } from "utils/patient";

import { styles } from "./styles";
import type { ProfileHeaderProps } from "./types";
import { t } from "./translations";

const ProfileHeader = ({
  diseases,
  name,
  photo,
}: ProfileHeaderProps): JSX.Element => {
  const score = useScore();
  const fullDiseases = fillDiseases(diseases);

  return (
    <View style={styles.container}>
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
      <View style={styles.diseases}>
        {allDiseases.map((el) =>
          fullDiseases[el] ? (
            <Tag bg={"YELLOW_LIGHT"} key={el}>
              {t()[el]}
            </Tag>
          ) : null,
        )}
      </View>
    </View>
  );
};

export { ProfileHeader };
