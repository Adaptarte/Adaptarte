import { StyleSheet } from "react-native";

import { colors, font } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
  },
  profile: {
    height: 60,
    marginLeft: 20,
    width: 60,
  },
  sectionTitle: {
    color: colors.GLAUCOUS,
    fontSize: font.sizes[3],
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 24,
  },
  welcome: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  welcomeText: {
    color: colors.GLAUCOUS,
    flexBasis: 0,
    flexGrow: 1,
    fontSize: font.sizes[5],
    fontWeight: "bold",
  },
});

export { styles };
