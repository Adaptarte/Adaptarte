import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";

const styles = StyleSheet.create({
  text: {
    marginBottom: 8
  }
});

const textVars: TextVariants<"title"> = {
  title: {
    color: "GLAUCOUS",
    size: 4
  }
};

export { styles, textVars };
