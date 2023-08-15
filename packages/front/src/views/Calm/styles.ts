import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";

const styles = StyleSheet.create({
  calmImg: {
    width: 150,
  },
  center: {
    alignItems: "center",
    display: "flex",
  },
  text: {
    marginBottom: 8,
  },
});

const textVars: TextVariants<"title"> = {
  title: {
    color: "GLAUCOUS",
    size: 3,
    weight: "bold",
  },
};

export { styles, textVars };
