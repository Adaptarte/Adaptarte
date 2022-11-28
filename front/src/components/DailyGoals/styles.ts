import { StyleSheet } from "react-native";

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
    fontSize: 10,
  },
  img: {
    height: 40,
    marginBottom: 10,
    width: 40,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    whiteSpace: "initial",
  },
});

export { styles };
