import { StyleSheet } from "react-native";

import type { ButtonVariant } from "components/Button/types";

const styles = StyleSheet.create({
  btn: {
    marginVertical: 4
  }
});

const btnVars: Record<"thirdParty", ButtonVariant> = {
  thirdParty: {
    color: "GLAUCOUS",
    style: "outline"
  }
};

export { btnVars, styles };
