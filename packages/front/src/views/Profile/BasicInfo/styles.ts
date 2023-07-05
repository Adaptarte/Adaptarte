import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";

const styles = StyleSheet.create({
  title: {
    marginVertical: 16
  }
});

const textVars: TextVariants<"info" | "title"> = {
  info: {
    weight: "bold"
  },
  title: {
    color: "GLAUCOUS",
    size: 3,
    weight: "bold"
  }
};

export { styles, textVars };
