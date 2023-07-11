import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Platform, SafeAreaView } from "react-native";

import { Button } from "components/Button";
import { Icon } from "components/Icon";
import { Text } from "components/Text";
import { colors } from "styles";

import { styles, textVarTitle } from "./styles";

const Header = ({
  navigation: { canGoBack, goBack },
  options: { headerStyle, title }
}: NativeStackHeaderProps): JSX.Element => {
  const hasGoBack = canGoBack();
  const hasTitle = title !== undefined;

  return (
    <SafeAreaView
      style={[(hasGoBack || hasTitle) && styles.container, headerStyle]}
    >
      {hasGoBack ? (
        <Button
          onPress={goBack}
          style={[Platform.OS === "ios" ? { paddingLeft: 20 } : null]}
        >
          <Icon color={colors.GLAUCOUS} name={"arrow-left"} size={20} />
        </Button>
      ) : null}
      {hasTitle ? (
        <Text style={styles.title} variant={textVarTitle}>
          {title}
        </Text>
      ) : null}
    </SafeAreaView>
  );
};

export { Header };
