import React from "react";

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
    </Screen>
  );
};

export { Calm };
