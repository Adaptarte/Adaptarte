import React from "react";
import { View } from "react-native";

import { Img } from "components/Img";
import { Screen } from "components/Screen";
import { Text } from "components/Text";

import { styles, textVars } from "./styles";
import { t } from "./translations";

const Calm = (): JSX.Element => {
  return (
    <Screen>
      <Text style={styles.text} variant={textVars.title}>
        {t().stress.title}
      </Text>
      <Text style={styles.text}>{t().stress.whatIs}</Text>
      <Text style={styles.text}>{t().stress.consequences}</Text>

      <Text style={styles.text} variant={textVars.title}>
        {t().calm.title}
      </Text>
      <View style={styles.center}>
        <Img src={"calm"} style={styles.calmImg} />
      </View>
      <Text style={styles.text}>{t().calm.content}</Text>
    </Screen>
  );
};

export { Calm };
