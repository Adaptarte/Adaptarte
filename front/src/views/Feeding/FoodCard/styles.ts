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
    right: 5,
    top: 5,
    zIndex: 1
  },
  deleteBtnImg: {
    borderColor: colors.BLUE_PURPLE,
    borderRadius: 10,
    borderWidth: 2,
    tintColor: colors.BLUE_PURPLE,
    width: 20
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
