import { StyleSheet } from "react-native";

import { lexendFamily } from "assets/fonts";
import { colors } from "styles";

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    backgroundColor: colors.YELLOW,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    height: 70,
    justifyContent: "center",
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  checkBox: {
    marginLeft: "6%", 
    marginRight: "auto",
    width: "15%", 
  },
  container: {
    width: "25%",
  },
  content: {
    width: "55%",
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
