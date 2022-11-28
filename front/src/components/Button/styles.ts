import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    elevation: 8,
    height: 30,
    justifyContent: "center",
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    width: "75%",
  },
  text: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export { styles };
