import { StyleSheet } from "react-native";

import { colors, font } from "styles";

const styles = StyleSheet.create({
  backButton: {
    padding: 4,
  },
  backImage: {
    height: 16,
    resizeMode: "contain",
    tintColor: colors.GLAUCOUS,
    width: 16,
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.LIGHT,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    color: colors.GLAUCOUS,
    fontSize: font.sizes[5],
    fontWeight: "bold",
    marginLeft: 16,
  }
});

export { styles };
