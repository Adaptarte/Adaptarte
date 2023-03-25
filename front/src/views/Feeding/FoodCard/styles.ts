import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  deleteItem: {
    borderColor: colors.BLUE_PURPLE,
    borderRadius: 10,
    borderWidth: 2,
    height: 20,
    width: 20
  },
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
  deleteItemContainer: {
    position: "absolute",
    right: 5,
    top: 5,
    zIndex: 1
  },
  image: {
    flexBasis: 1,
    flexGrow: 1,
    marginTop: 10,
    resizeMode: "contain"
  },
  name: {
    marginTop: 10,
    textAlign: "center"
  }
});

export { styles };
