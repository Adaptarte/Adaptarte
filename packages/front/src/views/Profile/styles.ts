import { StyleSheet } from "react-native";

import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 100,
    minHeight: 635,
    padding: 16,
    paddingTop: 150,
  },
  hr: {
    borderBottomColor: colors.GLAUCOUS,
    borderBottomWidth: 2,
    marginVertical: 12,
  },
  panicBtn: {
    marginVertical: 20,
  },
  signOut: {
    marginTop: 16,
  },
  tags: {
    display: "flex",
    flexDirection: "row",
  },
});

export { styles };
