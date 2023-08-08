import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
  },
});

const textVars: TextVariants<"label"> = {
  label: {
    weight: "bold",
  },
};

export { styles, textVars };
