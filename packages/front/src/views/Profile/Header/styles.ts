import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    left: "28%",
    marginTop: 20,
    position: "absolute",
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
