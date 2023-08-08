import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  button: {
    marginLeft: 4,
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  field: {
    flexGrow: 1,
  },
  text: {
    borderBottomColor: colors.BLACK,
    borderBottomWidth: 1,
    paddingVertical: 2,
  },
});

export { styles };
