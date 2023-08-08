import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  text: {
    textShadowColor: colors.BLACK,
    textShadowOffset: { height: 0, width: 0 },
    textShadowRadius: 8,
  },
  touchable: {
    alignItems: "center",
    backgroundColor: "#0008",
    borderRadius: 8,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
});

export { styles };
