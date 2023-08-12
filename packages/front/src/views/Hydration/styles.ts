import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";
import { colors } from "styles/colors";

const styles = StyleSheet.create({
  amountWater: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 4,
  },
  bottleContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    overflow: "hidden",
    position: "relative",
  },
  btn: {
    backgroundColor: colors.BLUE_PURPLE,
    borderRadius: 40,
    height: 70,
    width: 70,
  },
  btnContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
  },
  screen: {
    display: "flex",
    height: "95%",
    justifyContent: "space-between",
  },
  waterfill: {
    backgroundColor: colors.BLUE_LIGHT,
  },
  waterfillContainer: {
    borderRadius: 30,
    display: "flex",
    flexDirection: "column-reverse",
    left: "33%",
    overflow: "hidden",
    position: "absolute",
  },
});

const textVars: TextVariants<"indicator" | "title"> = {
  indicator: {
    color: "GLAUCOUS",
    size: 2,
    weight: "bold",
  },
  title: {
    color: "GLAUCOUS",
    size: 3,
    weight: "bold",
  },
};

export { styles, textVars };
