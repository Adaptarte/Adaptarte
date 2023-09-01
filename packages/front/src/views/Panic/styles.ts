import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";
import { colors } from "styles";

const styles = StyleSheet.create({
  contacts: {
    backgroundColor: colors.YELLOW_LIGHT,
    borderRadius: 8,
    elevation: 1,
    marginBottom: 16,
    padding: 10,
    position: "relative",
    shadowColor: "#000000",
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    textAlign: "center",
  },
  delete: {
    left: 20,
    position: "absolute",
    top: "45%",
    zIndex: 3,
  },
  description: {
    marginBottom: 16,
  },
  iconContainer: {
    alignItems: "center",
    height: 30,
    justifyContent: "center",
    position: "absolute",
    right: 20,
    top: "40%",
    width: 30,
    zIndex: 1,
  },
  note: {
    textAlign: "center",
  },
  noteContainer: {
    backgroundColor: colors.GLAUCOUS,
    borderRadius: 8,
    elevation: 1,
    marginVertical: 16,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    textAlign: "center",
  },
  textContacts: {
    textAlign: "center",
  },
  title: {
    marginBottom: 16,
  },
});

const textVars: TextVariants<"note" | "textContact" | "title"> = {
  note: {
    color: "WHITE",
  },
  textContact: {
    color: "BLACK",
    weight: "bold",
  },
  title: {
    color: "GLAUCOUS",
    size: 3,
    weight: "bold",
  },
};

export { styles, textVars };
