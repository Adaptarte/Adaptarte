import { StyleSheet } from "react-native";

import type { ButtonVariant } from "components/Button/types";
import type { TextVariants } from "components/Text/types";
import { colors } from "styles";

const styles = StyleSheet.create({
  btn: {
    marginVertical: 4
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16
  },
  hr: {
    borderBottomColor: colors.GLAUCOUS,
    borderBottomWidth: 2,
    marginVertical: 12
  },
  img: {
    backgroundColor: colors.BLUE,
    borderRadius: 96,
    height: 128,
    resizeMode: "cover",
    width: 128
  }
});

const btnVars: Record<"signIn" | "thirdParty", ButtonVariant> = {
  signIn: {
    color: "GLAUCOUS",
    style: "solid"
  },
  thirdParty: {
    color: "GLAUCOUS",
    style: "outline"
  }
};

const textVars: TextVariants<"appName" | "signIn"> = {
  appName: {
    color: "GLAUCOUS",
    size: 5,
    weight: "bold"
  },
  signIn: {
    color: "GLAUCOUS",
    size: 4,
    weight: "bold"
  }
};

export { btnVars, styles, textVars };