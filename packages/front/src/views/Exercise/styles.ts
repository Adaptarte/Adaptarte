import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";
import { colors } from "styles";

const styles = StyleSheet.create({
  closeButton: {
    borderRadius: 200,
    padding: 4,
    position: "absolute",
    right: 15,
    top: 15,
    zIndex: 1
  },
  exercise: {
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    elevation: 10,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: {
      height: 7,
      width: 0
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    width: "100%"
  },
  exerciseText: {
    marginBottom: 12
  },
  exerciseTitle: {
    marginBottom: 8
  },
  modalExercise: {
    flex: 1,
    justifyContent: "flex-end"
  }
});

const textVars: TextVariants<"details" | "title"> = {
  details: {
    size: 1
  },
  title: {
    color: "ORANGE",
    size: 3,
    weight: "bold"
  }
};

export { styles, textVars };
