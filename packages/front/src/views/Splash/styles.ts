import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";
import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "center"
  },
  img: {
    backgroundColor: colors.BLUE,
    borderRadius: 96,
    margin: 32,
    position: "absolute",
    width: 128
  }
});

const textVars: TextVariants<"header"> = {
  header: {
    color: "BLUE",
    size: 5,
    weight: "bold"
  }
};

export { styles, textVars };
