import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";

const styles = StyleSheet.create({
  description: {
    marginBottom: 16
  },
  title: {
    marginBottom: 8,
    marginTop: 32
  }
});

const textVars: TextVariants<"title"> = {
  title: {
    color: "GLAUCOUS",
    size: 3,
    weight: "bold"
  }
};

export { styles, textVars };
