import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    top: 0,
  },
  header: {
    zIndex: 2,
  },
  headerContainer: {
    alignItems: "center",
    display: "flex",
    position: "relative",
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
