import { StyleSheet } from "react-native";

import { lexendFamily } from "assets/fonts";
import { colors } from "styles";

const styles = StyleSheet.create({
  numberInput: {
    color: "black",
    fontFamily: lexendFamily.Regular,
    fontSize: 14,
    height: "100%",
    paddingVertical: 3,
    textAlign: "left",
    width: "90%",
  },
  numberInputContainer: {
    backgroundColor: colors.LIGHT,
    borderColor: colors.GREY,
    borderRadius: 5,
    borderWidth: 1,
    height: 26,
    padding: 0,
    paddingHorizontal: 10,
    width: "100%",
  },
});

export { styles };
