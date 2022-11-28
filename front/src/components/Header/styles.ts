import { StyleSheet } from "react-native";
import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    width: "75%",
  },
  text: {
    color: colors.GLAUCOUS,
    fontSize: 34,
  },
  profile: {
    height: 68,
    width: 68,
  },
});

export { styles };
