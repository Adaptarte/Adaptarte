import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: -100,
    width: "100%",
  },
  diseases: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 8,
  },
  img: {
    borderRadius: 64,
    width: 128,
  },
  imgContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 84,
    padding: 20,
  },
});

export { styles };
