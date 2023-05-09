import { StyleSheet } from "react-native";

import { getTextStyle } from "components/Text";
import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    width: "100%"
  },
  input: {
    backgroundColor: colors.LIGHT,
    borderColor: colors.GREY_LIGHT,
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  inputText: getTextStyle({
    color: "BLACK",
    size: 1
  })
});

export { styles };
