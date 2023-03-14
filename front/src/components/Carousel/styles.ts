import { StyleSheet } from "react-native";

import type { TextVariant } from "components/Text/types";

const styles = StyleSheet.create({
  arrowContainer: {
    marginBottom: "auto",
    marginTop: "auto",
    paddingLeft: 5,
    paddingRight: 5
  },
  ball: {
    backgroundColor: "grey",
    borderRadius: 200,
    height: 5,
    margin: 2,
    opacity: 0.5,
    width: 5
  },
  cardContainer: {
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    padding: 10
  },
  currentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 5
  }
});

const textVarArrow: TextVariant = {
  color: "WHITE",
  size: 3,
  weight: "bold"
};

export { styles, textVarArrow };
