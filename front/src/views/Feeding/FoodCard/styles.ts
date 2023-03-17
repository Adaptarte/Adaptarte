import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  backimage: {
    position: "relative",
    zIndex: 1,
    borderColor: colors.BLUE_PURPLE,
    borderRadius: 20,
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
  closecontainer: {
    borderRadius: 20,
    height: 20,
    width: 20,
    marginLeft: 75
  },
  image: {
    flexBasis: 1,
    flexGrow: 1,
    resizeMode: "contain"
  },
  name: {
    marginTop: 8,
    textAlign: "center"
  }
});

export { styles };
