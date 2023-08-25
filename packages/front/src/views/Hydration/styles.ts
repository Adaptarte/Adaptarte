import { StyleSheet } from "react-native";

import type { TextVariants } from "components/Text/types";
import { colors } from "styles/colors";

const styles = StyleSheet.create({
  amountWater: {
    display: "flex",
    flexDirection: "row",
  },
  bottle: {
    aspectRatio: undefined,
    height: 300,
    resizeMode: "cover",
  },
  bottleContainer: {
    borderRadius: 30,
    overflow: "hidden",
    position: "relative",
    width: 112,
  },
  btn: {
    aspectRatio: 1,
    backgroundColor: colors.BLUE_PURPLE,
    borderRadius: 35,
    marginVertical: 16,
    width: 70,
  },
  center: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginVertical: 16,
  },
  water: {
    backgroundColor: colors.BLUE_LIGHT,
    bottom: 0,
    position: "absolute",
    start: "4%",
    width: "92%",
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
