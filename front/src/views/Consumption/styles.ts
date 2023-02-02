import { StyleSheet } from "react-native";

import { colors, font } from "styles";

const styles = StyleSheet.create({
  cancelButton: {
    marginTop: 16
  },
  foodAddButton: {
    alignSelf: "center",
    backgroundColor: colors.GLAUCOUS,
    borderRadius: 8,
    padding: 8
  },
  foodAddImage: {
    height: 16,
    tintColor: colors.WHITE,
    width: 16
  },
  foodImage: {
    aspectRatio: 1.5,
    height: undefined,
    marginBottom: 4,
    resizeMode: "contain",
    width: "100%"
  },
  foodName: {
    color: colors.BLACK,
    fontSize: font.sizes[2],
    marginBottom: 8,
    textAlign: "center"
  },
  title: {
    color: colors.GLAUCOUS,
    fontSize: font.sizes[3],
    fontWeight: "bold",
    marginBottom: 16
  }
});

export { styles };
