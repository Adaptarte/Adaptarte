import { StyleSheet } from "react-native";

import { lexendFamily } from "assets/fonts";
import { colors, font } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20
  },
  profile: {
    height: 60,
    marginLeft: 20,
    width: 60
  },
  sectionTitle: {
    color: colors.GLAUCOUS,
    fontFamily: lexendFamily.Bold,
    fontSize: font.sizes[3],
    marginBottom: 16,
    marginLeft: 12
  },
  welcome: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20
  },
  welcomeText: {
    color: colors.GLAUCOUS,
    flexBasis: 0,
    flexGrow: 1,
    fontFamily: lexendFamily.Bold,
    fontSize: 25
  }
});

export { styles };
