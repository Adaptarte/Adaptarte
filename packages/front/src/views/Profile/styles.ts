import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 100,
    padding: 16,
  },
  hr: {
    borderBottomColor: colors.GLAUCOUS,
    borderBottomWidth: 2,
    marginVertical: 16,
  },
  panicBtn: {
    marginTop: 16,
  },
  screen: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
  },
  tags: {
    display: "flex",
    flexDirection: "row",
  },
});

export { styles };
