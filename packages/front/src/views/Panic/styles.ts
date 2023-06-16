import { StyleSheet } from "react-native";

import { colors } from "styles";

import type { TextVariants } from "../../components/Text/types";

const styles = StyleSheet.create({
  contacts: {
    backgroundColor: colors.YELLOW,
    borderRadius: 8,
    elevation: 4,
    marginBottom: 16,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  description: {
    marginBottom: 16
  },
  note: {
    textAlign: "center"
  },
  noteContainer: {
    backgroundColor: colors.YELLOW,
    borderRadius: 8,
    elevation: 4,
    marginVertical: 16,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    textAlign: "center"
  },
  textContacts: {
    fontWeight: "bold"
  },
  title: {
    marginBottom: 16
  }
});

const textVars: TextVariants<"textContact" | "title"> = {
  textContact: {
    weight: "bold"
  },
  title: {
    color: "GLAUCOUS",
    size: 3,
    weight: "bold"
  }
};

export { styles, textVars };
