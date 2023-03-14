import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";
import { colors } from "styles";

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    height: 180,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    width: "90%"
  },
  checkContainer: {
    borderColor: colors.WHITE,
    borderRadius: 20,
    borderWidth: 2,
    display: "flex",
    flexDirection: "row",
    marginTop: 25,
    padding: 5,
    textAlign: "center",
    width: 107
  },
  checkText: {
    marginBottom: "auto",
    marginTop: "auto",
    textAlign: "center",
    width: "80%"
  },
  content: {
    height: 56
  },
  image: {
    height: 120,
    marginBottom: "auto",
    marginTop: "auto",
    resizeMode: "contain",
    width: "30%"
  },
  textContainer: {
    width: "70%"
  },
  title: {
    marginBottom: 5,
    width: 200
  }
});

const textVars: TextVariants<"content" | "title"> = {
  content: {
    color: "WHITE",
    size: 1
  },
  title: {
    color: "WHITE",
    size: 4,
    weight: "bold"
  }
};

export { styles, textVars };
