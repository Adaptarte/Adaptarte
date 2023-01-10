import { StyleSheet } from "react-native";

import { lexendFamily } from "assets/fonts";
import { colors } from "styles";

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    backgroundColor: colors.YELLOW,
    borderColor: colors.TRANSPARENT,
    borderRadius: 20,
    borderWidth: 1,
    display: "flex",
    elevation: 4,
    flexDirection: "row",
    height: 70,
    justifyContent: "center",
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    width: "100%",
  },
  checkBox: {
    marginLeft: "6%", 
    marginRight: "auto",
    position: "relative",
    width: "15%", 
    zIndex: -1,
  },
  container: {
    width: "25%",
  },
  content: {
    width: "55%",
  },
  contentContainer: {
    width: "100%",
  },
  elipse: {
    backgroundColor: colors.PURPLE_TRANSLUCID,
    borderRadius: 200,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    width: 50,
  },
  hour: {
    color: colors.BLACK,
    fontFamily: lexendFamily.Light,
    fontSize: 10,
  },
  img: {
    height: 54,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 6,
    width: 38,
  },
  title: {
    color: colors.BLACK,
    fontFamily: lexendFamily.Bold,
    fontSize: 13,
    whiteSpace: "initial",
  },
});

export { styles };
