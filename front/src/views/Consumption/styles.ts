import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";
import { colors } from "styles";

const styles = StyleSheet.create({
  cancelButton: {
    marginTop: 16
  },
  foodAddButton: {
    alignSelf: "center",
    backgroundColor: colors.GLAUCOUS,
    borderRadius: 8,
    padding: 8
  },
  foodAddImage: {
    height: 16,
    tintColor: colors.WHITE,
    width: 16
  },
  foodImage: {
    aspectRatio: 1.5,
    height: undefined,
    marginBottom: 4,
    resizeMode: "contain",
    width: "100%"
  },
  foodName: {
    marginBottom: 8,
    textAlign: "center"
  },
  title: {
    marginBottom: 16
  }
});

const textVars: TextVariants<"title"> = {
  title: {
    color: "GLAUCOUS",
    size: 3,
    weight: "bold"
  }
};

export { styles, textVars };
