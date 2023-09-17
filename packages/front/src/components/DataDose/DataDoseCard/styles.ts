import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
  },
  img: {
    marginLeft: 24,
    width: 80,
  },
  textWrapper: {
    flexBasis: 0,
    flexGrow: 1,
  },
});

const textVars: TextVariants<"details" | "tip"> = {
  details: {
    color: "WHITE",
    size: 1,
  },
  tip: {
    color: "WHITE",
    size: 1,
    weight: "bold",
  },
};

export { styles, textVars };
