import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 2,
  },
  img: {
    borderRadius: 64,
    width: 128,
  },
  imgContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 100,
    padding: 20,
  },
});

export { styles };
