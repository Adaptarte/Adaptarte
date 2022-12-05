import { StyleSheet } from "react-native";

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
    paddingLeft: 5,
    paddingRight: 5,
    width: 107,
  },
  checkText: {
    color: colors.WHITE,
    fontSize: 11,
    marginBottom: "auto",
    marginTop: "auto",
  },
  content: {
    color: colors.WHITE,
    fontSize: 12,
    fontWeight: "400",
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
    fontSize: font.sizes[4],
    fontWeight: "600",
    marginBottom: 5,
  }
});

export { styles };
