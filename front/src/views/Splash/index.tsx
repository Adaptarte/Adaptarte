import React from "react";
import { ActivityIndicator, Image, View } from "react-native";

import { imgs } from "assets/imgs";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import { colors } from "styles";

import { styles, textVars } from "./styles";

const Splash = (): JSX.Element => {
  return (
    <Screen style={styles.container}>
      <Text variant={textVars.header}>{"Adaptarte"}</Text>
      <View>
        <Image source={imgs.helloCuidador} style={styles.img} />
        <ActivityIndicator color={colors.BLUE} size={192} />
      </View>
    </Screen>
  );
};

export { Splash };
