import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    height: 240,
    justifyContent: "flex-start",
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
    display: "flex",
    flexBasis: 1,
    flexDirection: "column",
    flexGrow: 1,
    height: "100%",
    justifyContent: "space-between",
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
