import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";
import { colors } from "styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 16
  },
  profile: {
    height: 60,
    marginLeft: 20,
    width: 60
  },
  screen: {
    padding: 0
  },
  sectionTitle: {
    marginBottom: 16,
    marginLeft: 12
  },
  welcome: {
    display: "flex",
    flexDirection: "row",
    margin: 16
  },
  welcomeText: {
    flexBasis: 0,
    flexGrow: 1
  }
});

const textVars: TextVariants<"title" | "welcome"> = {
  title: {
    color: "GLAUCOUS",
    size: 3,
    weight: "bold"
  },
  welcome: {
    color: "GLAUCOUS",
    size: 5,
    weight: "bold"
  }
};

export { styles, textVars };
