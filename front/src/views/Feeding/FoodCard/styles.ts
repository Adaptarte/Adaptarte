import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: colors.WHITE,
    borderColor: colors.LIGHT,
    borderRadius: 8,
    borderWidth: 1,
    display: "flex",
    padding: 8
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
