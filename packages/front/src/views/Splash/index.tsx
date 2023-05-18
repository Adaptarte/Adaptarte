import React from "react";
import { ActivityIndicator, View } from "react-native";

import { Img } from "components/Img";
import { Screen } from "components/Screen";
import { Text } from "components/Text";
import { colors } from "styles";

import { styles, textVars } from "./styles";

const Splash = (): JSX.Element => {
  return (
    <Screen style={styles.container}>
      <Text variant={textVars.header}>{"Adaptarte"}</Text>
      <View>
        <Img src={"care"} style={styles.img} />
        <ActivityIndicator color={colors.BLUE} size={192} />
      </View>
    </Screen>
  );
};

export { Splash };
