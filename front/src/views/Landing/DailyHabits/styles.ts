import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 15,
    width: "100%",
  },
});

export { styles };
