import { StyleSheet } from "react-native";

import { lexendFamily } from "assets/fonts";
import { colors, font } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GLAUCOUS,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    padding: 24,
  },
  hour: {
    color: colors.WHITE,
    fontFamily: lexendFamily.Regular,
    fontSize: 11,
  },
  img: {
    height: 80,
    marginLeft: 24,
    resizeMode: "contain",
    width: 80,
  },
  textWrapper: {
    flexBasis: 0,
    flexGrow: 1,
  },
  title: {
    color: colors.WHITE,
    fontFamily: lexendFamily.Bold,
    fontSize: font.sizes[1],
  },
});

export { styles };
