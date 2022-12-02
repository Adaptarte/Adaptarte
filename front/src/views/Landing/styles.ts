import { StyleSheet } from "react-native";

import { colors, font } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
  },
  sectionTitle: {
    color: colors.GLAUCOUS,
    fontSize: font.sizes[3],
    marginBottom: 16,
    marginLeft: 24,
    fontWeight: "bold",
  },
});

export { styles };
