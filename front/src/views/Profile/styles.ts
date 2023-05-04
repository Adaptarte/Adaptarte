import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  img: {
    borderRadius: 64,
    width: 128
  },
  signOut: {
    marginTop: 16
  },
  tags: {
    display: "flex",
    flexDirection: "row"
  },
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
