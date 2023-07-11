import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: colors.WHITE,
    borderColor: colors.BLUE_PURPLE,
    borderRadius: 8,
    borderWidth: 2,
    display: "flex",
    padding: 4
  },
  deleteBtn: {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1
  },

  image: {
    flexBasis: 1,
    flexGrow: 1,
    marginTop: 10
  },
  name: {
    marginTop: 10,
    textAlign: "center"
  }
});

export { styles };
