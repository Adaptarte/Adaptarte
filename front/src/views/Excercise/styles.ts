import { StyleSheet } from "react-native";

import { colors, font } from "styles";

const styles = StyleSheet.create({
  closeButton: {
    padding: 4,
    position: "absolute",
    right: 15,
    top: 15,
  },
  closeImage: {
    height: 28,
    resizeMode: "contain",
    tintColor: colors.ORANGE,
    width: 28,
  },
  excercise: {
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    elevation: 10,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: {
      height: 7,
      width: 0,
    },
    shadowOpacity:  0.21,
    shadowRadius: 7.68,
    width: "100%",
  },
  excerciseText: {
    color: colors.BLACK,
    fontSize: font.sizes[1],
    marginBottom: 8,
  },
  excerciseTitle: {
    color: colors.ORANGE,
    fontSize: font.sizes[3],
    marginBottom: 8,
  },
  modalExercise: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export { styles };
