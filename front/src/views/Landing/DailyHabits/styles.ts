import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  column: {
    padding: 8,
    width: "50%",
  },
  container: {
    backgroundColor: colors.WHITE,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: -8,
  },
});

export { styles };
