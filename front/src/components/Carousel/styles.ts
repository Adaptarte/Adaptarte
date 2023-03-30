import { StyleSheet } from "react-native";

import type { TextVariant } from "components/Text/types";

const styles = StyleSheet.create({
  nextBtn: {
    height: "100%",
    position: "absolute",
    right: 0
  },
  pageIndicator: {
    backgroundColor: "grey",
    borderRadius: 3,
    height: 6,
    margin: 2,
    opacity: 0.5,
    width: 6
  },
  pageIndicatorSelected: {
    opacity: 1
  },
  paginator: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 5
  }
});

const textVarNextBtn: TextVariant = {
  color: "WHITE",
  size: 3,
  weight: "bold"
};

export { styles, textVarNextBtn };
