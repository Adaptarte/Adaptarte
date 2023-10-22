import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 16,
    display: "flex",
    height: 240,
    flexDirection: "row",
    padding: 20,
  },
  details: {
    marginBottom: 15,
  },
  image: {
    height: 100,
    width: 60,
  },
  textContainer: {
    flexBasis: 1,
    flexGrow: 1,
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  title: {
    marginBottom: 15,
  },
});

const textVars: TextVariants<"content" | "title"> = {
  content: {
    color: "WHITE",
    size: 1,
  },
  title: {
    color: "WHITE",
    size: 4,
    weight: "bold",
  },
};

export { styles, textVars };
