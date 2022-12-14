import { StyleSheet } from "react-native";

import { lexendFamily } from "assets/fonts";
import { colors, font } from "styles";

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    height: 180,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    width: "90%",
  },
  checkContainer: {
    borderColor: colors.WHITE,
    borderRadius: 20,
    borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    marginTop: 25,
    padding: 5,
    textAlign: "center",
    width: 107,
  },
  checkText: {
    color: colors.WHITE,
    fontFamily: lexendFamily.ExtraBold,
    fontSize: 9,
    marginBottom: "auto",
    marginTop: "auto",
    textAlign: "center",
    width: "80%",
  },
  content: {
    color: colors.WHITE,
    fontFamily: lexendFamily.Regular,
    fontSize: 10,
    height: 56,
  },
  image: {
    height: 120,
    marginBottom: "auto",
    marginTop: "auto",
    resizeMode: "contain",
    width: "30%",
  },
  textContainer: {
    width: "70%",
  },
  title: {
    color: colors.WHITE,
    fontFamily: lexendFamily.SemiBold,
    fontSize: font.sizes[4],
    marginBottom: 5,
    width: 200,
  }
});

export { styles };
