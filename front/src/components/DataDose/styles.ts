import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GLAUCOUS,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    padding: 24,
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
  }
});

export { styles };
