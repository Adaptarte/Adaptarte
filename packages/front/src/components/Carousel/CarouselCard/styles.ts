import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    padding: 20
  },
  details: {
    marginBottom: 15
  },
  image: {
    height: 100,
    width: 60
  },
  textContainer: {
    flexBasis: 1,
    flexGrow: 1
  },
  title: {
    marginBottom: 15
  }
});

const textVars: TextVariants<"content" | "title"> = {
  content: {
    color: "WHITE",
    size: 1
  },
  title: {
    color: "WHITE",
    size: 4,
    weight: "bold"
  }
};

export { styles, textVars };
