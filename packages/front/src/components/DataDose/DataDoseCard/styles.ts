import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    height: 90,
  },
  img: {
    marginLeft: 24,
    width: "20%",
  },
  textWrapper: {
    width: "70%",
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
